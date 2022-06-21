/* eslint-disable jsx-a11y/anchor-is-valid */

import { GoLocation } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineMail, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { Box,  Link,  Stack, Text, Image, SimpleGrid, Spacer, Flex, IconButton} from "@chakra-ui/react";
import Logo from "../assets/img/navbarLogo.png"

export default function LargeWithLogoLeft() {
  return (
    <Box
    width='100%'
    backgroundColor="#f4f6f8"
    minH="100px" py={{ base: 2 }} px={{ base: 4, md: 12, "2xl": "15rem" }} borderStyle="solid"
     >
      <SimpleGrid
      templateColumns={{ sm: "1fr 1fr", md: "1fr 1fr"}}
      >
        <Stack
        spacing={6}
        >
          <Flex
           pt="71px" pb="47px" 
          >
          <Stack>
          <Box pb = "24.3px"><Image src={Logo?.src} /></Box>
          
          <Flex>
          <Text
          fontFamily="SFProRounded"
          fontSize = '20px'
          pb = "66px"
          ><strong>Happy <span>&#8226;</span> Habit <span>&#8226;</span>  Do</strong></Text>
          </Flex>

          <Spacer/>
          <Text
          fontFamily="SFProRounded"
          fontSize = '20px'
          >All rights reserved      2022. Optimal N Max LLC.</Text>
          
          
          </Stack>
          </Flex>
        </Stack>
        <Flex>
        <Spacer/>
        <Stack
         pt="71px" pb="47px" 
        >
          <Flex
          pb = "37px"
          >    
              <IconButton
              variant='outline'
              colorScheme='white'
              aria-label='call sage'
              fontSize='20px'
              borderColor='#fa6c51'
              icon = {<BsTelephone
                color = "white"
              />}
              borderRadius = '50px'
              backgroundColor='#fa6c51'
              marginRight='10px'
              />
              <Link href="#"
              fontFamily="SFProRounded"
              fontSize = '20px'
              >99999999</Link>
          </Flex>
          <Flex
          pb = "37px"
          >
          <IconButton
              variant='outline'
              colorScheme='white'
              aria-label='call sage'
              fontSize='20px'
              borderColor='#fa6c51'
              icon = {<AiOutlineMail
                color = "white"
              />}
              borderRadius = '50px'
              backgroundColor='#fa6c51'
              marginRight='10px'
            />
            <Link href="#"
            fontFamily="SFProRounded"
            fontSize = '20px'
            >habido@optimal.mn</Link>
          </Flex>
          <Flex>
          <IconButton
              variant='outline'
              borderColor='#fa6c51'
              colorScheme='white'
              aria-label='call sage'
              fontSize='20px'
              icon = {<GoLocation
              color = "white"
              />}
              borderRadius = '50px'
              backgroundColor='#fa6c51'
              marginRight='10px'
              
            />
            <Link href="#"
            fontFamily="SFProRounded"
            fontSize = '20px'
            width="226px"
            >ХУД, 18-р хороо LS Plaza
            8 давхар 801 тоот</Link>
          </Flex>
        </Stack>
        <Spacer/>
        <Stack
        pt="71px" pb="47px" >
        <Flex
        pb = "37px"
        >
        <IconButton
              variant='outline'
              colorScheme='white'
              aria-label='call sage'
              fontSize='20px'
              icon = {<AiOutlineInstagram
                color = "white"
              />}
              borderRadius = '50px'
              borderColor='#fa6c51'
              backgroundColor='#fa6c51'
              marginRight='10px'
            />
        
            <Link href="#"
            fontFamily="SFProRounded"
            fontSize = '20px'
            >Follow us on</Link>
          </Flex>
          <Flex
          pb = "37px"
          >
          <IconButton
              variant='outline'
              colorScheme='white'
              aria-label='call sage'
              borderColor='#fa6c51'
              fontSize='20px'
              icon = {<FiFacebook
                color = "white"
              />}
              borderRadius = '50px'
              backgroundColor='#fa6c51'
              marginRight='10px'
            />
            <Link href="#"
            fontFamily="SFProRounded"
            fontSize = '20px'
            >Like us on</Link>
          </Flex>
          <Flex>
          <IconButton
              variant='outline'
              colorScheme='white'
              aria-label='call sage'
              fontSize='20px'
              borderColor='#fa6c51'
              icon = {<AiOutlineYoutube
                color = "white"
              />}
              borderRadius = '50px'
              backgroundColor='#fa6c51'
              marginRight='10px'
            />
            <Link href="#"
            fontFamily="SFProRounded"
            fontSize = '20px'
            >Subscribe us on</Link>
          </Flex>
        </Stack>
        </Flex>
        
      </SimpleGrid>

    </Box>
    );
}