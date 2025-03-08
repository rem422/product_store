import React, { useState, useEffect } from 'react'
import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ProductCard from '../Components/ProductCard'

const HomePage = () => {
    const [products, setProducts] = useState("");

    useEffect(() => {
        const fetchData = async () =>  {
            const response = await fetch('http://localhost:5000/api/products');
            const data = await response.json();
            setProducts(data);
        }
        fetchData();
    }, []);

    return (
        <Container maxW="container.xl" py={12}>
        <VStack spacing={8}>
            <Text 
                fontSize={'30'}
                fontWeight={'bold'}
                bg={"linear(to-r, cyan.400, blue.500)"}
                bgClip={'text'}
                textAlign={'center'}
            >
                Current Products 🚀
            </Text>
            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={10}
                w={'full'}
            >
                {
                    products && products.data.map((product) => (
                        <ProductCard 
                            key={product._id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))
                }
            </SimpleGrid>

            <Text 
                fontSize={'xl'}
                textAlign={'center'}
                fontWeight={'bold'}
                color={'gray.500'}
            >
                No Product found 🥲 {''}
                <Link to={"/create"}>
                    <Text as={'span'} color={"blue.500"} _hover={{textDecoration: "underline"}}>
                        Create a Product
                    </Text>
                </Link>
            </Text>
        </VStack>
        </Container>
    )
}

export default HomePage