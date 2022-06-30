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
  Checkbox,
  Link,
  Spinner,
} from "@chakra-ui/react";
import { Navbar } from "../Components/HomePage/navbar";
import { useState } from "react";
import { Login } from "../Redux/Login/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  return (
    <Box>
      <Navbar />
      <SignInCard />
    </Box>
  );
};

export default function SignInCard() {
  const { loading } = useSelector((store) => store.login.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
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
    let { email, password } = formData;
    if (email === "" || password === "") {
      alert("please fill all fields");
    } else {
      dispatch(Login(formData)).then((res) =>
        res.type === "USER_LOGIN_SUCCESS"
          ? navigate("/")
          : alert("wrong email or password")
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
            Login
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
                  autoComplete='current-password'
                  onChange={handleChange}
                  width={"20rem"}
                  type='password'
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
                  Login
                </Button>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.500"}>Forgot password?</Link>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
