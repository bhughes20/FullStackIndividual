import React from "react";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Button, Form } from "semantic-ui-react";
import Select from "react-select";

export default function QuoteForm() {
  const {
    handleSubmit,
    control,
    setValue,
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
            maxLength: {
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
              <input placeholder="Please Enter City..." value={value} onChange={onChange} />
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
      <Button color="green">Submit</Button>
    </Form>
  );
}
