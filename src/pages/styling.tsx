import Head from 'next/head'
import Image from 'next/image'

import styles from '@/styles/Home.module.css'
import Header from '@/components/shared/header'
import { useEffect } from 'react'
import useSetHeading from '@/hooks/useSetHeading'
import { Component, Component2 } from '@/components/examples/styling/component-level/component'
import InlineStyleComponent from '@/components/examples/styling/inline-style-component'

export default function Styling() {
    useSetHeading("Styling");
    return (
        <>
            <Component />
            <Component2 />
            <InlineStyleComponent />
        </>
    )
}
