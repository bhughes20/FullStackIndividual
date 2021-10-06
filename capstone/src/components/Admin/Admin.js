import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import axios from "axios";
import {
  Container,
  Flex,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
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
  let history = useHistory();

  const {
    handleSubmit: handleSubmitGetDetails,
    control: controlGetDetails,
    formState: { errors: errorsGetDetails },
  } = useForm({
    mode: "onBlur",
  });

  const {
    handleSubmit: handleSubmitDeleteRecord,
    control: controlDeleteRecord,
    formState: { errors: errorsDeleteRecord },
  } = useForm({
    mode: "onBlur",
  });

  const {
    handleSubmit: handleSubmitUpdateDriverTel,
    control: controlUpdateDriverTel,
    formState: { errors: errorsUpdateDriverTel },
  } = useForm({
    mode: "onBlur",
  });

  const handleRegistrationGetDetails = (data) => {
    const id = data.getDetailsId;
    console.log(data);
    const redirectEndpoint = `/driver-details/${id}`;
    history.push(redirectEndpoint);
  };

  const handleRegistrationDeleteRecord = (data) => {
    const id = data.deleteDriverId;
    console.log(data);

    const url = `https://615c67bcc298130017736174.mockapi.io/api/1/drivers/${id}`;
    axios.delete(url)
    .then((response) => console.log(response))
    .catch(
      (error) => { console.log(error) }
    );
  };

  const handleRegistrationUpdateDriverTel = (data) => {
    const id = data.updateDriverId;
    console.log(data);
    const redirectEndpoint = `/driver-details/${id}`;

    const url = `https://615c67bcc298130017736174.mockapi.io/api/1/drivers/${id}`;
    axios.put(url, data)
      .then((response) => console.log(response))
      .then(() => history.push(redirectEndpoint))
      .catch(
        (error) => { console.log(error) }
      );
  }

  const handleErrorGetDetails = (errors) => {
    console.log(errors);
  };

  const handleErrorDeleteRecord = (errors) => {
    console.log(errors);
  };

  const handleErrorUpdateDriverTel = (errors) => {
    console.log(errors);
  };

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

          <form
            onSubmit={handleSubmitGetDetails(handleRegistrationGetDetails, handleErrorGetDetails)}
          >
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
                <FormControl isRequired isInvalid={errorsGetDetails.getDetailsId}>
                  <FormLabel htmlFor="getDetailsId">Driver ID</FormLabel>
                  <Controller
                    id="getDetailsId"
                    name="getDetailsId"
                    control={controlGetDetails}
                    defaultValue=""
                    rules={{
                      required: "Driver ID is a required field",
                      pattern: {
                        value: /^[0-9]/i,
                        message: "ID must be numeric digits",
                      },
                    }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="Please Enter Driver ID"
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errorsGetDetails.getDetailsId && errorsGetDetails.getDetailsId.message}
                  </FormErrorMessage>
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

          <form
            onSubmit={handleSubmitDeleteRecord(handleRegistrationDeleteRecord, handleErrorDeleteRecord)}
          >
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
                <FormControl isRequired isInvalid={errorsDeleteRecord.deleteDriverId}>
                  <FormLabel htmlFor="deleteDriverId">Driver ID</FormLabel>
                  <Controller
                    id="deleteDriverId"
                    name="deleteDriverId"
                    control={controlDeleteRecord}
                    defaultValue=""
                    rules={{
                      required: "Driver ID is a required field",
                      pattern: {
                        value: /^[0-9]/i,
                        message: "ID must be numeric digits",
                      },
                    }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="Please Enter Driver ID"
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errorsDeleteRecord.deleteDriverId && errorsDeleteRecord.deleteDriverId.message}
                  </FormErrorMessage>
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

          <form onSubmit={handleSubmitUpdateDriverTel(handleRegistrationUpdateDriverTel, handleErrorUpdateDriverTel)}>
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
                <FormControl isRequired isInvalid={errorsUpdateDriverTel.updateDriverId}>
                  <FormLabel htmlFor="updateDriverId">Driver ID</FormLabel>
                  <Controller
                    id="updateDriverId"
                    name="updateDriverId"
                    control={controlUpdateDriverTel}
                    defaultValue=""
                    rules={{
                      required: "Driver ID is a required field",
                      pattern: {
                        value: /^[0-9]/i,
                        message: "ID must be numeric digits",
                      },
                    }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="Please Enter Driver ID"
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errorsUpdateDriverTel.updateDriverId && errorsUpdateDriverTel.updateDriverId.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan2}>
                <FormControl isRequired isInvalid={errorsUpdateDriverTel.updateDriverTel}>
                  <FormLabel htmlFor="updateDriverTel">
                    New Telephone Number
                  </FormLabel>
                  <Controller
                    id="updateDriverTel"
                    name="updateDriverTel"
                    rules={{
                      required: "Telephone Number is a required field",
                      maxLength: {
                        value: 11,
                        message: "Telephone Number must be 11 digits",
                      },
                      minLength: {
                        value: 11,
                        message: "Telephone Number must be 11 digits",
                      },
                      pattern: {
                        value: /^[0-9]/i,
                        message: "Telephone Number must be numeric digits",
                      }
                    }}
                    control={controlUpdateDriverTel}
                    defaultValue=""
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Input
                        type="tel"
                        placeholder="Please Enter Tel..."
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errorsUpdateDriverTel.updateDriverTel && errorsUpdateDriverTel.updateDriverTel.message}
                  </FormErrorMessage>
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
