import { Box, chakra, Stack, Image } from "@chakra-ui/react";

import feature4Img from "../assets/img/feature4.png";

export default function Feature4() {
  return (
    <Box h="100vh" pl={{ base: 4, md: 12, "2xl": "15rem" }} mx="auto">
      <Stack display="flex" spacing={8} direction="row">
        <Box my="auto">
          <chakra.h2
            mb={4}
            fontFamily="SFProRounded"
            fontSize={{ base: "2xl", md: "55px" }}
            lineHeight="normal"
            w="550px"
            textColor="#fa6c51"
            fontWeight={300}
            textAlign={{ base: "center", md: "left" }}
          >
            Яг одоо аппликейшнээ татаарай
          </chakra.h2>
          <chakra.p
            mb={5}
            textAlign={{ base: "center", sm: "left" }}
            fontFamily="SFProRounded"
            fontWeight={300}
            lineHeight="1.39"
            fontSize={{ md: "18px" }}
          >
            asdasd
          </chakra.p>
        </Box>
        <Box mt="auto" w="full   " h="full">
          <Image w="full" src={feature4Img?.src} />
        </Box>
      </Stack>
    </Box>
  );
}
