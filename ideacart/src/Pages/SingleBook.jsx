import React, { useEffect } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../Components/HomePage/navbar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleBook } from "../Redux/SingleBook/action";
import { LinkBox } from "../Components/SingleBook/LinkBox";
import { TableComp } from "../Components/SingleBook/TableContainer";

export const SingleBook = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleBook(id));
  }, [dispatch, id]);

  const book = useSelector((store) => store.singleBook.book.data);

  return (
    <Box>
      <Navbar />
      <Flex width='72%' margin={"1rem auto"} gap='1rem'>
        <Box w='35%'>
          <Box width='90%'>
            <Box
              borderRadius='3px'
              boxShadow={
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.18) 0px 0px 0px 1px"
              }
            >
              <Image
                padding='1rem'
                width='100%'
                src={book?.volumeInfo.imageLinks.thumbnail}
                alt='Image'
              ></Image>
            </Box>
            <Text margin='1rem 0'>
              Buy it at{" "}
              <span>
                <b>best price</b>
              </span>{" "}
              from here
            </Text>
            <Flex
              margin='1rem 0'
              alignItems='center'
              justifyContent='space-between'
            >
              <Box>
                <Text fontSize={"2xl"}>
                  {book?.saleInfo.saleability === "FOR_SALE"
                    ? "Rs. " + book?.saleInfo.listPrice?.amount
                    : book?.saleInfo.saleability}
                </Text>
              </Box>
              <Box>
                <Button backgroundColor='rgb(240,173,78)' color='white'>
                  Buy Now
                </Button>
              </Box>
            </Flex>
            <LinkBox>
              <a href={book?.saleInfo.buyLink}>
                Get Instant Cashback when you pay using Amazon Pay... Click Here
              </a>
            </LinkBox>
          </Box>
        </Box>
        <Box w='64%'>
          <Text fontSize={"3xl"}>{book?.volumeInfo.title}</Text>
          <Box
            margin='1rem 0'
            borderRadius='3px'
            boxShadow={
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.18) 0px 0px 0px 1px"
            }
            backgroundColor='rgb(245,245,245)'
          >
            <Box width='100%' padding='0.8rem'>
              <Text fontSize={"3xl"}>
                {book?.volumeInfo.authors?.join(", ")}'s{" "}
                {book?.volumeInfo.title}
              </Text>
              <Text>{book?.volumeInfo.description}</Text>
            </Box>
          </Box>
          <Box>
            <TableComp
              printType={book?.volumeInfo.printType}
              pageCount={book?.volumeInfo.pageCount}
              language={book?.volumeInfo.language}
              publisher={book?.volumeInfo.publisher}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
