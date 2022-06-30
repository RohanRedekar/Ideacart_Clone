import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Textarea,
} from "@chakra-ui/react";
import { Navbar } from "../Components/HomePage/navbar";

export const Contact = () => {
  return (
    <Box>
      <Navbar/>
      <ContactCard />
    </Box>
  );
};

export default function ContactCard() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Text fontSize={"lg"} color={"gray.600"}>
            You can contact our team by filling this form -
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id='firstName' isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='lastName'>
                  <FormLabel>Last Name</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id='email' isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl id='phone' isRequired>
              <FormLabel>Phone</FormLabel>
              <Input type='number' />
            </FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea
              placeholder='Message for me'
              size='sm'
            />
            <Stack spacing={10} pt={2}>
              <Button
                loadingText='Submitting'
                size='lg'
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Send Message
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
