import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Flex,
  VStack,
  Heading,
  Divider,
  HStack,
  Text,
} from "@chakra-ui/react";

export default function DriverDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = `http://localhost:8080/drivers/${id}`;
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!data) return null;

  return (
    <Container maxWidth="container.xl" padding={0} centerContent>
      <Flex
        bgColor="grey.400"
        h={{ base: "auto", md: "full" }}
        py={[0, 5]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack px={10} spacing={10} alignItems="flex-start" w="full">
          <VStack spacing={3} alignItems="flex-start">
            <Heading as="h1" size="xl">
              Driver Details for {data.firstName} {data.lastName}
            </Heading>
          </VStack>

          <VStack
            spacing={1}
            p={3}
            bgColor="grey.200"
            alignItems="stretch"
            w="full"
          >
            <Heading as="h2" size="lg" pb={3}>
              Personal Details
            </Heading>
            <HStack justifyContent="space-between">
              <Text>Prefix</Text>
              <Text>{data.prefix}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>First Name</Text>
              <Text>{data.firstName}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Last Name</Text>
              <Text>{data.lastName}</Text>
            </HStack>
            <Divider />
          </VStack>

          <VStack
            spacing={1}
            p={3}
            bgColor="grey.200"
            alignItems="stretch"
            w="full"
          >
            <Heading as="h2" size="lg" pb={3}>
              Contact Details
            </Heading>
            <HStack justifyContent="space-between">
              <Text>Telephone Number</Text>
              <Text>{data.telephoneNumber}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Address Line 1 (Street)</Text>
              <Text>{data.addressLine1}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Address Line 2 (Road)</Text>
              <Text>{data.addressLine2}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>City</Text>
              <Text>{data.city}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Postcode / Zip</Text>
              <Text>{data.postcode}</Text>
            </HStack>
            <Divider />
          </VStack>

          <VStack
            spacing={1}
            p={3}
            bgColor="grey.200"
            alignItems="stretch"
            w="full"
          >
            <Heading as="h2" size="lg" pb={3}>
              Vehicle Details
            </Heading>
            <HStack justifyContent="space-between">
              <Text>Vehicle Type</Text>
              <Text>{data.vehicleBodyType}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Engine Size</Text>
              <Text>{data.engineSize}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Additional Drivers</Text>
              <Text>{data.additionalDrivers}</Text>
            </HStack>
            <HStack justifyContent="space-between" spacing={2}>
              <Text>Will the vehicle be used for commercial purposes?</Text>
              <Text>{data.commercialUse}</Text>
            </HStack>
            <HStack justifyContent="space-between" spacing={2}>
              <Text>
                Will the vehicle be used outside the registered state?
              </Text>
              <Text>{data.outsideStateUse}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Current Value</Text>
              <Text>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(data.currentValue)}
              </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Date Registered</Text>
              <Text>
                {new Intl.DateTimeFormat("en-GB").format(
                  new Date(data.dateRegistered)
                )}
              </Text>
            </HStack>
          </VStack> 
          <VStack
            spacing={1}
            p={3}
            bgColor="grey.200"
            alignItems="stretch"
            w="full"
          >
            <Heading as="h2" size="lg" pb={3}>
              Final Quote
            </Heading>
            <HStack justifyContent="space-between">
              <Text>Quote Amount</Text>
              <Text>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(data.finalQuoteAmount)}
              </Text>
            </HStack>
          </VStack>           
        </VStack>
      </Flex>
    </Container>
  );
}
