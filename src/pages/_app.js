import '@/styles/globals.css'
import { useEffect } from 'react'
import Brand from '../../components/Brand'
import HeroSection from '../../components/HeroSection'
import Navbar from '../../components/Navbar'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Brand/>
    </>
  )
}
