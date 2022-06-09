import { Box, chakra, Flex, SimpleGrid, UnorderedList, ListItem, Image } from "@chakra-ui/react";

import chatbotImg from "../assets/img/chatbot-web.png";
import habitwebImg from "../assets/img/habit-web.png";
import medremjImg from "../assets/img/medremj-web.png";

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
          <Box m="auto">
            <chakra.h2
              mb={4}
              fontFamily="SFProRounded"
              fontSize={{ base: "2xl", md: "55px" }}
              lineHeight="normal"
              textColor="#fa6c51"
              fontWeight={300}
              textAlign={{ base: "center", md: "left" }}
            >
              Чатботтой ярилцан бодол мэдрэмжээ хуваалцах
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              fontFamily="SFProRounded"
              fontWeight={300}
              lineHeight="1.39"
              fontSize={{ md: "18px" }}
            >
              <UnorderedList>
                <ListItem>Сэтгэл зүйн байдлаа автомат чатботтой 24/7 хуваалцаарай.</ListItem>
                <ListItem>
                  Мэдрэмжээ илэрхийлэх, өөрт тулгарч буй асуудлаа хуваалцах болон сэтгэл зүйн мэдээллүүдийг авах
                  боломжтой.
                </ListItem>
                <ListItem>
                  Мэдрэмжээ илэрхийлэх, өөрт тулгарч буй асуудлаа хуваалцах болон сэтгэл зүйн мэдээллүүдийг авах
                  боломжтой.
                </ListItem>
              </UnorderedList>
            </chakra.p>
          </Box>
          <Box w="full" h="full">
            <Image src={chatbotImg?.src} />
          </Box>
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
              Мэдрэмжээ тэмдэглэн бүртгэх
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              fontFamily="SFProRounded"
              fontWeight={300}
              lineHeight="1.39"
              fontSize={{ md: "18px" }}
            >
              <UnorderedList>
                <ListItem>
                  Өдөр бүр голлон төрж буй мэдрэмжээ, түүнийг үүсгэж буй шалтгааны хамт тэмдэглэх. Жиш: “санаа зовох,
                  шалгалтаас болоод” “гэмших, гэрээ цэвэрлээгүйгээс болоод” гэх мэт.
                </ListItem>
                <ListItem>
                  Тухайн сард танд голлон төрсөн мэдрэмжүүд болон тэдгээрийн шалтгааныг нэгдсэн графикаар харах
                  боломжтой ба энэ нь таныг өөрийгөө илүү ойлгож, өөр дээрээ ажиллахад туслах болно.
                </ListItem>
                <ListItem>
                  Өөрт төрдөг мэдрэмжүүдээ ялган таньж, тэдгээрийг үүсгэж буй шалтгаануудыг тэмдэглэх нь ялангуяа таагүй
                  мэдрэмж дахин төрөхөөс сэргийлэх, эсвэл тухайн үед хэрхэн тайвшрах вэ гэдгийг таних боломжийг олгоно.
                </ListItem>
              </UnorderedList>
            </chakra.p>
          </Box>
          <Box w="full" h="full">
            <Image src={medremjImg?.src} />
          </Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box m="auto">
            <chakra.h2
              mb={4}
              fontFamily="SFProRounded"
              fontSize={{ base: "2xl", md: "55px" }}
              lineHeight="normal"
              textColor="#fa6c51"
              fontWeight={300}
              textAlign={{ base: "center", md: "left" }}
            >
              Дадал зуршил хэвшүүлэх
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              fontFamily="SFProRounded"
              fontWeight={300}
              lineHeight="1.39"
              fontSize={{ md: "18px" }}
            >
              <UnorderedList>
                <ListItem>36 дадлаас өөрийн хүссэнийг сонгон мөн шинээр үүсгэн хэвшүүлэх боломжтой.</ListItem>
                <ListItem>
                  Тухайн дадлыг хэвшүүлэхийг сануулах цаг тохируулах боломжтой тул мартахаас сэргийлнэ.
                </ListItem>
                <ListItem>Тухайн өдөрт хийх дадлын жагсаалт болон өмнөх түүхээ харах бололцоотой.</ListItem>
                <ListItem>
                  Гүйцэтгэлийг тоон үзүүлэлтээр харуулах тул ахиц дэвшлээ харан өөртөө үнэлэлт дүгнэлт өгөх боломжтой.
                </ListItem>
              </UnorderedList>
            </chakra.p>
          </Box>
          <Box w="full" h="full">
            <Image src={habitwebImg?.src} />
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
