import styles from "../styles/Signup.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";

import {
	Link,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
} from "@chakra-ui/react";
import Form from "../components/Form";

export default function Signin() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	const initState = {
		fullname: "",
		email: "",
		password: "",
		role: "student",
	};
	const [form, setForm] = useState(initState);
	const handleInput = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		
	};

	return (
		<div className={styles.container}>
			<div className={styles.box} data-aos="flip-left">
				<form
					autoComplete="off"
					className={styles.form}
					onSubmit={handleSubmit}
				>
					<h2 className={styles.sign}>Sign Up</h2>

					<Tabs isFitted variant="enclosed" className={styles.tab}>
						<TabList>
							<Tab
								onClick={() => {
									setForm({ ...form, role: "student" });
								}}
							>
								Student
							</Tab>
							<Tab
								onClick={() => {
									setForm({ ...form, role: "teacher" });
								}}
							>
								Teacher
							</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<Form {...form} handleInput={handleInput} />
							</TabPanel>
							<TabPanel>
								<Form {...form} handleInput={handleInput} />
							</TabPanel>
						</TabPanels>
					</Tabs>
					<button className={styles.submit} type="submit">
						Signup
					</button>

					<div className={styles.links}>
						<Link to="#">Already Have Account ?</Link>
						<Link href="/signin">Signin</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
