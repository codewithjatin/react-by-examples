import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import Header from '@/components/shared/header'
import { useEffect } from 'react'
import useSetHeading from '@/hooks/useSetHeading'
import { Component, Component2 } from '@/components/examples/styling/component-level/component'
import InlineStyleComponent from '@/components/examples/styling/inline-style-component'
import Banner from '@/components/examples/props-state-hooks/banner'
import SectionHeading from '@/components/shared/section-heading'
import IconButton from '@/components/examples/props-state-hooks/icon-button'
import { ArrowLongLeftIcon, ArrowLongRightIcon, ArrowUturnLeftIcon, HomeIcon } from '@heroicons/react/24/outline'

export default function Page() {
    useSetHeading("Props, State and Hooks");
    return (
        <>
            <SectionHeading title='Props example' />
            <div>
                <Banner bannerText='This is banner text' />
                <Banner bannerText='This is another banner text' />
            </div>
            <SectionHeading title='children example' className="mt-5" />
            <div className="grid grid-cols-12 gap-4">
                <IconButton><HomeIcon className="w-8 h-8" /></IconButton>
                <IconButton><ArrowLongLeftIcon className="w-8 h-8" /></IconButton>
                <IconButton><ArrowLongRightIcon className="w-8 h-8" /></IconButton>
                <IconButton><ArrowUturnLeftIcon className="w-8 h-8" /></IconButton>
            </div>
        </>
    )
}
