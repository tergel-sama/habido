import { Box, Heading, Text, Stack, Image, Flex, Spacer } from "@chakra-ui/react";
import { AiOutlineClockCircle, AiOutlineEye } from "react-icons/ai";

export default function blogPostWithImage() {
  return (
    <Box
      position="relative"
      maxW="450px"
      h="514px"
      w="full"
      boxShadow="0 8px 24px 0 rgba(0, 0, 0, 0.15);"
      borderRadius="15px"
      p={5}
      overflow="hidden"
      display="flex"
      flexDir="column"
    >
      <Box position="relative">
        <Image
          overflow="hidden"
          borderRadius="15px"
          h="200px"
          w="full"
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          objectFit="cover"
        />
        <Box
          py="5px"
          px="10px"
          boxShadow="0 3px 6px 0 rgba(0, 0, 0, 0.16);"
          textAlign="center"
          bg="#ffffff"
          color="#424852"
          fontWeight={500}
          fontSize="15px"
          fontFamily="SFProRounded"
          borderRadius="10px"
          left={3}
          bottom={3}
          position="absolute"
        >
          Сэтгэл зүй
        </Box>
      </Box>
      <Stack mt={6}>
        <Flex>
          <Box mr={2}>
            <AiOutlineClockCircle color="#707070" />
          </Box>
          <Text fontSize="15px" textColor="#707070">
            2 минут уншина
          </Text>
        </Flex>
        <Heading
          className="twoRows"
          color="#424852"
          lineHeight="1.39"
          fontWeight="bold"
          fontSize="18px"
          fontFamily="SFProRounded"
        >
          Сэтгэл хөдлөлийн тухай мэдэх хэрэгтэй зүйлс
        </Heading>
        <Box py={3}>
          <Text
            className="threeRows"
            color="#707070"
            lineHeight="1.67"
            fontWeight="normal"
            fontSize="15px"
            fontFamily="SFProRounded"
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </Text>
        </Box>
      </Stack>
      <Box mt="auto">
        <Flex fontFamily="SFProRounded" color="#707070" lineHeight="1.67" fontWeight="normal" fontSize="15px">
          <Box p="3px" mr={1}>
            <AiOutlineEye size={19} color="#707070" />
          </Box>
          <Text fontSize="15px" textColor="#707070">
            200
          </Text>
          <Spacer />
          <Text>Нийтэлсэн: 2022.03.01 17:00</Text>
        </Flex>
      </Box>
    </Box>
  );
}
