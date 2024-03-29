import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  useDisclosure,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  MenuDivider,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authenticate, userLogoutSuccess } from "../../Redux/Login/action";
import { getBooks } from "../../Redux/TopReads/action";
import Cookies from "js-cookie";

export const Navbar = () => {
  const { loggedIn, loggedInUser } = useSelector((store) => store.login);
  const signedUp = useSelector((store) => store.signUp.signedUp);
  const dispatch = useDispatch();
  const { isOpen, onToggle } = useDisclosure();
  const [search, setSearch] = useState("");

  const searchBooks = () => {
    dispatch(getBooks(search));
  };

  useEffect(() => {
    let token = Cookies.get("accessToken");
    if (!token) return;
    else dispatch(authenticate(token));
  }, [dispatch]);

  return (
    <Box backgroundColor={"rgb(40,116,240)"} width='100%'>
      <Box width={{ lg: "85%", md: "95%" }} margin='auto'>
        <Flex justifyContent={"space-between"} alignItems='center'>
          <Flex>
            <Box>
              <Link to={"/"}>
                <Text
                  fontFamily={"Georgia, serif"}
                  color={"yellow"}
                  paddingRight={{ lg: "3rem", md: "2rem", sm: "1rem" }}
                  margin='0.8rem'
                  fontSize='1.2rem'
                  letterSpacing={"1px"}
                >
                  IDEACART
                </Text>
              </Link>
            </Box>
            <Box display={"flex"} alignItems='center'>
              <Box>
                <Input
                  display={["none", "none", "block", "block", "block"]}
                  backgroundColor='white'
                  placeholder='Search'
                  w={{ lg: "22rem", md: "15rem" }}
                  h='2.2rem'
                  borderTopRightRadius='0'
                  borderBottomRightRadius='0'
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Box>
              <Box>
                <Button
                  display={["none", "none", "block", "block", "block"]}
                  borderTopLeftRadius='0'
                  borderBottomLeftRadius='0'
                  padding='0.2rem 0.8rem'
                  h='2.2rem'
                  fontWeight={"200"}
                  textColor='#000000'
                  backgroundColor={"white"}
                  onClick={searchBooks}
                >
                  Search
                </Button>
              </Box>
            </Box>
          </Flex>
          <Flex
            display={["none", "none", "flex", "flex", "flex"]}
            alignItems={"center"}
            gap='1rem'
            color={"white"}
            fontSize='0.9rem'
          >
            <Box>
              <Link to={"/about"}>About</Link>
            </Box>
            <Box>
              <Link to={"/contact"}>Contact</Link>
            </Box>
            {!loggedIn && (
              <Box>
                <Link to={"/signin"}>Sign In</Link>
              </Box>
            )}
            {(!signedUp && !loggedIn) && (
              <Box>
                <Link to={"/signup"}>Sign Up</Link>
              </Box>
            )}
          </Flex>

          <IconButton
            display={{ sm: "block", md: "none" }}
            color={"white"}
            onClick={onToggle}
            _hover={{ bg: "rgb(40,116,240)" }}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
          {loggedInUser.length > 0 && <Profile />}
        </Flex>
      </Box>
      {isOpen && (
        <Box>
          <Flex justifyContent='center'>
            <Input
              width={"70%"}
              backgroundColor='white'
              placeholder='Search'
              h='2.2rem'
              borderTopRightRadius='0'
              borderBottomRightRadius='0'
            />
            <Button
              borderTopLeftRadius='0'
              borderBottomLeftRadius='0'
              padding='0.2rem 0.8rem'
              h='2.2rem'
              fontWeight={"200"}
              textColor='#000000'
              backgroundColor={"white"}
            >
              Search
            </Button>
          </Flex>
          <Box
            color={"white"}
            textAlign='center'
            width='fit-content'
            margin={"1rem auto"}
            paddingBottom='1rem'
          >
            <Box>
              <Link to={"/about"}>About</Link>
            </Box>
            <Box>
              <Link to={"/contact"}>Contact</Link>
            </Box>
            <Box>
              <Link to={"/signin"}>Sign In</Link>
            </Box>
            <Box>
              <Link to={"/signup"}>Sign Up</Link>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export const Profile = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((store) => store.login.loggedInUser);
  return (
    <Flex>
      <Menu>
        <MenuButton
          as={Button}
          rounded='full'
          variant='link'
          cursor='pointer'
          minW={0}
        >
          <Avatar
            name='Dan Abrahmov'
            src='https://avatars.dicebear.com/api/male/username.svg'
          />
        </MenuButton>
        <MenuList zIndex={"1000"}>
          <br />
          <Center>
            <Avatar
              size={"2xl"}
              src={"https://avatars.dicebear.com/api/male/username.svg"}
            />
          </Center>
          <br />
          <Center>
            <p>{loggedInUser}</p>
          </Center>
          <br />
          <MenuDivider />
          <MenuItem onClick={() => dispatch(userLogoutSuccess())}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
