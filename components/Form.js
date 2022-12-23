import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import styles from "../styles/Signup.module.css";

const Form = ({ handleInput, name, email, password }) => {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	return (
		<Flex gap="2" flexDirection={"column"}>
			<div className={styles.inputBox}>
				<input
					type="text"
					name="name"
					value={name}
					onChange={handleInput}
					required="required"
				/>
				<span>Full Name</span>
				<i />
			</div>
			<div className={styles.inputBox}>
				<input
					type="email"
					name="email"
					value={email}
					onChange={handleInput}
					required="required"
				/>
				<span>Email</span>
				<i />
			</div>
			<div className={styles.inputBox}>
				<input
					type="password"
					name="password"
					value={password}
					onChange={handleInput}
					required="required"
				/>
				<span>Password</span>
				<i />
			</div>
		</Flex>
	);
};

export default Form;
