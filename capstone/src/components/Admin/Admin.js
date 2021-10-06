import React from "react";
import {
  Container,
  Flex,
  VStack,
  HStack,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Admin() {
  const colSpan1 = useBreakpointValue({ base: 2, md: 1 });
  const colSpan2 = useBreakpointValue({ base: 3, md: 1 });
  return (
    <Container maxWidth="container.xl" padding={0} centerContent>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">Admin</Heading>
          </VStack>

          <form>
            <SimpleGrid
              padding={[0, 10, 20]}
              bgColor="grey.200"
              columns={3}
              columnGap={3}
              rowGap={6}
              w="full"
              verticalAlign="bottom"
            >
              <GridItem colSpan={3}>
                <Heading as="h2" size="lg">
                  Get Driver Details
                </Heading>
              </GridItem>
              <GridItem colSpan={colSpan1}>
                <FormControl isRequired>
                  <FormLabel htmlFor="getDetailsId">Driver ID</FormLabel>
                  <Input
                    id="getDetailsId"
                    name="getDetailsId"
                    placeholder="Please Enter Driver ID"
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan1}>
                <Button type="submit" size="md">
                  Get Details
                </Button>
              </GridItem>
            </SimpleGrid>
          </form>

          <Divider />

          <form>
            <SimpleGrid
              padding={[0, 10, 20]}
              bgColor="grey.200"
              columns={3}
              columnGap={3}
              rowGap={6}
              w="full"
              verticalAlign="bottom"
            >
              <GridItem colSpan={3}>
                <Heading as="h2" size="lg">
                  Delete Driver Record
                </Heading>
              </GridItem>
              <GridItem colSpan={colSpan1}>
                <FormControl isRequired>
                  <FormLabel htmlFor="deleteDriverId">Driver ID</FormLabel>
                  <Input
                    id="deleteDriverId"
                    name="deleteDriverId"
                    placeholder="Please Enter Driver ID"
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan1}>
                <Button type="submit" size="md">
                  Delete
                </Button>
              </GridItem>
            </SimpleGrid>
          </form>

          <Divider />

          <form>
            <SimpleGrid
              padding={[0, 10, 20]}
              bgColor="grey.200"
              columns={3}
              columnGap={3}
              rowGap={6}
              w="full"
              verticalAlign="bottom"
            >
              <GridItem colSpan={3}>
                <Heading as="h2" size="lg">
                  Update Driver Telephone Number
                </Heading>
              </GridItem>
              <GridItem colSpan={colSpan2}>
                <FormControl isRequired>
                  <FormLabel htmlFor="updateDriverId">Driver ID</FormLabel>
                  <Input
                    id="updateDriverId"
                    name="updateDriverId"
                    placeholder="Please Enter Driver ID"
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan2}>
                <FormControl isRequired>
                  <FormLabel htmlFor="updateDriverTel">
                    New Telephone Number
                  </FormLabel>
                  <Input
                    id="updateDriverTel"
                    name="updateDriverTel"
                    type="tel"
                    placeholder="Please Enter Tel..."
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan1}>
                <Button type="submit" size="md">
                  Update
                </Button>
              </GridItem>
            </SimpleGrid>
          </form>
        </VStack>
      </Flex>
    </Container>
  );
}
