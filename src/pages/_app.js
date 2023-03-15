import '@/styles/globals.css'
import Brand from '../../components/Brand'
import HeroSection from '../../components/HeroSection'
import Navbar from '../../components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Brand/>
    </>
  )
}
