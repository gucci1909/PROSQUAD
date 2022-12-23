import styles from "../styles/Signin.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { loginApi } from "../redux/Auth/auth.actions";

export default function Signin() {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	const initState = {
		email: "",
		password: "",
	};
	const dispatch = useDispatch();

	const [form, setForm] = useState(initState);
	const handleInput = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};
	const toast = useToast();
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form);
		dispatch(loginApi(form))
			.then(() => {
				toast({
					title: "Login Success! Welcome✨",
					description: "It's a start of something amazing.",
					position: "top",
					status: "success",
					duration: 5000,
					isClosable: true,
				});
				router.push("/dashboard");
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
		<>
			<div className={styles.container}>
				<div className={styles.box} data-aos="flip-left">
					<form
						autoComplete="off"
						className={styles.form}
						onSubmit={handleSubmit}
					>
						<h2 className={styles.sign}>Sign in</h2>
						<div className={styles.inputBox}>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleInput}
								required="required"
							/>
							<span>Email</span>
							<i />
						</div>
						<div className={styles.inputBox}>
							<input
								type="password"
								value={form.password}
								name="password"
								onChange={handleInput}
								required="required"
							/>
							<span>Password</span>
							<i />
						</div>
						<div className={styles.links}>
							<Link href="#">Forgot Password ?</Link>
							<Link onClick={() => router.push("/signup")}>Signup</Link>
						</div>
						<button className={styles.submit} type="submit">
							Login
						</button>
					</form>
				</div>
			</div>
		</>
	);
}
