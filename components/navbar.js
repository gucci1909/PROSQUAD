import styles from "../styles/Navbar.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react'
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Link, useDisclosure } from '@chakra-ui/react';
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Navbar() {

	const { isOpen, onOpen, onClose } = useDisclosure()
	const [placement, setPlacement] = useState('bottom')
	const router = useRouter();

	useEffect(() => {
		Aos.init({ duration: 2000 })
	})

	const [text, setText] = useState({
		email: "",
		password: ""
	});

	const handleForm = (e) => {
		setText(e.target.value);
		console.log(e.target.value);
	}

	const onClick = () => {
		setText("")
	}

	return (
		<>

			<div className={styles.container}>
				<div className={styles.box} >
					<form autoComplete="off" className={styles.form}>
						<Link href="/" className={styles.sign}>Home</Link>
						<Link href="courses" className={styles.sign}>Courses</Link>
						<Link onClick={() => router.push("/signin")} className={styles.sign}>Signin</Link>
						<Link onClick={() => router.push("/signup")} className={styles.sign}>Signup</Link>
						<Link href="dashboard" className={styles.sign}>Dashboard</Link>
						<Link href="cart" className={styles.sign}>Cart</Link>

{/* drawer */}
<FaBars onClick={onOpen} className={styles.bar}/>
<Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
   
          <DrawerBody className={styles.draw}>
           
			<Link href="/"><p>Home</p></Link>
						<Link href="courses"><p>Courses</p></Link>
						<Link onClick={() => router.push("/signin")}><p>Signin</p></Link>
						<Link onClick={() => router.push("/signup")}><p>Signup</p></Link>
						<Link href="dashboard"><p>Dashboard</p></Link>
						<Link href="cart"><p>Cart</p></Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

					</form>

				</div>
			</div>
		</>
	);

};