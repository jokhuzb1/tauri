import { Box, Button, Input, VStack, Heading, Text } from "@chakra-ui/react";
import { toaster } from "../components/ui/toaster";
import { loginUser } from "../../firebase/authService";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      await loginUser(email, password);
      toaster.create({
        title: "Login successful.",
        description: "Welcome to the POS dashboard.",
        duration: 3000,
      });
    } catch (error: any) {
      toaster.create({
        title: "Login failed.",
        description: error.message,
        duration: 3000,
      });
    }
  };

  return (
    <Box className="flex-1 h-full flex items-center justify-center">
      <Box className="w-full max-w-md p-8 rounded-xl shadow-2xl bg-white">
        <Heading
          size="lg"
          mb={4}
          textAlign="center"
          color="purple.700"
          fontWeight="bold"
        >
          Welcome Back
        </Heading>
        <Text mb={6} fontSize="lg" textAlign="center" color="gray.600">
          Login to your POS Dashboard
        </Text>

        <VStack gap={6} align="stretch">
          <Input
            placeholder="Enter your username"
            variant="outline"
            size="md"
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-600 border-solid border-2 px-2 focus:border-2"
          />
          <Input
            placeholder="Enter your password"
            type="password"
            variant="outline"
            onChange={(e) => setPassword(e.target.value)}
            className="border-gray-600 border-solid border-2 px-2 focus:border-2"
            size="md"
          />

          <Button
            width="full"
            colorScheme="blue"
            size="lg"
            variant="solid"
            bg={"ButtonText"}
            onClick={handleLogin}
            className="transition-transform text-white duration-200"
          >
            Login
          </Button>
          <Link
            to={"/register"}
            className="bg-blue-600 text-white px-4 py-2 rounded text-center"
          >
            Register
          </Link>
        </VStack>

        <Text mt={8} textAlign="center" fontSize="sm" color="gray.500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
