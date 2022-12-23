import React, { useState } from "react";
import {
	Tabs,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	TableContainer,
	Table,
	Thead,
	Tr,
	Th,
	Tbody,
	Td,
	Button,
	Flex,
	useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { getItem } from "../redux/localStorage";

const AdminDashboard = (users) => {
	const token = getItem("token");

	console.log(users);
	const toast = useToast();
	const handleRequest = (id, status) => {
		axios
			.patch(
				`http://localhost:3000/api/users/${id}`,
				{ status: status },
				{ headers: { authorization: token } }
			)
			.then((res) => {
				toast({
					title: "User Status Updates",
					position: "top",
					status: "success",
					duration: 5000,
					isClosable: true,
				});
			});
	};

	return (
		<Tabs mt="4" colorScheme="pink" isFitted>
			<TabList>
				<Tab>All Students</Tab>
				<Tab>Pending Teachers</Tab>
				<Tab>Approved Teachers</Tab>
				<Tab>Rejected Teachers</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>
					<TableContainer key="4">
						<Table variant="striped" colorScheme="pink">
							<Thead>
								<Tr>
									<Th>Name</Th>
									<Th>Email</Th>
									<Th>Joined on</Th>
								</Tr>
							</Thead>
							<Tbody>
								{users.map((ele) => {
									let date = new Date(ele.createdAt);
									if (ele.role === "student") {
										return (
											<Tr key={ele.email}>
												<Td>{ele.name}</Td>
												<Td>{ele.email}</Td>
												<Td>{date.toGMTString()}</Td>
											</Tr>
										);
									}
									return <Tr key={ele.email}></Tr>;
								})}
							</Tbody>
						</Table>
					</TableContainer>
				</TabPanel>

				<TabPanel>
					<TableContainer key="1">
						<Table variant="striped" colorScheme="pink">
							<Thead>
								<Tr>
									<Th>Name</Th>
									<Th>Email</Th>
									<Th>Take Action</Th>
								</Tr>
							</Thead>
							<Tbody>
								{data.map((ele) => {
									if (ele.role === "teacher" && ele.status === "pending") {
										return (
											<Tr key={ele.email}>
												<Td>{ele.name}</Td>
												<Td>{ele.email}</Td>
												<Td>
													<Flex alignItems={"center"} gap="2">
														<Button
															variant={"link"}
															onClick={() => handleRequest(ele._id, "approved")}
														>
															Approve
														</Button>
														{" / "}
														<Button
															variant={"link"}
															onClick={() => handleRequest(ele._id, "rejected")}
														>
															Reject
														</Button>
													</Flex>
												</Td>
											</Tr>
										);
									}
									return <Tr key={ele.email}></Tr>;
								})}
							</Tbody>
						</Table>
					</TableContainer>
				</TabPanel>
				{/* <TabPanel>
					<TableContainer key="2">
						<Table variant="striped" colorScheme="pink">
							<Thead>
								<Tr>
									<Th>Name</Th>
									<Th>Email</Th>

									<Th>Take Action</Th>
								</Tr>
							</Thead>
							<Tbody>
								{data.map((ele) => {
									if (ele.role === "teacher" && ele.status === "approved") {
										return (
											<Tr key={ele.email}>
												<Td>{ele.name}</Td>
												<Td>{ele.email}</Td>
												<Td>
													<Flex alignItems={"center"} gap="2">
														<Button
															isDisabled
															variant={"link"}
															onClick={() => handleRequest(ele._id, "approved")}
														>
															Approve
														</Button>
														{" / "}
														<Button
															variant={"link"}
															onClick={() => handleRequest(ele._id, "rejected")}
														>
															Reject
														</Button>
													</Flex>
												</Td>
											</Tr>
										);
									}
									return <Tr key={ele.email}></Tr>;
								})}
							</Tbody>
						</Table>
					</TableContainer>
				</TabPanel>
				<TabPanel>
					<TableContainer key="3">
						<Table variant="striped" colorScheme="pink">
							<Thead>
								<Tr>
									<Th>Name</Th>
									<Th>Email</Th>
									<Th>Take Action</Th>
								</Tr>
							</Thead>
							<Tbody>
								{data.map((ele) => {
									if (ele.role === "teacher" && ele.status === "rejected") {
										return (
											<Tr key={ele.email}>
												<Td>{ele.name}</Td>
												<Td>{ele.email}</Td>
												<Td>
													<Flex alignItems={"center"} gap="2">
														<Button
															variant={"link"}
															onClick={() => handleRequest(ele._id, "approved")}
														>
															Approve
														</Button>
														{" / "}
														<Button
															isDisabled
															variant={"link"}
															onClick={() => handleRequest(ele._id, "rejected")}
														>
															Reject
														</Button>
													</Flex>
												</Td>
											</Tr>
										);
									}
									return <Tr key={ele.email}></Tr>;
								})}
							</Tbody>
						</Table>
					</TableContainer>
				</TabPanel> */}
			</TabPanels>
		</Tabs>
	);
};

export default AdminDashboard;

export async function getServerSideProps(context) {
	let res = await axios(`http://localhost:3000/api/users`, {
		headers: {
			authorization: token,
		},
	});
	let users = res.data;

	return {
		props: {
			users: users,
		},
	};
}
