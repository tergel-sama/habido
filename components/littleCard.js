import { Box, HStack } from "@chakra-ui/react";

export default function LittleCard() {
  return (
    <Box
      //   boxShadow="0 8px 24px 0 rgba(0, 0, 0, 0.05)"
      className="shadow-xl rounded-[15px]"
      w="160px"
      h="60px"
      p="6"
      bg="white"
    >
      <HStack>
        <Box>asd</Box>
        <Box>asdasd</Box>
      </HStack>
    </Box>
  );
}
