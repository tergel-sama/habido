import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";

import LittleCard from "./littleCard";
import Feature3Image from "../assets/img/feature3Image.png";

export default function Feature3() {
  return (
    <Box py="58px" pl={{ base: 4, lg: "15rem" }}>
      <Text
        w="522px"
        lineHeight="normal"
        fontWeight={300}
        fontSize="55px"
        fontFamily="SFProRounded"
        textColor="#fa6c51"
      >
        <span className="text-[#424852]">7 бүлгийн </span> 35 дадлаас <span className="text-[#424852]"> сонгон </span>
        хэрэгжүүлэх боломж
      </Text>
      <SimpleGrid columns={{ base: 1, xl: 2 }}>
        <Box>
          <SimpleGrid columns={2}>
            <Box>
              <LittleCard />
            </Box>
            <Box>asd</Box>
          </SimpleGrid>
        </Box>
        <Box bg="gray">
          <Image src={Feature3Image?.src} />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
