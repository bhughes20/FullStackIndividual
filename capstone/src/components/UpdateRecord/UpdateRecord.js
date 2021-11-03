import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  SimpleGrid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function UpdateRecord() {

  const colSpan = useBreakpointValue({ base: 3, md: 1 });
  let history = useHistory();

  const {
    handleSubmit: handleSubmitUpdateDriverTel,
    control: controlUpdateDriverTel,
    formState: { errors: errorsUpdateDriverTel },
  } = useForm({
    mode: "onBlur",
  });

  const populateUpdateData = (data, newTelephoneNumber) => {
    const updateData = {
      prefix: data.prefix,
      firstName: data.firstName,
      lastName: data.lastName,
      telephoneNumber: newTelephoneNumber,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2,
      city: data.city,
      postcode: data.postcode,
      vehicleBodyType: data.vehicleBodyType,
      engineSize: data.engineSize,
      additionalDrivers: data.additionalDrivers,
      commercialUse: data.commercialUse,
      outsideStateUse: data.outsideStateUse,
      currentValue: data.currentValue,
      dateRegistered: data.dateRegistered,
      id: data.id,
    };

    return updateData;
  };

  function updateDriverData(url, updateData) {
    const id = updateData.id
    const redirectEndpoint = `/driver-details/${id}`;
    axios
      .put(url, updateData)
      .then((response) => {
        console.log(response.data);
        if (response.status >= 200 && response.status < 300){
          toast.success(`Telephone Number for Driver ID ${id} has been updated to ${updateData.telephoneNumber}`, {
            onClose: () => history.push(redirectEndpoint),
          })
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Oops, something went wrong!")
      });
  }

  function getDriverData(id, url, populateUpdateData, newTelephoneNumber) {
    axios
      .get(url)
      .then(function (response) {
        const updateData = populateUpdateData(response.data, newTelephoneNumber);
        console.log(updateData);
        updateDriverData(url, updateData);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        if(error.response.status === 404){
          toast.error(`Sorry, Driver ID ${id} does not exist.`)
        } else {
          toast.error("Oops, something went wrong!")
        }
      });
  }

  const handleRegistrationUpdateDriverTel = (data) => {
    console.log(data);
    const id = data.updateDriverId;
    const newTelephoneNumber = data.telephoneNumber;
    const url = `http://localhost:8080/drivers/${id}`;

    getDriverData(id, url, populateUpdateData, newTelephoneNumber);
  };

  const handleErrorUpdateDriverTel = (errors) => {
    console.log(errors);
  };

  return (
    <form
            onSubmit={handleSubmitUpdateDriverTel(
              handleRegistrationUpdateDriverTel,
              handleErrorUpdateDriverTel
            )}
          >
            <SimpleGrid
              padding={[0, 10]}
              bgColor="grey.300"
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
              <GridItem colSpan={colSpan}>
                <FormControl
                  isRequired
                  isInvalid={errorsUpdateDriverTel.updateDriverId}
                >
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
                    {errorsUpdateDriverTel.updateDriverId &&
                      errorsUpdateDriverTel.updateDriverId.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan}>
                <FormControl
                  isRequired
                  isInvalid={errorsUpdateDriverTel.telephoneNumber}
                >
                  <FormLabel htmlFor="telephoneNumber">
                    New Telephone Number
                  </FormLabel>
                  <Controller
                    id="telephoneNumber"
                    name="telephoneNumber"
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
                      },
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
                    {errorsUpdateDriverTel.telephoneNumber &&
                      errorsUpdateDriverTel.telephoneNumber.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan}>
                <Button type="submit" size="md">
                  Update
                </Button>
              </GridItem>
            </SimpleGrid>
          </form>
  )
}
