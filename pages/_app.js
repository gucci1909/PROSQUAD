import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Store } from "../redux/Store";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Provider store={Store}>
				<Navbar />
				<Component {...pageProps} />
				{/* <Footer /> */}
			</Provider>
		</ChakraProvider>
	);
}
