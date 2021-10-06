import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import {
  Container,
  Flex,
  VStack,
  Heading,
  Divider,
  HStack,
  Text
} from "@chakra-ui/react";

export default function DriverDetails() {

  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = `https://615c67bcc298130017736174.mockapi.io/api/1/drivers/${id}`;
    axios.get(url)
      .then(response => setData(response.data))
      .then(response => {console.log(response)})
      .catch(
        (err) => { console.log(err) }
    );
  }, [id]);


  if (!data) return null;

  return (
    <Container maxWidth="container.xl" padding={0} centerContent>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack p={10} spacing={10} alignItems="flex-start">
          <VStack spacing={3} alignItems="flex-start">
            <Heading as="h1" size="2xl">Driver Details for {data.firstName} {data.lastName}</Heading>
            <Divider />
          </VStack>

          <VStack spacing={1} alignItems="stretch" w="full">
            <Heading as="h2">Personal Details</Heading>
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
          
          <VStack spacing={1} alignItems="stretch" w="full">
            <Heading as="h2">Contact Details</Heading>
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
              <Text>{data.postcodeOrZip}</Text>
            </HStack>
            <Divider />
          </VStack>
          
          <VStack spacing={1} alignItems="stretch" w="full">
            <Heading as="h2">Vehicle Details</Heading>
            <HStack justifyContent="space-between">
              <Text>Vehicle Type</Text>
              <Text>{data.vehicleType}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Engine Size</Text>
              <Text>{data.engineSize}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Additional Drivers</Text>
              <Text>{data.additionalDrivers}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Will the vehicle be used for commercial purposes?</Text>
              <Text>{data.commercialPurposes}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Will the vehicle be used outside the registered state?</Text>
              <Text>{data.outOfRegisteredState}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Current Value</Text>
              <Text>{data.currentValue}</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>Date Registered</Text>
              <Text>{data.registrationDate}</Text>
            </HStack>
          </VStack>
        </VStack>
      </Flex>
    </Container>
  )
}