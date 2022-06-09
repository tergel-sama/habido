/* eslint-disable react/destructuring-assignment */
import { chakra, Flex, Icon } from "@chakra-ui/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Pagination() {
  const PagButton = (props) => {
    const activeStyle = {
      bg: "#FDC4B9",
      color: "#fa6c51",
    };
    return (
      <chakra.button
        mx={1}
        px={4}
        py={2}
        borderRadius="10px"
        color="#424852"
        opacity={props.disabled && 0.6}
        _hover={!props.disabled && activeStyle}
        cursor={props.disabled && "not-allowed"}
        {...(props.active && activeStyle)}
      >
        {props.children}
      </chakra.button>
    );
  };
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Flex>
        <PagButton>
          <Icon as={IoIosArrowBack} color="#fa6c51" boxSize={4} />
        </PagButton>
        <PagButton>1</PagButton>
        <PagButton active>2</PagButton>
        <PagButton>3</PagButton>
        <PagButton>4</PagButton>
        <PagButton>5</PagButton>
        <PagButton>
          <Icon as={IoIosArrowForward} color="#fa6c51" boxSize={4} />
        </PagButton>
      </Flex>
    </Flex>
  );
}
