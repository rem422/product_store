import { Container, Heading, VStack, Box, useColorModeValue,Input, Button } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const CreatePage = () => {
    const[newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: '',
    })

    const handleAddProduct = async(e) => {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)  // Send data as JSON
            });

            if(!response.ok){
                throw new Error(`Please fill the fields: ${response.status}`);
            }

            const data = await response.json();
            console.log("Product added successfully:", data);
            
        } catch(error){
            console.error('Failed to add product. Please try again:', error);
        }
    }

useEffect(() => {
    handleAddProduct();
})

    return (
        <Container maxW={"container.sm"}>
            <VStack
                spacing={8}
            >
                <Heading 
                    as={'h1'} 
                    size={'2xl'} 
                    textAlign={'center'}
                    mb={8}
                >
                    Create New Product
                </Heading>
                <Box
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    p={6}
                    rounded={'lg'}
                    shadow={'md'}
                >
                    <VStack spacing={4}>
                        <Input 
                            placeholder='Name' 
                            name='name' 
                            value={newProduct.name} 
                            onChange={(e) => setNewProduct({...newProduct, name: e.target.value })}
                        />
                        <Input 
                            placeholder='Price' 
                            name='price' 
                            value={newProduct.price} 
                            onChange={(e) => setNewProduct({...newProduct, price: e.target.value })}
                        />
                        <Input 
                            placeholder='Image' 
                            name='image' 
                            value={newProduct.image} 
                            onChange={(e) => setNewProduct({...newProduct, image: e.target.value })}
                        />
                        <Button colorScheme='blue' onClick={handleAddProduct} w={'full'}>Add Product</Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreatePage