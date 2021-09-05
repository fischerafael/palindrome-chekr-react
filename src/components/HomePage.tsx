import { useEffect, useState } from "react";

import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Flex, Text, VStack } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";

export const HomePage = () => {
  const [input, setInput] = useState("");

  const [isPalindrome, setPalindrome] = useState(false);

  const verifyPalindrome = (input: string) => {
    if (!input) return setPalindrome(false);
    const reversedInput = input.split("").reverse().join("");
    if (reversedInput === input) return setPalindrome(true);
    return setPalindrome(false);
  };

  useEffect(() => {
    verifyPalindrome(input);
  }, [input]);

  return (
    <Flex w="full" justify="center">
      <VStack maxW="400px" w="full" h="100vh" justify="center" spacing="8">
        <Text color="red.400" fontWeight="bold" fontSize="4xl">
          Palindrome Chekr
        </Text>

        <FormControl>
          <FormLabel>Type something</FormLabel>
          <Input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            variant="flushed"
            colorScheme="red"
          />
        </FormControl>

        {isPalindrome && (
          <Tag size="lg" colorScheme="green">
            It is a palindrome
          </Tag>
        )}

        {!isPalindrome && (
          <Tag size="lg" colorScheme="red">
            It is not a palindrome
          </Tag>
        )}
      </VStack>
    </Flex>
  );
};
