import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { IoMdSend } from "react-icons/io";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import axios from "axios";
const socket = io();

function course({ data, data_chatting }) {
  const [state, setState] = useState("");
  const [message, setMessage] = useState([]);
  const space = useRef(null);

  const handleSubmit = (state, data) => {
    if (state !== "") {
      const room1 = Number(data.qn_room);
      socket.emit("join_room", room1);
      socket.emit("send_message", { state, room1 });
      setState("");
    }
  };
  const handleKeyPress = (event, state, data) => {
    if (event.key === "Enter") {
      if (state !== "") {
        const room1 = Number(data.qn_room);
        socket.emit("join_room", room1);
        socket.emit("send_message", { state, room1 });
        setState("");
      }
    }
  };
  const handleChange = (event) => {
    setState(event.target.value);
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      const msg = data.state;
      console.log(data);
      setMessage((message) => [...message, { msg }]);
    });
    space.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  console.log(message);

  return (
    <Box>
      <Box width="55%" height={"610px"} position="absolute">
        <Heading
          color={"#38B2AC"}
          textAlign="center"
          mt={{ lg: "5px" }}
          zIndex={2}
          mb="40px"
          fontSize={{ base: "20px", md: "30px", lg: "27px" }}
        >
          {data.course_name}
        </Heading>
        <Flex alignContent="center" justifyContent={"center"}>
          <Flex flexDirection={"column"}>
            <Image
              mt="20px"
              ml={"40px"}
              h={"250px"}
              borderRadius="25px"
              maxW={"250px"}
              src={data.image}
            />
            <Box display={"flex"} ml="10px" flexDirection="column">
              <Text
                color="tomato"
                p={1}
                ml="20px"
                fontSize="24px"
                textAlign="center"
              >
                CATEGORY
              </Text>
              <Text
                ml={"70px"}
                mt={"10px"}
                fontSize={"24px"}
                p={1}
                w="160px"
                textAlign="center"
                borderRadius="5px"
                as="u"
                color="white"
                bg="tomato"
              >
                {data.category}
              </Text>

              <Box h="50px" w="50px" mt="30px">
                <Button ml={"90px"} colorScheme={"red"}>
                  Add To Cart
                </Button>
              </Box>
            </Box>
          </Flex>

          <Box display={"flex"} flexDirection="column" ml="60px">
            <Text
              mt={"0px"}
              textAlign={"center"}
              fontSize={"24px"}
              color="tomato"
            >
              DESCRIPTION
            </Text>
            <Text
              ml={"20px"}
              fontSize="17px"
              as="cite"
              w="auto"
              h="auto"
              color="white"
              bg="tomato"
              borderRadius={"20px"}
              p="1"
            >
              {data.description}
            </Text>
            <Flex flexDirection={"row"} mt="20px" gap="20px">
              <Text
                ml={"130px"}
                color="tomato"
                fontSize="24px"
                textAlign="center"
              >
                Buying Price -
              </Text>
              <Text
                fontSize={"24px"}
                w="100px"
                textAlign="center"
                borderRadius="5px"
                as="u"
                color="white"
                bg="tomato"
              >
                ₹ {data.selling_price}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box
        borderRadius={"15px"}
        border={"0.5px solid blue"}
        mt={"10px"}
        w="full"
        height="610px"
        display={"inline-block"}
        ml={"905px"}
        width={"40%"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        // backgroundSize="cover"
        bgImage={`url("https://cdn-icons-png.flaticon.com/512/5726/5726532.png")`}
      
        // bgImage={`url("https://www.mentalup.co/img/blog/the-importance-of-education.jpg")`}
        // bgImage={`url("https://c8.alamy.com/comp/GE80XC/the-3d-guy-and-a-model-of-question-mark-GE80XC.jpg")`}
      >
        <Heading
          color={"#38B2AC"}
          textAlign="center"
          mt={{ lg: "5px" }}
          zIndex={2}
          fontSize={{ base: "20px", md: "30px", lg: "27px" }}
        >
          Q&A SECTION
        </Heading>

        <Flex
          flexDirection={"column"}
          height={"480px"}
          mt={{ base: "-15px", lg: "auto" }}
          overflow="scroll"
        >
          {data_chatting &&
            data_chatting.map((el, i) => (
              <Flex
                justify="right"
                alignItems="right"
                height="auto"
                w={{ base: "auto", lg: "auto" }}
                mt={{ base: "20px", lg: "20px" }}
                ml={{ base: "-480px", lg: "150px" }}
                gap="2"
                key={i}
              >
                <Box
                  bg="#38B2AC"
                  w={{ base: "200px", lg: "auto" }}
                  p={2}
                  h={{ base: "auto", lg: "auto" }}
                  borderRadius={"20px"}
                  mt={"10px"}
                  color="white"
                >
                  <Text fontSize="24px">{el.message}</Text>
                </Box>
              </Flex>
            ))}
          {message &&
            message.map((el, i) => (
              <Flex
                justify="right"
                alignItems="right"
                height="auto"
                w={{ base: "auto", lg: "auto" }}
                mt={{ base: "20px", lg: "20px" }}
                ml={{ base: "-480px", lg: "150px" }}
                gap="2"
                key={i}
              >
                <Box
                  bg="#38B2AC"
                  w={{ base: "200px", lg: "auto" }}
                  p={2}
                  h={{ base: "auto", lg: "auto" }}
                  borderRadius={"20px"}
                  mt={"10px"}
                  color="white"
                >
                  <Text fontSize="24px">{el.msg}</Text>
                </Box>
              </Flex>
            ))}
          <div ref={space}></div>
        </Flex>
      </Box>

      <Flex
        justify={"center"}
        alignItems="center"
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        width={"100%"}
      >
        <Input
          mb="10px !important"
          w={{ base: "230px", lg: "450px" }}
          position="fixed"
          left={0}
          right={0}
          bottom={0}
          color="darkBlue"
          ml={{ base: "0px", lg: "940px" }}
          height="3rem"
          placeholder="Write Something..."
          _placeholder={{ color: "inherit" }}
          autoComplete="off"
          onKeyPress={(e) => handleKeyPress(e, state, data)}
          bgColor={"lightskyblue"}
          type="text"
          value={state}
          onChange={(e) => handleChange(e)}
        />
        <Button
          position="fixed"
          w={{ lg: "70px" }}
          ml={{ base: "230px", lg: "1400px" }}
          left={0}
          right={0}
          bottom={0}
          mb="13px"
          zIndex={2}
          colorScheme={"blue"}
          onClick={() => handleSubmit(state, data)}
        >
          <IoMdSend />
        </Button>
      </Flex>
    </Box>
  );
}

export default course;

export async function getServerSideProps(context) {
  const { course } = context.query;

  let res = await fetch(`http://localhost:3000/api/courses/${course}`);
  let data_1 = await res.json();
  let data = data_1.one_course;
  let socket = await axios.get(`http://localhost:3000/api/socket`);

  let chatting = await axios.get(
    `http://localhost:3000/api/socket/${data.qn_room}`
  );
  let data_chatting = chatting.data.Comments;
  let all = { data, data_chatting };
  return {
    props: all,
  };
}
