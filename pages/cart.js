import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Image,
	Input,
	Text,
} from "@chakra-ui/react";
import { getItem } from "../redux/localStorage";

export default function Cart(cart) {
	console.log(cart);

	return (
		<>
			<Box
				display={"flex"}
				padding={3}
				gap={10}
				justifyContent={"space-around"}
			>
				<Box display={"flex"} width={"50%"} alignItems={"center"}>
					<Box width={"80%"}>
						{cart !==
						{
							error: "Please correct enter id in params",
						}
							? cart.cart?.map((ele) => {
									return (
										<Box border={"1px solid black"} width={"300px"} padding={2}>
											<Image src={ele.courseID.image} alt="Linux" />
											<Text>{ele.courseID.course_name}</Text>
											<Button margin={"auto auto"}>Delete</Button>
										</Box>
									);
							  })
							: ""}
					</Box>
				</Box>
				<Box width={"30%"}>
					<Text fontSize={30}>Total:</Text>
					<FormControl isRequired>
						<FormLabel>Card Number</FormLabel>
						<Input type="number" />
						<FormLabel>CVV</FormLabel>
						<Input type="number" />
						<FormLabel>Expire Date</FormLabel>
						<Input size="md" type="date" />
					</FormControl>
					<Button mt={4} background="#45F3FF" type="submit">
						Submit
					</Button>
					<Button mt={4} background="#45F3FF" type="submit">
						Pay with RazorPay
					</Button>
				</Box>
			</Box>
		</>
	);
}

export async function getServerSideProps(context) {
	const userID = getItem("userid");
	let res = await fetch(`http://localhost:3000/api/cart/${userID}`);
	let data = await res.json();
	let courses = data;
	return {
		props: courses,
	};
}
