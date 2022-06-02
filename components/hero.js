/* eslint-disable react/button-has-type */
import { chakra, Box, Flex, SimpleGrid, Image } from "@chakra-ui/react";

export default function App() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={0}
      bg="f4f6f8"
      h="100vh"
      _after={{
        bg: "#f4f6f8",
        opacity: 0.25,
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}
    >
      <Flex direction="column" alignItems="start" justifyContent="center" pl={{ base: 4, lg: "15rem" }} py={24}>
        <chakra.h1
          fontFamily="SFProRounded"
          mb={6}
          fontWeight={300}
          fontSize={{ base: "4xl", md: "4xl", lg: "55px" }}
          lineHeight="normal"
        >
          HabiDo аппликейшнаа <br /> татаад амьдралын <br /> чанараа дээшлүүл
        </chakra.h1>
      </Flex>
      <Box>
        <Image
          src="https://images.unsplash.com/photo-1531548731165-c6ae86ff6491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          bg="gray.100"
          loading="lazy"
        />
      </Box>
    </SimpleGrid>
  );
}
