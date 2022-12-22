
import styles from "../styles/Navbar.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react'
import { Link } from '@chakra-ui/react';

export default function Navbar() {
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
						<Link href="signin" className={styles.sign}>Signin</Link>
						<Link href="signup" className={styles.sign}>Signup</Link>
						<Link href="dashboard" className={styles.sign}>Dashboard</Link>
					</form>

				</div>
			</div>
		</>
	);

};
