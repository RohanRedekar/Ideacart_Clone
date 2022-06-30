import React, { useEffect } from "react";
import { Box, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getBooks } from "../../Redux/TopReads/action";
import { Link } from "react-router-dom";

export const Card = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books.books);
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <Box w={{ lg: "75%", md: "90%", sm: "90%" }} margin='auto'>
      <Text margin='1.3rem 0' fontFamily={"Georgia, serif"} fontSize={"2xl"}>
        Top Reads
      </Text>
      <Grid
        templateColumns={{
          lg: "repeat(4, 1fr)",
          md: "repeat(3, 1fr)",
          sm: "repeat(2,1fr)",
        }}
        gap={8}
      >
        {books?.map((b) => (
          <GridItem key={b.id} borderRadius='3px' w='100%'>
            <Box
              boxShadow={
                "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
              }
            >
              <Link to={`/book/${b.id}`}>
                <Image
                  padding={"0.8rem"}
                  width={"100%"}
                  src={b.volumeInfo.imageLinks?.thumbnail}
                  alt='Image'
                ></Image>
              </Link>
              <Text padding={"0.8rem"}>{b.volumeInfo.title}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
