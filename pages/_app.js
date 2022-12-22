import '../styles/globals.css'
import {ChakraProvider} from "@chakra-ui/react"
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar/>
      <Component {...pageProps} />
      {/* <Footer /> */}
    </ChakraProvider>
  )
}
