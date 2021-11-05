import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Heading,
  HStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function GetRecord() {
  let history = useHistory();
  const colSpan = useBreakpointValue({ base: 3, md: 1 });

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
    checkDriverRecordExists(id);
  };

  const checkDriverRecordExists = (id) => {
    const url = `http://localhost:8080/drivers/${id}`;
    const redirectEndpoint = `/driver-details/${id}`;
    axios
      .get(url)
      .then((response) => {
        console.log(response)
        if (response.status >= 200 && response.status < 300){
          history.push(redirectEndpoint);
        }
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        if(error.response.status === 404){
          toast.error(`Sorry, Driver ID ${id} does not exist.`)
        } else {
          toast.error("Oops, something went wrong!")
        }
      });
  };

  const handleErrorGetDetails = (errors) => {
    console.log(errors);
  };

  return (
    <form
      onSubmit={handleSubmitGetDetails(
        handleRegistrationGetDetails,
        handleErrorGetDetails
      )}
    >
      <SimpleGrid
        padding={[5, 10]}
        bgColor="grey.300"
        columns={3}
        columnGap={3}
        rowGap={6}
        flexGrow={1}
        w="full"
      >
        <GridItem colSpan={3}> 
          <Heading as="h2" size="lg">
            Get Driver Details
          </Heading>
        </GridItem>
        <GridItem colSpan={colSpan}>
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
              {errorsGetDetails.getDetailsId &&
                errorsGetDetails.getDetailsId.message}
            </FormErrorMessage>
          </FormControl>
        </GridItem>
        <HStack alignItems="end">
        <GridItem colSpan={colSpan} >
          <Button type="submit" size="md">
            Get Details
          </Button>
        </GridItem>
        </HStack>
      </SimpleGrid>
    </form>
  );
}
