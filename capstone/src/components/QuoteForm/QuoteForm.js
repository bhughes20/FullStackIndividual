import React from "react";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Button, Form } from "semantic-ui-react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

export default function QuoteForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

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

  const handleRegistration = (data) => console.log(data);

  const handleError = (errors) => {
    console.log(errors);
  };

  return (
    <Form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <Form.Group widths="equal">
        <Form.Field>
          <label>Prefix</label>
          <Controller
            name="prefix"
            control={control}
            defaultValue={""}
            rules={{ required: "Prefix is a required field" }}
            render={({ field: { name, value, onChange, ref } }) => (
              <Select
                name={name}
                placeholder="Select..."
                options={prefixOptions}
                value={prefixOptions.find((c) => c.value === value)}
                onChange={(val) => onChange(val.value)}
                inputRef={ref}
              />
            )}
          />
          <small className="text-danger">
            <ErrorMessage errors={errors} name="prefix" />
          </small>
        </Form.Field>

        <Form.Field>
          <label>First Name</label>
          <Controller
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
            render={({ field: { value, onChange } }) => (
              <input
                value={value}
                onChange={onChange}
                placeholder="Please Enter First Name"
              />
            )}
          />
          <small className="text-danger">
            <ErrorMessage errors={errors} name="firstName" />
          </small>
        </Form.Field>

        <Form.Field>
          <label>Last Name</label>
          <Controller
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
            render={({ field: { value, onChange } }) => (
              <input
                value={value}
                onChange={onChange}
                placeholder="Please Enter Last Name"
              />
            )}
          />
          <small className="text-danger">
            <ErrorMessage errors={errors} name="lastName" />
          </small>
        </Form.Field>
      </Form.Group>

      <Form.Field>
        <label>Telephone Number</label>
        <Controller
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
          }}
          control={control}
          defaultValue=""
          render={({ field: { value, onChange } }) => (
            <input
              type="tel"
              placeholder="Please Enter Tel..."
              value={value}
              onChange={onChange}
            />
          )}
        />
        <small className="text-danger">
          <ErrorMessage errors={errors} name="telephoneNumber" />
        </small>
      </Form.Field>

      <Form.Field>
        <label>Address Line 1 (Street)</label>
        <Controller
          name="addressLine1"
          rules={{ required: "Address Line 1 (Street) is a required field" }}
          control={control}
          defaultValue=""
          render={({ field: { value, onChange } }) => (
            <input
              placeholder="Please Enter Address Line 1 (Street)..."
              value={value}
              onChange={onChange}
            />
          )}
        />
        <small className="text-danger">
          <ErrorMessage errors={errors} name="addressLine1" />
        </small>
      </Form.Field>

      <Form.Field>
        <label>Address Line 2 (Road)</label>
        <Controller
          name="addressLine2"
          rules={{ required: "Address Line 2 (Road) is a required field" }}
          control={control}
          defaultValue=""
          render={({ field: { value, onChange } }) => (
            <input
              placeholder="Please Enter Address Line 2 (Road)..."
              value={value}
              onChange={onChange}
            />
          )}
        />
        <small className="text-danger">
          <ErrorMessage errors={errors} name="addressLine2" />
        </small>
      </Form.Field>

      <Form.Group widths="equal">
        <Form.Field>
          <label>City</label>
          <Controller
            name="city"
            rules={{ required: "City is a required field" }}
            control={control}
            defaultValue=""
            render={({ field: { value, onChange } }) => (
              <input
                placeholder="Please Enter City..."
                value={value}
                onChange={onChange}
              />
            )}
          />
          <small className="text-danger">
            <ErrorMessage errors={errors} name="city" />
          </small>
        </Form.Field>

        <Form.Field>
          <label>Postcode / Zip code</label>
          <Controller
            name="postcodeOrZip"
            rules={{ required: "Postcode / Zip is a required field" }}
            control={control}
            defaultValue=""
            render={({ field: { value, onChange } }) => (
              <input
                placeholder="Please Enter Postcode / Zip..."
                value={value}
                onChange={onChange}
              />
            )}
          />
          <small className="text-danger">
            <ErrorMessage errors={errors} name="postcodeOrZip" />
          </small>
        </Form.Field>
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Field>
          <label>Vehicle Type</label>
          <Controller
            name="vehicleType"
            control={control}
            defaultValue=""
            rules={{ required: "Vehicle Type is a required field" }}
            render={({ field: { name, value, onChange, ref } }) => (
              <Select
                name={name}
                placeholder="Select..."
                options={vehicleTypeOptions}
                value={vehicleTypeOptions.find((c) => c.value === value)}
                onChange={(val) => onChange(val.value)}
                inputRef={ref}
              />
            )}
          />
          <small className="text-danger">
            <ErrorMessage errors={errors} name="vehicleType" />
          </small>
        </Form.Field>

        <Form.Field>
          <label>Engine Size</label>
          <Controller
            name="engineSize"
            control={control}
            defaultValue=""
            rules={{ required: "Engine Size is a required field" }}
            render={({ field: { name, value, onChange, ref } }) => (
              <Select
                name={name}
                placeholder="Select..."
                options={engineSizeOptions}
                value={engineSizeOptions.find((c) => c.value === value)}
                onChange={(val) => onChange(val.value)}
                inputRef={ref}
              />
            )}
          />
          <small className="text-danger">
            <ErrorMessage errors={errors} name="engineSize" />
          </small>
        </Form.Field>
      </Form.Group>

      <FormControl>
        <FormLabel>Additional Drivers</FormLabel>
        <Controller
          name="additionalDrivers"
          rules={{ required: "This is a required field" }}
          control={control}
          defaultValue=""
          render={({ field: { value, onChange } }) => (
            <NumberInput
              step={1}
              defaultValue={1}
              min={1}
              max={4}
              value={value}
              onChange={onChange}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          )}
        />
        <small className="text-danger">
          <ErrorMessage errors={errors} name="additionalDrivers" />
        </small>
      </FormControl>

      <FormControl>
        <FormLabel>Will the vehicle be used for commercial purposes?</FormLabel>
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
        <small className="text-danger">
          <ErrorMessage errors={errors} name="commercialPurposes" />
        </small>
      </FormControl>

      <FormControl>
        <FormLabel>
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
        <small className="text-danger">
          <ErrorMessage errors={errors} name="outOfRegisteredState" />
        </small>
      </FormControl>

      <Form.Group width="equal">
        <Form.Field>
          <label>
            What is the current value of the vehicle (range 0 - 50000)?
          </label>
          <Controller
            name="currentValue"
            control={control}
            defaultValue={""}
            rules={{ required: "This is a required field" }}
            render={({ field: { name, value, onChange, ref } }) => (
              <Select
                name={name}
                placeholder="Select..."
                options={currentValueOptions}
                value={currentValueOptions.find((c) => c.value === value)}
                onChange={(val) => onChange(val.value)}
                inputRef={ref}
              />
            )}
          />
        </Form.Field>
        <Form.Field>
          <label>Date vehicle was first registered?</label>

          <Controller
            name="registrationDate"
            control={control}
            rules={{ required: "This is a required field" }}
            defaultValue={new Date()}
            render={({ onChange, value }) => (
              <DatePicker 
              selected={value} 
              onChange={onChange} 
              placeholderText='Select date'/>
            )}
          />
        </Form.Field>
      </Form.Group>

      <Button color="green">Submit</Button>
    </Form>
  );
}
