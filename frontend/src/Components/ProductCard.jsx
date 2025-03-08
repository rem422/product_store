import React from 'react'
import { Box, Heading, Text, Image, HStack, IconButton, useColorModeValue } from '@chakra-ui/react'
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

const ProductCard = ({name, price, image}) => {
  const textColor = useColorModeValue('gray.600', 'gray.200');;
  const bg = useColorModeValue('white', 'gray.800');;

  return (
    <Box
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      transition="all .3s"
      _hover={{transform: "translateY(-5px)", shadow: "xl" }}
      bg={bg}
    >
      <Image alt={name} src={image} w="full" h={48} objectFit="cover"/>
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {name}
        </Heading>
        <Text fontWeight={'bold'} fontSize={'xl'} color={textColor} mb={4}>
          ${price}
        </Text>
        <HStack spacing={2}>
          <IconButton icon={<FaEdit />} colorScheme='blue'/>
          <IconButton icon={<RiDeleteBinLine />} colorScheme='red'/>
        </HStack>
      </Box>
    </Box>
  )
}

export default ProductCard
