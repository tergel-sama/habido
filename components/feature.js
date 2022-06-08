import { Box, chakra, Flex, SimpleGrid } from "@chakra-ui/react";

export default function App() {
  return (
    <Flex w="full" justifyContent="center" alignItems="center">
      <Box px={{ base: 4, md: 12, "2xl": "15rem" }} py={20} mx="auto">
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontFamily="SFProRounded"
              fontSize={{ base: "2xl", md: "55px" }}
              lineHeight="normal"
              textColor="#fa6c51"
              fontWeight={300}
              textAlign={{ base: "center", md: "left" }}
            >
              Чатбот той холбогдож ярилцах боломж
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              fontFamily="SFProRounded"
              fontWeight={300}
              lineHeight="1.39"
              fontSize={{ md: "18px" }}
            >
              Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like
              the smart search option allow you to quickly find any data you’re looking for.
            </chakra.p>
          </Box>
          <Box w="full" h="full" py={48} />
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "none", md: 2 }}>
            <chakra.h2
              mb={4}
              fontFamily="SFProRounded"
              fontSize={{ base: "2xl", md: "55px" }}
              lineHeight="normal"
              textColor="#fa6c51"
              fontWeight={300}
              textAlign={{ base: "center", md: "left" }}
            >
              Мэдрэмжээ тэмдэглэх боломж
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              fontFamily="SFProRounded"
              fontWeight={300}
              lineHeight="1.39"
              fontSize={{ md: "18px" }}
            >
              Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like
              the smart search option allow you to quickly find any data you’re looking for.
            </chakra.p>
          </Box>
          <Box w="full" h="full" py={48} />
        </SimpleGrid>
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontFamily="SFProRounded"
              fontSize={{ base: "2xl", md: "55px" }}
              lineHeight="normal"
              textColor="#fa6c51"
              fontWeight={300}
              textAlign={{ base: "center", md: "left" }}
            >
              Дадал төлөвлөх, хэвшүүлэх
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              fontFamily="SFProRounded"
              fontWeight={300}
              lineHeight="1.39"
              fontSize={{ md: "18px" }}
            >
              Handle your subscriptions and transactions efficiently with the clear overview in Dashboard. Features like
              the smart search option allow you to quickly find any data you’re looking for.
            </chakra.p>
          </Box>
          <Box w="full" h="full" py={48} />
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
