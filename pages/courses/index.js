import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Center,
	Divider,
	Heading,
	Image,
	Link,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const API = process.env.FETCH_URL;
const index = ({ All_Courses }) => {
	const router = useRouter();

	return (
		<Center p={5}>
			<SimpleGrid columns={[1, 3]} m="auto" spacingY={20} spacingX={20}>
				{All_Courses &&
					All_Courses?.map((ele) => {
						return (
							<Card maxW="sm" key={ele._id} background="#28292D" color="white">
								<CardBody>
									<Image
										src={ele.image}
										alt={ele.course_name}
										w="full"
										borderRadius="lg"
									/>
									<Stack mt="6" spacing="3">
										<Heading size="md">{ele.course_name} </Heading>
										<Text>{ele.description.substr(0, 120)}...</Text>
										<Text color="blue.600" fontSize="2xl">
											Rs.<Text as="del">{ele.cost_price} </Text>{" "}
											{ele.selling_price}{" "}
											<Text as="cite" fontSize={"lg"}>
												{ele.discount}
											</Text>
										</Text>
									</Stack>
								</CardBody>
								<Divider />
								<CardFooter>
									<ButtonGroup spacing="2">
										{/* <Button variant="solid" colorScheme="blue">
									Buy now
								</Button> */}
										<Link onClick={() => router.push(`/courses/${ele._id}`)}>
											<Button variant="ghost" colorScheme="blue">
												Read more
											</Button>
										</Link>
									</ButtonGroup>
								</CardFooter>
							</Card>
						);
					})}
			</SimpleGrid>
		</Center>
	);
};

export default index;

export async function getServerSideProps(context) {
	let res = await fetch(
		`https://main--dancing-selkie-b495f8.netlify.app/api/courses`
	);
	let data = await res.json();
	let courses = data;

	return {
		props: courses,
	};
}
