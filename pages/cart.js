import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Image,
	Input,
	Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getItem } from "../redux/localStorage";

export default function Cart() {
	const [cart, setCart] = useState([]);
	console.log(cart);
	const handleData = async () => {
		const userID = getItem("userid");
		let res = await fetch(
			`https://main--dancing-selkie-b495f8.netlify.app/api/cart/${userID}`
		);
		let data = await res.json();
		setCart(data);
	};

	useEffect(() => {
		handleData();
	}, []);

	return (
		<>
			<Box
				borderRadius={"15px"}
				mt={"10px"}
				position="absolute"
				height="600px"
				display={"inline-block"}
				ml={"10px"}
				width={"55%"}
			>
				<Box display={"flex"} w={""} justifyContent="space-between">
					<Heading
						ml="100px"
						mt="10px"
						fontFamily={"Ubuntu, sans-serif"}
						fontSize="26px"
						color={"blackAlpha.500"}
					>
						{cart.cart
							? `Your Cart (${cart.cart.length})`
							: `Your Cart (${0}))`}
					</Heading>
					<Text
						mt="15px"
						mr="118px"
						fontFamily={"Ubuntu, sans-serif"}
						color={"blackAlpha.700"}
						fontSize="20px"
					>
						Price
					</Text>
				</Box>
				<Flex
					flexDirection={"column"}
					height={"500px"}
					mt={{ base: "-15px", lg: "auto" }}
					overflow="scroll"
				>
					{cart.cart
						? cart.cart.map((el, i) => (
								<>
									<Flex justifyContent={"space-between"}>
										<Box
											display={"flex"}
											flexDirection="column"
											key={i}
											justify="right"
											alignItems="right"
											height="auto"
											w={{ base: "auto", lg: "auto" }}
											mt={{ base: "20px", lg: "20px" }}
											ml={{ base: "-480px", lg: "40px" }}
											gap="2"
										>
											<Flex gap={5}>
												<Image
													className="imageFromPayment"
													h="180px"
													maxW={"180px"}
													src={el.courseID.image}
												/>
											</Flex>
											<Box>
												<Text
													h="auto"
													fontFamily={"Ubuntu, sans-serif"}
													color="teal"
													w="350px"
													fontSize={"18px"}
												>
													{el.courseID.course_name}
												</Text>
											</Box>
										</Box>
										<Text
											mt={{ lg: "130px" }}
											fontSize="24px"
											fontFamily={"Ubuntu, sans-serif;"}
											mr={{ lg: "100px" }}
											color="teal"
										>
											₹ {el.courseID.selling_price}
										</Text>
									</Flex>
									{/* </Box> */}
								</>
						  ))
						: ""}
				</Flex>
			</Box>
		</>
	);
}

// export async function getServerSideProps(context) {
// 	const userID = getItem("userid");
// 	let res = await fetch(`https://main--dancing-selkie-b495f8.netlify.app/api/cart/${userID}`);
// 	let data = await res.json();
// 	let courses = {data,userID};

// 	return {
// 		props: courses,
// 	};
// }
