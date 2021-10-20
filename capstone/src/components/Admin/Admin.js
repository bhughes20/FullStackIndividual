import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
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
import DeleteRecord from "../DeleteRecord/DeleteRecord";
import UpdateRecord from "../UpdateRecord/UpdateRecord";

export default function Admin() {

  const colSpan1 = useBreakpointValue({ base: 2, md: 1 });
  let history = useHistory();

  const {
    handleSubmit: handleSubmitGetDetails,
    control: controlGetDetails,
    formState: { errors: errorsGetDetails },
  } = useForm({
    mode: "onBlur",
  });

  



  const handleRegistrationGetDetails = (data) => {
    const id = data.getDetailsId;
    console.log(data);
    const redirectEndpoint = `/driver-details/${id}`;
    history.push(redirectEndpoint);
  };

 
  

  const handleErrorGetDetails = (errors) => {
    console.log(errors);
  };



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

          <form
            onSubmit={handleSubmitGetDetails(
              handleRegistrationGetDetails,
              handleErrorGetDetails
            )}
          >
            <SimpleGrid
              padding={[0, 10]}
              bgColor="grey.300"
              columns={3}
              columnGap={3}
              rowGap={6}
              w="full"
            >
              <GridItem colSpan={3}>
                <Heading as="h2" size="lg">
                  Get Driver Details
                </Heading>
              </GridItem>
              <GridItem colSpan={colSpan1}>
                <FormControl
                  isRequired
                  isInvalid={errorsGetDetails.getDetailsId}
                >
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
                    {errorsGetDetails.getDetailsId &&
                      errorsGetDetails.getDetailsId.message}
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

          <DeleteRecord />

          <Divider />

          <UpdateRecord />
          
        </VStack>
      </Flex>
    </Container>
  );
}
