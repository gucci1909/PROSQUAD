import styles from "../styles/Signin.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import {
	Button,
	Center,
	Divider,
	Flex,
	Link,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
} from "@chakra-ui/react";
import Form from "../components/Form";
export default function Signin() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	// const [text, setText] = useState({
	// 	email: "",
	// 	password: "",
	// });

	// const handleForm = (e) => {
	// 	setText(e.target.value);
	// 	console.log(e.target.value);
	// };

	const initState = {
		name: "",
		email: "",
		password: "",
		role: "student",
	};
	const [form, setForm] = useState(initState);
	const handleInput = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const onClick = () => {
		setText("");
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form);
	};

	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<div className={styles.box} data-aos="flip-left">
					<form
						onSubmit={handleSubmit}
						autoComplete="off"
						className={styles.form}
					>
						<h2 className={styles.sign}>Sign in</h2>

						<Tabs isFitted variant="enclosed" colorScheme={"pink"}>
							<TabList>
								<Tab
									onClick={() => {
										setForm({ ...form, role: "student" });
									}}
								>
									Customer
								</Tab>
								<Tab
									onClick={() => {
										setForm({ ...form, role: "teacher" });
									}}
								>
									Seller
								</Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
									<Form {...form} handleInput={handleInput} />
								</TabPanel>
								<TabPanel>
									<Form {...form} handleInput={handleInput} />
								</TabPanel>
								{/* <Flex flexDirection={"column"} gap="2" w="90%" m="auto">
									<Center>
										<Divider w="30%" />
										<Text p="2">or continue with</Text>
										<Divider w="30%" />
									</Center>
									<Button
										colorScheme="whiteAlpha"
										color={"black"}
										variant="outline"
										borderColor={"gray"}
										leftIcon={<FcGoogle size={"20"} />}
									>
										Google
									</Button>
									<Button
										colorScheme="whiteAlpha"
										color={"black"}
										variant="outline"
										leftIcon={<FaGithub size={"20"} />}
									>
										GitHub
									</Button>
								</Flex> */}
							</TabPanels>
						</Tabs>
						<button className={styles.submit}>Login</button>
					</form>
				</div>
			</div>
		</>
	);
}
