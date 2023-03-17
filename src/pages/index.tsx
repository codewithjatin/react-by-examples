import Head from 'next/head'
import useSetHeading from '@/hooks/useSetHeading'
import Link from 'next/link';

export default function Home() {
  useSetHeading("Dashboard");
  return (
    <>
      <p className="text-lg font-semibold mb-5">Please use the following links to see the working example of the components.</p>
      <ol className="list-decimal list-inside space-y-3">
        <li>
          <Link href='/styling'>Styling the components</Link>
        </li>
        <li>
          <Link href='/props-state-hooks'>Props, State and Hooks</Link>
        </li>
      </ol>
    </>
  )
}
