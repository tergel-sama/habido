import { Flex, Box, InputGroup, InputLeftElement, Input, Text, Spacer, Select, IconButton } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";

export default function PageHeader() {
  return (
    <Flex alignItems="center" justifyContent="space-between" borderWidth={0} overflowX="auto">
      <Text mr={12} fontFamily="SFProRounded" fontSize="55px" fontWeight={900} color="#424852">
        Зөвлөмж
      </Text>
      <InputGroup w="454px" display={{ base: "none", lg: "block" }} ml="auto">
        <InputLeftElement mx={2} style={{ height: "100%" }} pointerEvents="none">
          <AiOutlineSearch size={30} />
        </InputLeftElement>
        <Input
          fontSize="18px"
          className="input-lg"
          border="solid 3px #f4f6f8"
          borderRadius="15px"
          h="53px"
          placeholder="Хайлт..."
        />
      </InputGroup>
      <Spacer />
      <Select
        fontFamily="SFProRounded"
        fontSize="18px"
        border="solid 3px #f4f6f8"
        borderRadius="20px"
        w="185px"
        h="53px"
        placeholder="Ангилах"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Box display={{ base: "none", xl: "block" }}>
        <IconButton ml="6" h="53px" w="53px" borderRadius={30} icon={<FiFilter size={20} />} />
      </Box>
    </Flex>
  );
}
