import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-datepicker";
import {
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useBreakpointValue,
} from "@chakra-ui/react";
import axios from "axios";

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const colSpan1 = useBreakpointValue({ base: 6, md: 2 });
  const colSpan2 = useBreakpointValue({ base: 6, md: 3 });

  const prefixOptions = [
    { value: "Dr", label: "Dr" },
    { value: "Miss", label: "Miss" },
    { value: "Mr", label: "Mr" },
    { value: "Mrs", label: "Mrs" },
    { value: "Ms", label: "Ms" },
  ];

  const vehicleTypeOptions = [
    { value: "Cabriolet", label: "Cabriolet" },
    { value: "Coupe", label: "Coupe" },
    { value: "Estate", label: "Estate" },
    { value: "Hatchback", label: "Hatchback" },
    { value: "Other", label: "Other" },
  ];

  const engineSizeOptions = [
    { value: "1000", label: "1000" },
    { value: "1600", label: "1600" },
    { value: "2000", label: "2000" },
    { value: "2500", label: "2500" },
    { value: "3000", label: "3000" },
    { value: "Other", label: "Other" },
  ];

  const currentValueOptions = [
    { value: "0 to 5000", label: "0 to 5000" },
    { value: "5001 to 10000", label: "5001 to 10000" },
    { value: "10001 to 20000", label: "10001 to 20000" },
    { value: "20001 to 30000", label: "20001 to 30000" },
    { value: "30001 to 40000", label: "30001 to 40000" },
    { value: "40001 to 50000", label: "40001 to 50000" },
  ];

  const handleRegistration = (data) => {
    const endpoint =
      "https://615c67bcc298130017736174.mockapi.io/api/1/drivers";

    axios
      .post(endpoint, data)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const handleError = (errors) => {
    console.log(errors);
  };

  return (
    <Container maxWidth="container.xl" padding={0}>
      <Flex
        h={{ base: "auto", md: "100vh" }}
        py={[0, 10, 20]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">Get Quote</Heading>
            <Text>Please enter your driver details below to get a quote.</Text>
          </VStack>

          <form onSubmit={handleSubmit(handleRegistration, handleError)}>
            <SimpleGrid
              padding={[0, 10, 20]}
              bgColor="grey.200"
              columns={6}
              columnGap={3}
              rowGap={6}
              w="full"
            >
              <GridItem colSpan={colSpan1}>
                <FormControl isInvalid={errors.prefix}>
                  <FormLabel htmlFor="prefix">Prefix</FormLabel>
                  <Controller
                    id="prefix"
                    name="prefix"
                    control={control}
                    defaultValue={""}
                    rules={{ required: "Prefix is a required field" }}
                    render={({ field: { name, value, onBlur, onChange, ref } }) => (
                      <Select
                        name={name}
                        placeholder="Select..."
                        options={prefixOptions}
                        value={prefixOptions.find((c) => c.value === value)}
                        onChange={(val) => onChange(val.value)}
                        onBlur={(val) => onBlur(val)}
                        inputRef={ref}
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.prefix && errors.prefix.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan1}>
                <FormControl isInvalid={errors.firstName}>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Controller
                    id="firstName"
                    name="firstName"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "First Name is a required field",
                      maxLength: {
                        value: 50,
                        message: "Max length is 50 characters",
                      },
                      pattern: {
                        value: /^[a-z ,.'-]+$/i,
                        message: "Names must begin with a letter",
                      },
                    }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="Please Enter First Name"
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.firstName && errors.firstName.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan1}>
                <FormControl isInvalid={errors.lastName}>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Controller
                    id="lastName"
                    name="lastName"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Last Name is a required field",
                      maxLength: {
                        value: 50,
                        message: "Max length is 50 characters",
                      },
                      pattern: {
                        value: /^[a-z ,.'-]+$/i,
                        message: "Names must begin with a letter",
                      },
                    }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder="Please Enter Last Name"
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.lastName && errors.lastName.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>

              <GridItem colSpan={6}>
                <FormControl isInvalid={errors.telephoneNumber}>
                  <FormLabel htmlFor="telephoneNumber">Telephone Number</FormLabel>
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
                      }
                    }}
                    control={control}
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
                    {errors.telephoneNumber && errors.telephoneNumber.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={6}>
                <FormControl isInvalid={errors.addressLine1}>
                  <FormLabel htmlFor="addressLine1">Address Line 1 (Street)</FormLabel>
                  <Controller
                    id="addressLine1"
                    name="addressLine1"
                    rules={{
                      required: "Address Line 1 (Street) is a required field",
                    }}
                    control={control}
                    defaultValue=""
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Input
                        placeholder="Please Enter Address Line 1 (Street)..."
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.addressLine1 && errors.addressLine1.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={6}>
                <FormControl isInvalid={errors.addressLine2}>
                  <FormLabel htmlFor="addressLine2">Address Line 2 (Road)</FormLabel>
                  <Controller
                    id="addressLine2"
                    name="addressLine2"
                    rules={{
                      required: "Address Line 2 (Road) is a required field",
                    }}
                    control={control}
                    defaultValue=""
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Input
                        placeholder="Please Enter Address Line 2 (Road)..."
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.addressLine2 && errors.addressLine2.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan2}>
                <FormControl isInvalid={errors.city}>
                  <FormLabel htmlFor="city">City</FormLabel>
                  <Controller
                    id="city"
                    name="city"
                    rules={{ required: "City is a required field" }}
                    control={control}
                    defaultValue=""
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Input
                        placeholder="Please Enter City..."
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.city && errors.city.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan2}>
                <FormControl isInvalid={errors.postcodeOrZip}>
                  <FormLabel htmlFor="postcodeOrZip">Postcode / Zip</FormLabel>
                  <Controller
                    id="postcodeOrZip"
                    name="postcodeOrZip"
                    rules={{ required: "Postcode / Zip is a required field" }}
                    control={control}
                    defaultValue=""
                    render={({ field: { value, onChange, onBlur } }) => (
                      <Input
                        placeholder="Please Enter Postcode / Zip..."
                        value={value}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.postcodeOrZip && errors.postcodeOrZip.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan2}>
                <FormControl isInvalid={errors.vehicleType}>
                  <FormLabel htmlFor="vehicleType">Vehicle Type</FormLabel>
                  <Controller
                    id="vehicleType"
                    name="vehicleType"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Vehicle Type is a required field" }}
                    render={({ field: { name, value, onChange, onBlur, ref } }) => (
                      <Select
                        name={name}
                        placeholder="Select..."
                        options={vehicleTypeOptions}
                        value={vehicleTypeOptions.find(
                          (c) => c.value === value
                        )}
                        onChange={(val) => onChange(val.value)}
                        onBlur={(val) => onBlur(val)}
                        inputRef={ref}
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.vehicleType && errors.vehicleType.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan2}>
                <FormControl isInvalid={errors.engineSize}>
                  <FormLabel htmlFor="engineSize">Engine Size</FormLabel>
                  <Controller
                    id="engineSize"
                    name="engineSize"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Engine Size is a required field" }}
                    render={({ field: { name, value, onChange, onBlur, ref } }) => (
                      <Select
                        name={name}
                        placeholder="Select..."
                        options={engineSizeOptions}
                        value={engineSizeOptions.find((c) => c.value === value)}
                        onChange={(val) => onChange(val.value)}
                        onBlur={(val) => onBlur(val)}
                        inputRef={ref}
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.engineSize && errors.engineSize.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={6}>
                <FormControl isInvalid={errors.additionalDrivers}>
                  <FormLabel htmlFor="additionalDrivers">Additional Drivers</FormLabel>
                  <Controller
                    id="additionalDrivers"
                    name="additionalDrivers"
                    rules={{ required: "This is a required field" }}
                    control={control}
                    defaultValue=""
                    render={({ field: { onChange, onBlur } }) => (
                      <NumberInput
                        defaultValue={1}
                        min={1}
                        max={4}
                        onChange={onChange}
                        onBlur={onBlur}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    )}
                  />
                  <FormErrorMessage>
                    {errors.additionalDrivers && errors.additionalDrivers.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan2}>
                <FormControl isInvalid={errors.commercialPurposes}>
                  <FormLabel htmlFor="commercialPurposes">
                    Will the vehicle be used for commercial purposes?
                  </FormLabel>
                  <label htmlFor="commercialPurposes-yes">
                    <input
                      {...register("commercialPurposes", {
                        required: "This is a required field",
                      })}
                      type="radio"
                      value="Yes"
                      id="commercialPurposes-yes"
                    />
                    Yes
                  </label>
                  <label htmlFor="commercialPurposes-no">
                    <input
                      {...register("commercialPurposes", {
                        required: "This is a required field",
                      })}
                      type="radio"
                      value="No"
                      id="commercialPurposes-no"
                    />
                    No
                  </label>
                  <FormErrorMessage>
                    {errors.commercialPurposes && errors.commercialPurposes.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan2}>
                <FormControl isInvalid={errors.outOfRegisteredState}>
                  <FormLabel htmlFor="outOfRegisteredState">
                    Will the vehicle be used outside the registered state?
                  </FormLabel>
                  <label htmlFor="outOfRegisteredState-yes">
                    <input
                      {...register("outOfRegisteredState", {
                        required: "This is a required field",
                      })}
                      type="radio"
                      value="Yes"
                      id="outOfRegisteredState-yes"
                    />
                    Yes
                  </label>
                  <label htmlFor="outOfRegisteredState-no">
                    <input
                      {...register("outOfRegisteredState", {
                        required: "This is a required field",
                      })}
                      type="radio"
                      value="No"
                      id="outOfRegisteredState-no"
                    />
                    No
                  </label>
                  <FormErrorMessage>
                    {errors.outOfRegisteredState && errors.outOfRegisteredState.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan2}>
                <FormControl isInvalid={errors.currentValue}>
                  <FormLabel htmlFor="currentValue">
                    What is the current value of the vehicle (range 0 - 50000)?
                  </FormLabel>
                  <Controller
                    id="currentValue"
                    name="currentValue"
                    control={control}
                    defaultValue={""}
                    rules={{ required: "This is a required field" }}
                    render={({ field: { name, value, onChange, onBlur, ref } }) => (
                      <Select
                        name={name}
                        placeholder="Select..."
                        options={currentValueOptions}
                        value={currentValueOptions.find(
                          (c) => c.value === value
                        )}
                        onChange={(val) => onChange(val.value)}
                        onBlur={(val) => onBlur(val)}
                        inputRef={ref}
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.currentValue && errors.currentValue.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={colSpan2}>
                <FormControl isInvalid={errors.registrationDate}>
                  <FormLabel htmlFor="registrationDate">Date vehicle was first registered?</FormLabel>
                  <Controller
                    id="registrationDate"
                    name="registrationDate"
                    control={control}
                    rules={{ required: "This is a required field" }}
                    defaultValue={new Date()}
                    render={({ field: {onChange, onBlur, value }}) => (
                      <DatePicker
                        selected={value}
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholderText="Select date"
                      />
                    )}
                  />
                  <FormErrorMessage>
                    {errors.registrationDate && errors.registrationDate.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={6}>
                <Button type="submit" size="lg" w="50%">
                  Submit
                </Button>
              </GridItem>
            </SimpleGrid>
          </form>
        </VStack>
      </Flex>
    </Container>
  );
}
