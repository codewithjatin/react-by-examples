// import '@/styles/globals.css'
import '@/styles/tailwind.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import DefaultLayout from "./layouts/DefaultLayout"

export default function App({ Component, pageProps }: AppProps) {
  return <DefaultLayout>
    <Component {...pageProps} />
  </DefaultLayout>
}
