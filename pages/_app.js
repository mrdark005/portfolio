import '../styles/globals.css'
import Aos from 'aos'
import "aos/dist/aos.css"
import "react-loading-skeleton/dist/skeleton.css";

import { useEffect } from "react"
export default function App({
  Component, 
  pageProps: { pageProps }
}) {
  useEffect(() => {
    Aos.init({duration:1000})
  },[])
  return (
      <Component {...pageProps} />
  )
}