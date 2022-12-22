import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Image,
	SimpleGrid,
	Stack,
	Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";

const API = process.env.FETCH_URL;
const index = ({ All_Courses }) => {
	return (
		<SimpleGrid columns={[1, 3]} m="auto" spacing={10}>
			{All_Courses?.map((ele) => {
				return (
					<Card maxW="sm" key={ele._id}>
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
									Rs.<Text as="del">{ele.cost_price} </Text> {ele.selling_price}{" "}
									<Text as="cite" fontSize={"lg"}>
										{ele.discount}
									</Text>
								</Text>
							</Stack>
						</CardBody>
						<Divider />
						<CardFooter>
							<ButtonGroup spacing="2">
								<Button variant="solid" colorScheme="blue">
									Buy now
								</Button>
								<Button variant="ghost" colorScheme="blue">
									Add to cart
								</Button>
							</ButtonGroup>
						</CardFooter>
					</Card>
				);
			})}
		</SimpleGrid>
	);
};

export default index;

export async function getServerSideProps(context) {
	let res = await axios(`http://localhost:3000/api/courses`);
	let courses = res.data;
	return {
		props: courses,
	};
}
