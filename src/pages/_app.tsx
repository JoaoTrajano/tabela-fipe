import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DatasContextProvider } from '../contexts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <DatasContextProvider>
    <Component {...pageProps} />
    <ToastContainer />
  </DatasContextProvider>
  )
}
