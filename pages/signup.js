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
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { signUpApi } from "../redux/Auth/auth.actions";
import { useRouter } from "next/router";

export default function Signin() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	const initState = {
		name: "",
		email: "",
		password: "",
		role: "student",
	};
	const dispatch = useDispatch();
	const toast = useToast();
	const router = useRouter();

	const [form, setForm] = useState(initState);
	const handleInput = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(signUpApi(form))
			.then((res) => {
				toast({
					title: "New user added! Welcome✨",
					description: "It's a start of something amazing.",
					position: "top",
					status: "success",
					duration: 5000,
					isClosable: true,
				});
				router.push("/signin");
			})
			.catch((err) => {
				toast({
					title: "Internal server error!",
					description: "Please try after sometime.",
					position: "top",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			});
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
						<Link onClick={() => router.push("/signin")}>Signin</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
