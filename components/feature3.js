import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";

import Habit from "./habit";
import Feature3Image from "../assets/img/feature3Image.png";
import translateImg from "../assets/icons/translate.svg";
import book from "../assets/icons/book.svg";
import chair from "../assets/icons/chair.svg";

const habit1 = [
  {
    title: "Хувийн хөгжил",
    content: [
      {
        title: "Хэл сурах",
        img: translateImg?.src,
      },
      {
        title: "Ном унших",
        img: book?.src,
      },
      {
        title: "Бүтээлч зүйл хийх",
        img: translateImg?.src,
      },
      {
        title: "Эмх цэгцтэй байх",
        img: chair?.src,
      },
    ],
  },
];

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
              {habit1.map((item, index) => (
                <Habit key={index} data={item} />
              ))}
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
