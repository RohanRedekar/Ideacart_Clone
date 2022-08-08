import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Spinner,
} from "@chakra-ui/react";
import { Navbar } from "../Components/HomePage/navbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Signup } from "../Redux/SignUp/action";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  return (
    <Box>
      <Navbar />
      <SignUpCard />
    </Box>
  );
};

export default function SignUpCard() {
  const loading = useSelector((store) => store.signUp.loading);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    phone: null,
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let { name, phone, email, password } = formData;
    if (name === "" || password === "" || email === "" || phone === null) {
      alert("please fill all fields");
    } else {
      dispatch(Signup(formData)).then((res) =>
        res.type === "USER_SIGNUP_SUCCESS"
          ? navigate("/signin")
          : alert("Invalid fields, please enter correct data")
      );
    }
  };

  return (
    <Flex
      minH={"70vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        {loading && <Spinner margin={"auto"} />}
        <Stack align={"center"}>
          <Text fontSize={"lg"} color={"gray.600"}>
            Sign Up
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <FormControl id='name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  autoComplete='name'
                  onChange={handleChange}
                  width={"20rem"}
                  type='text'
                />
              </FormControl>
              <FormControl id='phone' isRequired>
                <FormLabel>Mobile Number</FormLabel>
                <Input onChange={handleChange} width={"20rem"} type='number' />
              </FormControl>
              <FormControl id='email' isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  autoComplete='username'
                  onChange={handleChange}
                  width={"20rem"}
                  type='email'
                />
              </FormControl>
              <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  onChange={handleChange}
                  width={"20rem"}
                  type='password'
                  autoComplete='current-password'
                />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText='Submitting'
                  size='lg'
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type='submit'
                >
                  Sign Up
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
