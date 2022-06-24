/* eslint-disable react/button-has-type */
import { chakra, Box, Flex, SimpleGrid, Image, Button } from "@chakra-ui/react";
import { AiFillAndroid } from "react-icons/ai";
import { SiApple, SiHuawei } from "react-icons/si";
import HeroImage from "../assets/img/feature4.png";

export default function Feature4() {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={0}
      h="100vh"
      bg="#f4f6f8"
      overflow="hidden"
      _after={{
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
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="space-around"
        pl={{ base: 4, md: 12, "2xl": "15rem" }}
      >
        <Box />
        <Box>
          <chakra.h1
            fontFamily="SFProRounded"
            mb={6}
            fontWeight={300}
            fontSize={{ base: "4xl", md: "4xl", lg: "55px" }}
            lineHeight="normal"
          >
            <span className="text-[#fa6c51]"> Яг одоо аппликейшнаа </span> <br />
            <span className="text-[#fa6c51]">татаарай</span>
          </chakra.h1>
          <Flex justifyContent="flex-start" alignItems="start" flexDirection={{ base: "column", md: "row" }}>
            <Button borderRadius={13} m={1}>
              <Box color="gray.400" margin={1}>
                <SiApple size={22} />
              </Box>{" "}
              App Store
            </Button>
            <Button borderRadius={13} m={1}>
              <Box color="green.400" margin={1}>
                <AiFillAndroid size={25} />
              </Box>{" "}
              Google Play
            </Button>
            <Button borderRadius={13} m={1}>
              <Box color="red.600" margin={1}>
                <SiHuawei size={25} />
              </Box>{" "}
              AppGallery
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Box>
        <Image src={HeroImage?.src} alt="holding phone" fit="scale-down" w="full" h={{ md: "full" }} loading="lazy" />
      </Box>
    </SimpleGrid>
  );
}
