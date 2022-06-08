import { Flex, Text, Spacer, Button, Box } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";

export default function Highlight() {
  return (
    <Flex alignItems="center" justifyContent="space-between" borderWidth={0} overflowX="auto">
      <Text mr={6} fontFamily="SFProRounded" fontSize="44px" fontWeight={900} color="#424852">
        Онцлох
      </Text>
      <Box
        textAlign="center"
        bg="#edf2f7"
        fontFamily="SFProRounded"
        fontSize="18px"
        color="#424852"
        w="53px"
        h="26px"
        borderRadius="20px"
      >
        7
      </Box>
      <Spacer />
      <Button
        fontFamily="SFProRounded"
        fontSize="18px"
        color="#424852"
        w="118px"
        h="53px"
        borderRadius="20px"
        rightIcon={<FiChevronRight />}
      >
        Бүгд
      </Button>
    </Flex>
  );
}
