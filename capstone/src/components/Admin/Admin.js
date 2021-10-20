import React from "react";
import {
  Container,
  Flex,
  VStack,
  Heading,
  Divider,
} from "@chakra-ui/react";
import DeleteRecord from "../DeleteRecord/DeleteRecord";
import UpdateRecord from "../UpdateRecord/UpdateRecord";
import GetRecord from "../GetRecord/GetRecord";

export default function Admin() {

  return (
    <Container maxWidth="container.xl" padding={0} centerContent>
      <Flex
        bgColor="grey.500"
        h={{ base: "auto", md: "full" }}
        py={[0, 10]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack w="full" h="full" px={10} spacing={10} alignItems="center">
          <VStack spacing={3} alignItems="center">
            <Heading size="2xl">Admin</Heading>
          </VStack>
          <GetRecord />
          <Divider />
          <DeleteRecord />
          <Divider />
          <UpdateRecord />
        </VStack>
      </Flex>
    </Container>
  );
}
