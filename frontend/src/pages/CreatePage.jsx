import { Container, Heading, VStack, Box, useColorModeValue,Input, Button, useToast } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const CreatePage = () => {
    const[newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: '',
    })

    const toast = useToast();
    
    const handleAddProduct = async(e) => {
        e.preventDefault();

        if (!newProduct.name ||!newProduct.price ||!newProduct.image) {
            toast({
                title: "Error",
                description: "Please fill all fields",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            toast({
                title: "Success",
                description: "Product Created successfully",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
        }

        try{
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newProduct)  // Send data as JSON
            });

            if(!response.ok || !newProduct.name || !newProduct.price || !newProduct.image ) {
                throw new Error(`${response.status}`);
                // return { success: false, message: "Please fill all fields" };
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