import { Box, HStack, Text, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";

export default function Privacy() {
  return (
    <>
      <Box
        fontSize="16px"
        textAlign="justify"
        px={{ xl: "180px", base: "16px" }}
        py="50px"
        textColor="#505050"
        fontWeight={300}
        fontFamily="SfProRounded"
      >
        <Text fontWeight={500} textAlign="center" fontSize={{ md: "28px" }}>
          HabiDo ҮЙЛЧИЛГЭЭНИЙ НӨХЦӨЛ
        </Text>
        <Text
          fontSize={{ md: "16px", base: "12px" }}
          fontWeight={500}
          textAlign={{ md: "end", base: "center" }}
          textColor="red"
          py={3}
        >
          Сүүлд шинэчилсэн огноо: 2022 оны 10-р сарын 24-ний өдөр
        </Text>

        <Text fontWeight={500} textAlign="center" fontSize={{ md: "28px" }} pb={3}>
          НЭГ. ЕРӨНХИЙ НӨХЦӨЛ
        </Text>
        <Box>
          <HStack align="start">
            <Text>1.1.</Text>
            <Text>
              “Оптимал Эн Макс” ХХК-ийн албан ёсны бүтээгдэхүүн “<span style={{ fontWeight: 500 }}>HabiDo</span>” нь
              эерэг дадалтай болох хүсэлтэй, сэтгэл зүйн эрүүл мэнд болоод амьдралын хэв маягтаа анхаардаг хүн бүрд
              зориулсан үйлчилгээ бөгөөд сэтгэл зүйн тест бөглөж өөрийгөө таних, сэтгэл санааны байдлаа бүртгэн хянах,
              өөрт хэрэгтэй дадал бий болгох бүртгэл хөтлөх замаар эерэг дадал хэвшүүлэгч үйлчилгээ юм.
            </Text>
          </HStack>

          <HStack align="start">
            <Text>1.2.</Text>
            <Text>
              Үйлчилгээний нөхцөл нь Хэрэглэгчээс “<span style={{ fontWeight: 500 }}>HabiDo</span>”-г ашиглан сэтгэл
              зүйн тест бөглөж өөрийгөө таних, сэтгэл санааны байдлаа бүртгэн хянах, өөрт хэрэгтэй дадал бий болгох,
              хэвшүүлэх, бүртгэл хөтлөх, <span style={{ fontWeight: 500 }}>HabiDo</span> чатбот ашиглах, өдөр тутмын
              зөвлөмж авахтай холбогдон үүсэх харилцааг зохицуулна.
            </Text>
          </HStack>
          <HStack align="start">
            <Text>1.3.</Text>
            <Box>
              <Text>Энэхүү Үйлчилгээний нөхцөлд хэрэглэсэн дараах нэр томьёог дор дурдсан утгаар ойлгоно. Үүнд:</Text>
              <HStack align="start">
                <Text>1.3.1.</Text>
                <Text>
                  “<span style={{ fontWeight: 500, fontStyle: "italic" }}>Хэрэглэгч</span>” гэж энэхүү Үйлчилгээний
                  нөхцөлийг хүлээн зөвшөөрч, Хэрэглэгчээр бүртгүүлсэн 12 насанд хүрсэн хүүхэд (асран хамгаалагч,
                  харгалзан дэмжигчийн зөвшөөрлийн үндсэн дээр), 18 насанд хүрсэн эрх зүйн бүрэн чадамжтай иргэнийг;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>1.3.2.</Text>
                <Text>
                  “<span style={{ fontWeight: 500, fontStyle: "italic" }}>Дадал</span>” гэж ажлын бүтээмж, эрүүл мэнд,
                  сэтгэл зүй, дасгал хөдөлгөөн, санхүү, гэр бүл, хувийн хөгжил бүлэгт хамаарах сонгон хэрэгжүүлэх
                  боломжтой болон Хэрэглэгчээс “<span style={{ fontWeight: 500 }}>HabiDo</span>”-д оруулсан бусад дадал
                  зуршлыг;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>1.3.3.</Text>
                <Text>
                  “<span style={{ fontWeight: 500, fontStyle: "italic" }}>Чатбот</span>” гэж Хэрэглэгчийн сэтгэл зүйн
                  байдал, бодол мэдрэмж, тулгарч буй асуудлыг хуваалцах зорилго бүхий, сэтгэл зүйн мэдээллүүдийг өгөх
                  автомат хариулагчийг;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>1.3.4.</Text>
                <Text>
                  “<span style={{ fontWeight: 500, fontStyle: "italic" }}>Сэтгэл зүйн тест</span>” гэж бие хүн болоод
                  сэтгэл зүйн онцлог, хувь хүний хөгжил, сэтгэл зүйн эрүүл мэндийг тодорхойлох зорилго бүхий, шинжлэх
                  ухаанаар баталгаажсан сорилыг;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>1.3.5.</Text>
                <Text>
                  “<span style={{ fontWeight: 500, fontStyle: "italic" }}>Т-оноо</span>” гэж Хэрэглэгчийн “
                  <span style={{ fontWeight: 500 }}>HabiDo</span>” дээр гүйцэтгэсэн гүйцэтгэлийг үндэслэн “
                  <span style={{ fontWeight: 500 }}>HabiDo</span>”-аас олгож буй урамшууллын оноог;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>1.3.6.</Text>
                <Text>
                  “<span style={{ fontWeight: 500, fontStyle: "italic" }}>Сэтгэл зүйн зөвлөмж</span>” гэж Хэрэглэгчид
                  хүргэж буй амьдралын чанарыг дээшлүүлэх, дадал хэвшүүлэхтэй холбоотой зөвлөгөө, мэдээллийг;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>1.3.7.</Text>
                <Text>
                  “<span style={{ fontWeight: 500, fontStyle: "italic" }}>Хувийн үзүүлэлт</span>” гэж Хэрэглэгчийн
                  хэвшүүлсэн болон бүртгэсэн дадал, түүнийг гүйцэтгэсэн үйлдэл, хугацаа, мэдээлэл, статистикийг харуулах
                  хэсгийг;
                </Text>
              </HStack>
            </Box>
          </HStack>

          <HStack align="start">
            <Text>1.4.</Text>
            <Text fontWeight={500}>
              Хэрэглэгч нь “HabiDo”-д нэвтэрч, бүртгүүлэхээс өмнө Үйлчилгээний нөхцөл, Нууцлалын бодлоготой бүрэн
              танилцах үүрэгтэй. Хэрэглэгч Та Үйлчилгээний нөхцөл, Нууцлалын бодлоготой бүрэн танилцаж, эдгээр нөхцөл,
              бодлогод заасан нөхцөлүүдийг хүлээн зөвшөөрч, харгалзуулсан хэсгийг дарж баталгаажуулснаар таныг тус
              нөхцөл, бодлогыг зөвшөөрсөн гэж үзнэ.
            </Text>
          </HStack>

          <HStack align="start">
            <Text>1.5.</Text>
            <Text>
              Үйлчилгээний нөхцөлийн хэрэгжилтэд “<span style={{ fontWeight: 500 }}>HabiDo</span>” болон хэрэглэгч нар
              хамтран хяналт тавина.
            </Text>
          </HStack>
        </Box>

        <Text fontWeight={500} textAlign="center" fontSize={{ md: "28px" }} py={3}>
          ХОЁР. ХЭРЭГЛЭГЧИЙГ БҮРТГЭХ
        </Text>
        <Box>
          <HStack align="start">
            <Text>2.1.</Text>
            <Text>
              Хэрэглэгчээр бүртгүүлэхдээ “<span style={{ fontWeight: 500 }}>HabiDo</span>”-ийн Нэвтрэх хэсэгт байрлах
              “Бүртгүүлэх” сонголтыг сонгож, өөрийн Хувийн мэдээлэл (овог, нэр, төрсөн огноо, хүйс, гар утасны дугаар,
              цахим шуудангийн хаяг)-ийг үнэн зөвөөр оруулан таныг танин баталгаажуулах цахим гарын үсэг буюу нууц үгийг
              оруулснаар хэрэглэгч болно.
            </Text>
          </HStack>

          <HStack align="start">
            <Text>2.2.</Text>
            <Text>
              Хэрэглэгч 18 насанд хүрээгүй тохиолдолд түүний асран хамгаалагч, харгалзан дэмжигчээс “Үйлчилгээний
              нөхцөл”-тэй бүрэн танилцаж, “Би зөвшөөрч байна” гэсэн хэсгийг идэвхжүүлснээр Бидэнд 18 насанд хүрээгүй
              хэрэглэгчийн тус үйлчилгээг ашиглах цахим зөвшөөрлийг олгосон гэж үзнэ.
            </Text>
          </HStack>

          <HStack align="start">
            <Text>2.3.</Text>
            <Text>
              Хэрэглэгч нь 18 насанд хүрээгүй гэдгээ нуун дарагдуулсан, худал мэдээлэл оруулсантай холбоотой хариуцлага,
              хохирлыг Habido хүлээхгүй, Хэрэглэгч өөрөө хариуцна.
            </Text>
          </HStack>

          <HStack align="start">
            <Text>2.4.</Text>
            <Text>
              Хэрэглэгч нь “<span style={{ fontWeight: 500 }}>HabiDo</span>”-д нэвтрэх утасны дугаар, цахим шуудан болон
              нууц үгийг бусдад дамжуулахгүй байх, үүнтэй холбоотой учирч болох аливаа эрсдэлээс сэргийлэх үүрэгтэй.
              Энэхүү үүргээ биелүүлээгүй буюу хангалтгүй биелүүлсний улмаас өөрт болон бусдад учирсан аливаа хохирлыг
              хэрэглэгч өөрөө бүрэн хариуцна.
            </Text>
          </HStack>

          <HStack align="start">
            <Text>2.5.</Text>
            <Text>
              Хэрэглэгч нь “<span style={{ fontWeight: 500 }}>HabiDo</span>”-д өөрийн оруулсан, нийтэлсэн мэдээллийн
              үнэн зөв, бодит байдалд бүрэн хариуцлага хүлээнэ.
            </Text>
          </HStack>

          <HStack align="start">
            <Text>2.6.</Text>
            <Text>
              “<span style={{ fontWeight: 500 }}>HabiDo</span>”-н хэвийн ажиллагаа, түүний аюулгүй байдал, мэдээллийн
              нууцлалыг “Оптимал Эн Макс” ХХК бүрэн хариуцна.
            </Text>
          </HStack>
        </Box>

        <Text fontWeight={500} textAlign="center" fontSize={{ md: "28px" }} py={3}>
          ГУРАВ. ҮЙЛЧИЛГЭЭНИЙ ЕРӨНХИЙ НӨХЦӨЛ
        </Text>
        <Box>
          <HStack align="start">
            <Text>3.1.</Text>
            <Text>Нэг хүн нэг бүртгэлтэй байна.</Text>
          </HStack>

          <HStack align="start">
            <Text>3.2.</Text>
            <Box>
              <Text>Хэрэглэгч нь дараах эрхийг эдэлж, үүргийг хүлээнэ. Үүнд:</Text>
              <HStack align="start">
                <Text>3.2.1.</Text>
                <Text>
                  Хэрэглэгч нь “<span style={{ fontWeight: 500 }}>HabiDo</span>”-аас түгээж буй мэдээлэлтэй танилцах,
                  бусдад хуваалцах эрхтэй;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>3.2.2.</Text>
                <Text>
                  “<span style={{ fontWeight: 500 }}>HabiDo</span>”-д өөрийн дадлын талаар мэдээллийг оруулах эрхтэй;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>3.2.3.</Text>
                <Text>
                  “<span style={{ fontWeight: 500 }}>HabiDo</span>”-аас санал болгож буй тестийг бөглөж, үр дүнг хүлээн
                  авах эрхтэй;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>3.2.4.</Text>
                <Text>
                  “<span style={{ fontWeight: 500 }}>HabiDo</span>”-ийн чатботоор дамжуулан өөрийн асуултуудын хариултыг
                  авах эрхтэй;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>3.2.5.</Text>
                <Text>Хуурамч мэдээлэл оруулахгүй байх үүрэгтэй;</Text>
              </HStack>
              <HStack align="start">
                <Text>3.2.6.</Text>
                <Text>
                  Өөрийн хувийн бүртгэлийн нууцлалыг хадгалах үүрэгтэй. Хэрэглэгчийн бүртгэлийн нэр, нууц үгийг чанд
                  хадгалж, өөрийн цахим аюулгүй байдлыг хангана;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>3.2.7.</Text>
                <Text>
                  Өөрийн сэтгэл зүйн тестийн үр дүнг бусдад дамжуулах, нийтэд мэдээлэхгүй байх үүрэгтэй. Хэрэглэгч
                  өөрийн сэтгэл зүйн тестийн үр дүнг бусдад дамжуулсан, нийтэд мэдээлснээс үүссэн болон үүсэж болзошгүй
                  хохирол, хор уршгийг өөрөө хариуцна;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>3.2.8.</Text>
                <Text>
                  Нууц үг алдагдсан, алдагдах эрсдэл үүссэн тохиолдолд өөрийн бүртгэгдсэн цахим хаягаар, эсвэл утасны
                  дугаараар дамжуулан нууц үг шинэчлэх арга хэмжээг нэн даруй авах үүрэгтэй. Өөрийн бүртгэлээр нэвтэрсэн
                  үедээ бусдын өмнөөс тест бөглөх, чатбот ажиллуулах, дадал бүртгэхийг хориглоно;
                </Text>
              </HStack>
            </Box>
          </HStack>

          <HStack align="start">
            <Text>3.3.</Text>
            <Box>
              <Text>
                Дадал зуршлын үйлчилгээнд ажлын бүтээмж, эрүүл мэнд, сэтгэл зүй, дасгал хөдөлгөөн, санхүү, гэр бүл,
                хувийн хөгжил болон Таны оруулсан дурын дадал зуршилтай холбоотой дараах үйлчилгээ хамаарна. Үүнд:
              </Text>
              <HStack align="start">
                <Text>3.3.1.</Text>
                <Text>
                  Дадлыг нэрлэх, “<span style={{ fontWeight: 500 }}>HabiDo</span>”-ээс санал болгосон дурын дүрс, өнгөөр
                  чимэглэх;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>3.3.2.</Text>
                <Text>Дадал эхлэх болон дуусах хугацааг тогтоох; </Text>
              </HStack>
              <HStack align="start">
                <Text>3.3.3.</Text>
                <Text>Дадлын зорилтыг тодорхойлох;</Text>
              </HStack>
              <HStack align="start">
                <Text>3.3.4.</Text>
                <Text>Дадал сануулах гормыг идэвхжүүлж дадал хийх хугацаа болох үед автомаар мэдэгдэл авах;</Text>
              </HStack>
            </Box>
          </HStack>

          <HStack align="start">
            <Text>3.4.</Text>
            <Box>
              <Text>Сэтгэл зүйн тестийн үйлчилгээнд дараах үйлчилгээ хамаарна. Үүнд: </Text>
              <HStack align="start">
                <Text>3.4.1.</Text>
                <Text>Бие хүний онцлогийг тодорхойлох тестийг гүйцэтгэж, үр дүнг тодорхойлох;</Text>
              </HStack>
              <HStack align="start">
                <Text>3.4.2.</Text>
                <Text>Сэтгэл зүйн онцлогийг тодорхойлох тестийг гүйцэтгэж, үр дүнг тодорхойлох;</Text>
              </HStack>
              <HStack align="start">
                <Text>3.4.3.</Text>
                <Text>Хувийн хөгжлийг тодорхойлох тестийг гүйцэтгэж, үр дүнг тодорхойлох;</Text>
              </HStack>
              <HStack align="start">
                <Text>3.4.4.</Text>
                <Text>Сэтгэл зүйн эрүүл мэндийн тестийг гүйцэтгэж, үр дүнг тодорхойлох;</Text>
              </HStack>
            </Box>
          </HStack>

          <HStack align="start">
            <Text>3.5.</Text>
            <Text>
              “<span style={{ fontWeight: 500 }}>HabiDo</span>”-ээс Хэрэглэгчийн эерэг дадал, сэтгэл зүйн эрүүл мэнд
              болоод амьдралын хэв маягт зориулсан өдөр тутмын, богино болон урт хэмжээний зөвлөмжийг тогтмол нийтлэнэ.
            </Text>
          </HStack>

          <HStack align="start">
            <Text>3.6.</Text>
            <Text>
              “<span style={{ fontWeight: 500 }}>HabiDo</span>”-ээс чатботоор дамжуулан Хэрэглэгчийн энэхүү үйлчилгээнд
              хамаарах асуултанд хариулж, хариулт өгнө.
            </Text>
          </HStack>
        </Box>

        <Text fontWeight={500} textAlign="center" fontSize={{ md: "28px" }} py={3}>
          ДӨРӨВ. ТӨЛБӨРИЙН НӨХЦӨЛ
        </Text>
        <Box>
          <HStack align="start">
            <Text>4.1.</Text>
            <Text>
              Хэрэглэгч нь “<span style={{ fontWeight: 500 }}>HabiDo</span>”-ээс тогтоосон төлбөрт болон төлбөргүй
              үйлчилгээг дараах нөхцөлийн дагуу авах эрхтэй. Үүнд:
            </Text>
          </HStack>
          <Box overflowX={{ md: "auto", base: "scroll" }}>
            <Table variant="simple" size={{ md: "md", base: "sm" }} my="30px" overflow="auto">
              <Thead>
                <Tr>
                  <Th>Features</Th>
                  <Th>Үнэгүй хувилбар</Th>
                  <Th>Төлбөртэй хувилбар</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Төлөвлөх боломжтой дадлын тоо</Td>
                  <Td>3</Td>
                  <Td>Хязгаарлалтгүй</Td>
                </Tr>
                <Tr>
                  <Td>Нэг дадал дээр тохируулж болох сануулга</Td>
                  <Td>1</Td>
                  <Td>10</Td>
                </Tr>
                <Tr>
                  <Td>Дадал хэрэгжүүлэлтийг алгасах</Td>
                  <Td>боломжгүй</Td>
                  <Td>боломжтой</Td>
                </Tr>
                <Tr>
                  <Td>Дадлын түүх харах</Td>
                  <Td>Зөвхөн идэвхтэй дадлуудын хэрэгжүүлэлтийн түүхийг харах</Td>
                  <Td>Бүх цагийн үеийн бүх дадлын түүхийг харах</Td>
                </Tr>
                <Tr>
                  <Td>Статистик үзүүлэлт харах</Td>
                  <Td>7 хоног хүртэлх</Td>
                  <Td>Хязгаарлалтгүй</Td>
                </Tr>
                <Tr>
                  <Td>Сэтгэлзүйн тест хийх</Td>
                  <Td>3</Td>
                  <Td>Хязгаарлалтгүй</Td>
                </Tr>
                <Tr>
                  <Td>Зөвлөмж унших</Td>
                  <Td>Хязгаарлалтгүй</Td>
                  <Td>Хязгаарлалтгүй</Td>
                </Tr>
                <Tr>
                  <Td>Чатбот</Td>
                  <Td>Хязгаарлалтгүй</Td>
                  <Td>Хязгаарлалтгүй</Td>
                </Tr>
                <Tr>
                  <Td>Мэдрэмж тэмдэглэх</Td>
                  <Td>14 хоног</Td>
                  <Td>Хязгаарлалтгүй</Td>
                </Tr>
                <Tr>
                  <Td>Мэдрэмжийн түүх харах</Td>
                  <Td>7 хоног хүртэлх</Td>
                  <Td>Бүх цаг үеийн түүх харах боломжтой</Td>
                </Tr>
                <Tr>
                  <Td>Badge/ Шагнал/ Цол </Td>
                  <Td>0</Td>
                  <Td>Бүгдийг авна</Td>
                </Tr>
                <Tr>
                  <Td>Чадвар</Td>
                  <Td>0</Td>
                  <Td>Хязгаарлалтгүй</Td>
                </Tr>
                <Tr>
                  <Td>Хязгаарлалтгүй</Td>
                  <Td>Оролцох боломжгүй</Td>
                  <Td>Оролцох боломжтой</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          <HStack align="start">
            <Text>4.2.</Text>
            <Box overflowX={{ md: "auto", base: "scroll" }}>
              <Text>
                Хэрэглэгч нь зохих төлбөрийг төлснөөр тухайн үйлчилгээг авна. Үйлчилгээний төлбөр нь дараах сонголттой
                байна. Үүнд:
              </Text>
              <Box>
                <Table variant="simple" size={{ md: "md", base: "sm" }} my="30px" overflow="auto">
                  <Thead>
                    <Tr>
                      <Th>№</Th>
                      <Th>Төлбөрийн сонголт</Th>
                      <Th>Төлбөрийн нөхцөл</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>1</Td>
                      <Td>1 сарын эрх</Td>
                      <Td>6,900</Td>
                    </Tr>
                    <Tr>
                      <Td>2</Td>
                      <Td>3 сарын эрх</Td>
                      <Td>18,000</Td>
                    </Tr>
                    <Tr>
                      <Td>3</Td>
                      <Td>Lifetime</Td>
                      <Td>159,000</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>
            </Box>
          </HStack>

          <HStack align="start">
            <Text>4.3.</Text>
            <Text>Хэрэглэгчийн төлөх төлбөр нь HabiDo-г ашиглах хугацаатай уялдан тогтоогдоно. </Text>
          </HStack>

          <HStack align="start">
            <Text>4.4.</Text>
            <Text>
              Хэрэглэгч нь төлбөртэй үйлчилгээний төлбөрийг Qpay болон “<span style={{ fontWeight: 500 }}>HabiDo</span>”
              дээрх төлбөрийн үйлчилгээг ашиглан төлнө.
            </Text>
          </HStack>

          <HStack align="start">
            <Text>4.5.</Text>
            <Box>
              <Text>
                Хэрэглэгчийн төлбөр төлсөн үйлчилгээний хугацаа дуусах болон дуусахаас өмнө “
                <span style={{ fontWeight: 500 }}>HabiDo</span>” дараах арга хэмжээг авна.Үүнд:
              </Text>
              <HStack align="start">
                <Text>4.5.1.</Text>
                <Text>
                  Хэрэглэгчийн төлбөр дуусахаас 3 (гурав) хоногийн өмнөөс “
                  <span style={{ fontWeight: 500 }}>HabiDo</span>” дээр төлбөр дуусах гэж байгаа тухай сануулга
                  харуулна;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>4.5.2.</Text>
                <Text>
                  Төлбөр дуусах өдөр “<span style={{ fontWeight: 500 }}>HabiDo</span>” руу нэвтрэх үед сануулга болон
                  Хэрэглэгчийн бүртгэлтэй цахим шууданд мэдэгдэл хүргүүлнэ;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>4.5.3.</Text>
                <Text>
                  Хэрэглэгчийн төлбөрийн хугацаа дууссан үеэс “<span style={{ fontWeight: 500 }}>HabiDo</span>” дээр
                  хүлээлгийн 3 (гурав) хоногийн хугацаа үүсэх бөгөөд, хүлээлгийн хугацаа дууссан үеэс төлбөрт үйлчилгээг
                  ашиглах боломжгүй болно;
                </Text>
              </HStack>
            </Box>
          </HStack>

          <HStack align="start">
            <Text>4.6.</Text>
            <Box>
              <Text>
                Хэрэглэгчийн төлбөр төлсөн үйлчилгээний хугацаа дууссан, энэхүү Үйлчилгээний нөхцөлийн 4.5-д заасан арга
                хэмжээг “<span style={{ fontWeight: 500 }}>HabiDo</span>”-аас авсан боловч Хэрэглэгч төлбөрт үйлчилгээг
                идэвхжүүлээгүй тохиолдолд “<span style={{ fontWeight: 500 }}>HabiDo</span>”-ийн үйлчилгээ дараах горимд
                шилжихийг анхааруулж байна. Үүнд:
              </Text>
              <HStack align="start">
                <Text>4.6.1.</Text>
                <Text>
                  “<span style={{ fontWeight: 500 }}>HabiDo</span>” үнэгүй хувилбар луу шилжинэ.
                </Text>
              </HStack>
              <HStack align="start">
                <Text>4.6.2.</Text>
                <Text>
                  Олон дадал төлөвлөсөн байвал хамгийн эхэлж төлөвлөсөн 3 (гурав) дадал үлдээд бусад нь цоожлогдох буюу
                  хэрэгжүүлэлтээ тэмдэглэх, түүхээ харах, мэдэгдэл хүлээн авах боломжгүй болно;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>4.6.3.</Text>
                <Text>Дадлаа алгасах боломжгүй болно;</Text>
              </HStack>
              <HStack align="start">
                <Text>4.6.4.</Text>
                <Text>Дадлын түүх харах боломжгүй болно;</Text>
              </HStack>
              <HStack align="start">
                <Text>4.6.5.</Text>
                <Text>Сэтгэлзүйн тест хийх боломжгүй болно;</Text>
              </HStack>
              <HStack align="start">
                <Text>4.6.6.</Text>
                <Text>Мэдрэмжээ өдөрт нэг удаа л тэмдэглэх боломжтой болно;</Text>
              </HStack>
            </Box>
          </HStack>

          <HStack align="start">
            <Text>4.7.</Text>
            <Text>
              Хэрэглэгч нь “<span style={{ fontWeight: 500 }}>HabiDo</span>” дээр гүйцэтгэсэн гүйцэтгэлээрээ Т-оноо
              цуглуулна. Т-оноог дараах нөхцөлөөр тооцно.
            </Text>
          </HStack>
        </Box>

        {/* <Text fontWeight={500} textAlign="center" fontSize={{ md: "28px" }} py={3}>
          “HabiDo” Т-оноо
        </Text>
        <HStack align="start">
          <Text>4.8.</Text>
          <Text>
            Хэрэглэгчийн Habido-д гүйцэтгэсэн гүйцэтгэлээс хамааран түүнийг урамшуулах бонус оноо болох T-оноо олгоно.
          </Text>
        </HStack> */}

        {/* <HStack align="start">
          <Text>4.9.</Text>
          <Box overflowX={{ md: "auto", base: "scroll" }}>
            <Text>Хэрэглэгчид Т-оноо олгох нөхцөл:</Text>
            <Box>
              <Table variant="striped" size={{ md: "md", base: "sm" }} my="30px">
                <Thead>
                  <Tr>
                    <Th>#</Th>
                    <Th>Тайлбар</Th>
                    <Th>Шаардлага </Th>
                    <Th>Цуглуулах оноо</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>1</Td>
                    <Td>Дадлын төлөвлөгөө үүсгэхэд</Td>
                    <Td>Хэрэглэгчийг дадал хэвшүүлэх үйлдлийг урамшуулах зорилготой</Td>
                    <Td>
                      <Box>
                        <Text>Тухайн төлөвлөгөөг хугацаанаас өмнө устгахад оноо устана</Text>
                        <Text>Дээд тал нь 5 хүртэлх идэвхтэй дадал үүсгэнэ.</Text>
                      </Box>
                    </Td>
                    <Td>20T оноо</Td>
                  </Tr>
                  <Tr>
                    <Td>2</Td>
                    <Td>Badges/Тэмдэг авах</Td>
                    <Td>
                      <Box>
                        <Text>• Нийт 6 тэмдэг 1 сард цуглуулах </Text>
                        <Text>• Дээд тал - 1000 оноо (5 дадал) </Text>
                        <Text>• Доод тал - 100 оноо (Зөвлөмж унших)</Text>
                      </Box>
                    </Td>
                    <Td>Нэг дадлыг 7 удаагийн давтамжтай хийвэл тухайн тэмдэг олгогдоно</Td>
                    <Td>
                      <Box>
                        <Text> Урт хугацааны тэмдэг </Text>
                        <Text>• 50Т оноо Богино хугацааны тэмдэг </Text>
                        <Text>• 10Т оноо</Text>
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>3</Td>
                    <Td>Skills/Чадвар дээшлэх</Td>
                    <Td>
                      <Box>
                        <Text>• Нийт 5 чадвар </Text>
                        <Text>• Чадвар тус бүр 3 түвшинтэй</Text>
                      </Box>
                    </Td>
                    <Td>
                      <Box>
                        <Text>1. Түвшин 1 - 1-100 нэгж </Text>
                        <Text>2. Түвшин 2 - 100-200 нэгж </Text>
                        <Text>3. Түвшин 3 - 200- 300 нэгж</Text>
                      </Box>
                    </Td>
                    <Td>
                      <Box>
                        <Text>1. 50T оноо</Text>
                        <Text>2. 100T оноо </Text>
                        <Text>3. 150T оноо</Text>
                      </Box>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>4</Td>
                    <Td>Сэтгэлзүйн тест хийх</Td>
                    <Td>{}</Td>
                    <Td>Тест бөглөж дуусах үед олгогдоно</Td>
                    <Td>5Т оноо</Td>
                  </Tr>
                  <Tr>
                    <Td>5</Td>
                    <Td>Чатбот ашиглах</Td>
                    <Td>{}</Td>
                    <Td>Тухайн өдрийн эхний хариултаар олгогдоно</Td>
                    <Td>5Т оноо</Td>
                  </Tr>
                  <Tr>
                    <Td>6</Td>
                    <Td>Дадлын нэг гүйцэтгэл </Td>
                    <Td>{}</Td>
                    <Td>Дадлын нэг гүйцэтгэлийг 100 хувь болох үед олгогдоно</Td>
                    <Td>5Т оноо</Td>
                  </Tr>
                  <Tr>
                    <Td>7</Td>
                    <Td>Мэдрэмж тэмдэглэл</Td>
                    <Td>{}</Td>
                    <Td>Тухайн өдрийн эхний мэдрэмж бүртгэл амжилттай дуусах үед олгогдоно</Td>
                    <Td>5Т оноо</Td>
                  </Tr>
                  <Tr>
                    <Td>8</Td>
                    <Td>Challenge </Td>
                    <Td>{}</Td>
                    <Td>Тухайн challenge-н оноог авна </Td>
                    <Td>{}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          </Box>
        </HStack> */}

        <Text fontWeight={500} textAlign="center" fontSize={{ md: "28px" }} py={3}>
          ТАВ. ОЮУНЫ ӨМЧ
        </Text>
        <Box>
          <HStack align="start">
            <Text>5.1.</Text>
            <Text>
              “<span style={{ fontWeight: 500 }}>HabiDo</span>”-ийн нэр, лого, апп-ын үндсэн функц, схем, программчлал,
              удирдлага, хяналтын систем, дизайн, контент, чатботны мэдээлэл, тест, дадал төлөвшүүлэх товч мэдээллүүд нь
              “Оптимал Эн Макс” ХХК-ийн оюуны өмч бөгөөд зохиогчийн эрх, түүнтэй холбоотой онцгой эрхийг хуулиар
              хамгаална.
            </Text>
          </HStack>

          <HStack align="start">
            <Text>5.2.</Text>
            <Text>
              Хэрэглэгч нь “<span style={{ fontWeight: 500 }}>HabiDo</span>”-г ашиглах явцад олж мэдсэн нэр, лого,
              апп-ын үндсэн функц, схем, программчлал, удирдлага, хяналтын систем, дизайн, контент, чатботны мэдээлэл,
              тест, дадал төлөвшүүлэх товч мэдээллүүдийг ашиглан ижил төстэй апп-ыг хөгжүүлэх, зах зээлд нэвтрүүлэхийг
              хатуу хориглоно.
            </Text>
          </HStack>

          <HStack align="start">
            <Text>5.3.</Text>
            <Text>
              “Оптимал Эн Макс” ХХК-ийн оюуны өмчийн эрх зөрчсөн тохиолдолд Хэрэглэгчид Оюуны өмчийн тухай хууль,
              Зөрчлийн тухай хууль, Эрүүгийн хуульд заасан хариуцлагыг хүлээлгэнэ.
            </Text>
          </HStack>
        </Box>

        <Text fontWeight={500} textAlign="center" fontSize={{ md: "28px" }} py={3}>
          ЗУРГАА. ХЭРЭГЛЭГЧИЙН ГОМДОЛ, МАРГААНЫГ ШИЙДВЭРЛЭХ
        </Text>
        <Box>
          <HStack align="start">
            <Text>6.1.</Text>
            <Text>
              Хэрэглэгч нь “<span style={{ fontWeight: 500 }}>HabiDo</span>”-н үйл ажиллагаанд холбогдуулж гомдол гаргах
              эрхтэй бөгөөд гомдлыг утсаар, эсхүл цахим хэлбэрээр, Habido-н санал хүсэлт хэсгээр дамжуулан гаргаж болно.
            </Text>
          </HStack>

          <HStack align="start">
            <Text>6.2.</Text>
            <Box>
              <Text>Хэрэглэгч нь гомдол гаргах хэлбэрээс хамааран дараах утасны дугаар, хаягт хандана. Үүнд:</Text>
              <HStack align="start">
                <Text>6.2.1.</Text>
                <Text>
                  Аман хэлбэрээр гаргах гомдлыг 99980838 дугаараар ажлын өдрүүдэд ажлын цагаар холбогдож тэмдэглүүлэх;
                </Text>
              </HStack>
              <HStack align="start">
                <Text>6.2.2.</Text>
                <Text>
                  Цахим хэлбэрээр гаргах гомдлыг <span style={{ fontWeight: 500 }}>HabiDo</span>-н Санал, хүсэлт цэсээр
                  эсхүл Компанийн info@habido.mn цахим шуудангаар дамжуулан ирүүлэх;
                </Text>
              </HStack>
            </Box>
          </HStack>

          <HStack align="start">
            <Text>6.3.</Text>
            <Text>
              “Habido”-ээс хэрэглэгчийн ирүүлсэн гомдлыг хянаж, үйл ажиллагааны сайжруулалт, өөрчлөлт, шинэчлэлтэд хийх
              шийдвэрийг гаргана. Хэрэглэгчийн гомдолд хэрэглэгч өөрийн бүртгэлийн мэдээлэл, гомдол гаргах үндэслэлийг
              тодорхой хэлэх/бичих ба дээрх мэдээлэл агуулагдаагүй бол гомдлыг хянаж, хариу өгөхөөс татгалзах эрхтэй.
            </Text>
          </HStack>
          <HStack align="start">
            <Text>6.4.</Text>
            <Text>
              “Habido” нь хэрэглэгчийн гомдлыг ажлын 14 хоногийн дотор судалж, зохих хариу гомдол гаргасан хэлбэрийн
              дагуу хэрэглэгчид мэдэгдэнэ. “<span style={{ fontWeight: 500 }}>HabiDo</span>” нь таны асуудлыг судлаад
              өгсөн хариу болон авсан арга хэмжээнд Та сэтгэл хангалуун бус байгаа тохиолдолд та Монгол Улсын шүүхэд
              хандаж маргааныг шийдвэрлүүлэх боломжтой.
            </Text>
          </HStack>
        </Box>

        <Text fontWeight={500} textAlign="center" fontSize={{ md: "28px" }} py={3}>
          ДОЛОО. БУСАД
        </Text>
        <Box>
          <HStack align="start">
            <Text>7.1.</Text>
            <Text>
              “Оптимал Эн Макс” ХХК нь Үйлчилгээний нөхцөлд өөрчлөлт оруулах эрхтэй бөгөөд өөрчлөлт оруулсан тохиолдолд
              тухай бүр “<span style={{ fontWeight: 500 }}>HabiDo</span>” аппликейшн дахь “Тусламж” цэсний “Үйлчилгээний
              нөхцөл” хэсэгт нийтэд нээлттэй нийтлэх бөгөөд хэрэглэгч нь танилцах үүрэг хүлээнэ.
            </Text>
          </HStack>
          <HStack align="start">
            <Text>7.2.</Text>
            <Text>
              Үйлчилгээний нөхцөл, түүнд оруулсан нэмэлт өөрчлөлт нь нийтэлсэн үеэс эхлэн хүчин төгөлдөр үйлчилнэ.
            </Text>
          </HStack>
        </Box>
      </Box>
    </>
  );
}