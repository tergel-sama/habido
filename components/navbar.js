import { Box, Flex, Text, IconButton, Button, Stack, useBreakpointValue, useDisclosure, Image } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import LogoImage from "../assets/img/navbarLogo.png";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex minH="100px" py={{ base: 2 }} px={{ base: 4, lg: "15rem" }} borderStyle="solid" align="center">
        <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text textAlign={useBreakpointValue({ base: "center", md: "left" })} fontFamily="heading">
            <Image src={LogoImage?.src} />
          </Text>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify="flex-end" direction="row" spacing={6}>
          <Button
            as="a"
            fontSize="20px"
            fontFamily="SfProRounded"
            fontWeight={500}
            color="#424852"
            variant="link"
            href="#"
          >
            Зөвлөмж
          </Button>
          <Button
            as="a"
            fontSize="20px"
            fontFamily="SfProRounded"
            fontWeight={500}
            color="#424852"
            variant="link"
            href="#"
          >
            Холбоо барих
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            borderRadius="17px"
            py="5px"
            px="20px"
            h="34px"
            w="128px"
            fontSize="20px"
            fontFamily="SfProRounded"
            fontWeight={500}
            color="white"
            bg="#fa6c51"
            href="#"
          >
            <span className="h-[25px]">Апп татах</span>
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
