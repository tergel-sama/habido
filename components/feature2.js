import { Text, Box, Image } from "@chakra-ui/react";

import StatsImage from "../assets/img/stats.png";

export default function Feature2() {
  return (
    <Box bg="#f4f6f8" pt="58px">
      <Text textAlign="center" fontWeight={300} fontSize="55px" fontFamily="SFProRounded" textColor="#fa6c51">
        Статистик, мэдээллээ харах боломж
      </Text>
      <Image pt="58px" m="auto" w="1100px" src={StatsImage?.src} />
    </Box>
  );
}
