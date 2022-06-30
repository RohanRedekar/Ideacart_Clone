import React from "react";
import { Box, Text, ListItem, UnorderedList, } from "@chakra-ui/react";
import { Navbar } from "../Components/HomePage/navbar";
import { Link } from "react-router-dom";
export const About = () => {
  return (
    <Box>
      <Navbar />
      <Box
        width={["90%","85%","80%","75%"]}
        fontFamily={"Georgia, serif"}
        fontSize='1.1rem'
        margin='auto'
      >
        <Text margin='1rem 0'>
          Ideakart is a site that gives u an idea about the book you want to
          buy. We offer a huge collection of books in diverse categories.
        </Text>
        <Text margin='1rem 0'>
          We have a user friendly search engine and a quick delivery system.
          With this we even provide best discounts on our books. You can write
          to us for any idea or any help you need.
        </Text>
        <Text margin='1rem 0'>
          Ideakart is a site that gives u an idea and a platform for the book
          you want. We offer a huge collection of books in diverse categories.
        </Text>
        <Text margin='1rem 0'>
          We have a user friendly search engine and a quick delivery system.
          With this we even provide best discounts on our books. You can write
          to us for any idea or any help you need.
        </Text>
        <Text marginTop='3rem'>Get To Know Us</Text>
        <UnorderedList fontSize={"0.8rem"}>
          <ListItem>
            <Link to={"/about"}>
              <Text color='#598fb8'>About</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"/contact"}>
              <Text color='#598fb8'>Contact</Text>
            </Link>
          </ListItem>
          <ListItem>
            <Text color='#598fb8'>Search</Text>
          </ListItem>
          <ListItem>
            <Text color='#598fb8'>Privacy Policy</Text>
          </ListItem>
          <ListItem>
            <Text color='#598fb8'>Refund Policy</Text>
          </ListItem>
          <ListItem>
            <Text color='#598fb8'>Earn Money Online</Text>
          </ListItem>
          <ListItem>
            <Text color='#598fb8'>QuickBuyer</Text>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};
