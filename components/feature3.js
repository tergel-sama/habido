import { Box, SimpleGrid, Text, Image } from "@chakra-ui/react";

import Habit from "./habit";
import Feature3Image from "../assets/img/feature3Image.png";
import translateImg from "../assets/icons/translate.svg";
import book from "../assets/icons/book.svg";
import chair from "../assets/icons/chair.svg";
import stair from "../assets/icons/stairs.svg";
import running from "../assets/icons/running.svg";
import bike from "../assets/icons/bike.svg";
import swimming from "../assets/icons/swim.svg";
import mountain from "../assets/icons/mountain.svg";
import dancing from "../assets/icons/circle.svg";
import abs from "../assets/icons/abs.svg";

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

const habit2 = [
  {
    title: "Хөдөлгөөн",
    content: [
      {
        title: "Явган алхах",
        img: stair?.src,
      },
      {
        title: "Богино гүйлт",
        img: running?.src,
      },
      {
        title: "Дугуй унах",
        img: bike?.src,
      },
      {
        title: "Усанд сэлэх",
        img: swimming?.src,
      },
      {
        title: "Ууланд алхах",
        img: mountain?.src,
      },
      {
        title: "Бүжиглэх",
        img: dancing?.src,
      },
      {
        title: "Дасгал хийх",
        img: abs?.src,
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
        mb={12}
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
            <Box>
              {habit2.map((item, index) => (
                <Habit key={index} data={item} />
              ))}
            </Box>
          </SimpleGrid>
        </Box>
        <Box>
          <Image src={Feature3Image?.src} />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
