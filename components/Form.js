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
import styles from "../styles/signup.module.css"

const Form = ({ handleInput, fullname, email, password }) => {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);

	return (
		<Flex gap="2" flexDirection={"column"}>
			{/* <FormControl>
				<FormLabel>Full Name</FormLabel>
				<Input
					type="text"
					name="name"
					value={fullname}
					onChange={handleInput}
				/> */}
				<div className={styles.inputBox}>
              <input type="email" name="email" value={email} onChange={handleInput} required="required" />
              <span>Full Name</span>
              <i />
            </div>
			{/* </FormControl>
			<div className={styles.inputBox}>
				<FormLabel>Email address</FormLabel>
				<Input type="email" name="email" value={email} onChange={handleInput}/>
			</div>
			*/}
			
			<div className={styles.inputBox}>
              <input type="email" name="email" value={email} onChange={handleInput} required="required" />
              <span>Email</span>
              <i />
            </div>
			<div className={styles.inputBox}>
              <input type="email" name="email" value={email} onChange={handleInput} required="required" />
              <span>Password</span>
              <i />
            </div>

			
		</Flex>
	);
};

export default Form;
