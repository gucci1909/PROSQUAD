import { Box, Button, FormControl, FormLabel, Image, Input, Text } from "@chakra-ui/react";

export default function Cart() {
    return (
        <>
            <Box display={"flex"} padding={3} gap={10} justifyContent={"space-around"}>
                <Box display={"flex"} width={"50%"} alignItems={"center"}>
                    <Box width={"80%"}>
                        <Image src={"https://img-b.udemycdn.com/course/480x270/833442_b26e_5.jpg"} alt="Linux" />
                    </Box>
                    <Button margin={"auto auto"} >Delete</Button>
                </Box>
                <Box width={"30%"} >
                    <Text fontSize={30} >Total:</Text>
                    <FormControl isRequired>
                        <FormLabel>Card Number</FormLabel>
                        <Input type='number' />
                        <FormLabel>CVV</FormLabel>
                        <Input type='number' />
                        <FormLabel>Expire Date</FormLabel>
                        <Input
                            size="md"
                            type="date"
                        />

                    </FormControl>
                    <Button
                        mt={4}
                        background="#45F3FF"
                        type='submit'
                    >
                        Submit
                    </Button>
                    <Button
                        mt={4}
                        background="#45F3FF"
                        type='submit'
                    >
                        Pay with RazorPay
                    </Button>
                </Box>
            </Box>
        </>
    )
}

// export async function getServerSideProps(context) {
//     let res = await fetch(`http://localhost:3000/api/cart/63a40d67309d39f3733634b2`);
//     let data = await res.json();
//     let courses = data;
//     console.log(courses);
//     return {
//         props: courses,
//     };
// }