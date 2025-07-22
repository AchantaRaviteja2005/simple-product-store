import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  FormControl,
  FormLabel,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast();

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
      // Reset form after successful creation
      setNewProduct({
        name: "",
        price: "",
        image: "",
      });
    }
  };

  return (
    <Container maxW={"container.sm"} pt={10}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded="lg"
          shadow="md"
        >
          <VStack spacing={4}>
            {/* Product Name Field */}
            <FormControl isRequired>
              <FormLabel>Product Name</FormLabel>
              <Input
                placeholder="Enter Product Name"
                name="name"
                type="text"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
            </FormControl>

            {/* Product Price Field */}
            <FormControl isRequired>
              <FormLabel>Product Price</FormLabel>
              <Input
                placeholder="Enter Product Price"
                name="price"
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
            </FormControl>

            {/* Product Image Field */}
            <FormControl isRequired>
              <FormLabel>Product Image</FormLabel>
              <Input
                placeholder="Enter Image URL"
                name="image"
                type="url"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
            </FormControl>

            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
