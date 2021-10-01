import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { Button, Radio, Form, Select } from "semantic-ui-react";

export default function Create() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const [additionalDrivers, setAdditionalDrivers] = useState(null);
  const [commercialPurposes, setCommercialPurposes] = useState("");
  const [outOfRegisteredState, setOutOfRegisteredState] = useState("");

  return (


    
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group widths="equal">
        <Form.Field>
          <label>Prefix</label>
          <Controller
            name="prefix"
            rules={{ required: "Prefix is a required field" }}
            render={({ field : { onBlur, ref, ...field }}) => (
              <Select
                error={errors.prefix}
                onBlur={onBlur}
                inputRef={ref}
                placeholder="Select..."
                {...field}
                options={[
                  { value: "Dr", text: "Dr" },
                  { value: "Miss", text: "Miss" },
                  { value: "Mr", text: "Mr" },
                  { value: "Mrs", text: "Mrs" },
                  { value: "Ms", text: "Ms" }
                ]}
              />
            )}
            control={control}
            defaultValue=""
          />
        <ErrorMessage errors={errors} name='prefix' />
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <Controller
            name="firstName"
            rules={
              { required: "First Name is a required field" },
              { maxLength: {
                value: 50,
                message: "Max length is 50 characters"
                }
              },
              { pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: "Names must begin with a letter"
                }
              }
            }
            control={control}
            defaultValue=""
            render={({ field : { value, onBlur, onChange, ref, ...field}}) => (
              <input 
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                inputRef={ref} 
                error={errors.firstName} 
                placeholder="First Name"
                {...field}
              />
            )}
          />
        <ErrorMessage errors={errors} name='firstName' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <Controller
            name="lastName"
            rules={
              { required: "Last Name is a required field" },
              { maxLength: {
                value: 50,
                message: "Max length is 50 characters"
                }
              },
              { pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: "Names must begin with a letter"
                }
              }
            }
            control={control}
            defaultValue=""
            render={({ field : { ref, ...field }}) => 
            <input
            inputRef={ref} 
            error={errors.lastName}  
            placeholder="Last Name" 
            {...field} 
            />}
          />
          <ErrorMessage errors={errors} name='lastName' />
        </Form.Field>
      </Form.Group>
      <Form.Field>
        <label>Telephone Number</label>
        <Controller
          name="telephoneNumber"
          rules={{ required: true }, { minLength: 11 }, { maxLength: 11 }}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input type="tel" placeholder="Tel..." {...field} />
          )}
        />
      </Form.Field>
      <Form.Field>
        <label>Address Line 1 (Street)</label>
        <Controller
          name="addressLine1"
          rules={{ required: true }}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input placeholder="Address Line 1 (Street)" {...field} />
          )}
        />
      </Form.Field>
      <Form.Field>
        <label>Address Line 2 (Road)</label>
        <Controller
          name="addressLine2"
          rules={{ required: true }}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input placeholder="Address Line 2 (Road)" {...field} />
          )}
        />
      </Form.Field>
      <Form.Group widths="equal">
        <Form.Field>
          <label>City</label>
          <Controller
            name="city"
            rules={{ required: true }}
            control={control}
            defaultValue=""
            render={({ field }) => <input placeholder="City" {...field} />}
          />
        </Form.Field>
        <Form.Field>
          <label>Postcode / Zip code</label>
          <Controller
            name="postcodeOrZipCode"
            rules={{ required: true }}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input placeholder="Postcode or Zip Code" {...field} />
            )}
          />
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <label>Vehicle Type</label>
          <Controller
            name="vehicleType"
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                placeholder="Select..."
                {...field}
                options={[
                  { value: "Cabriolet", text: "Cabriolet" },
                  { value: "Coupe", text: "Coupe" },
                  { value: "Estate", text: "Estate" },
                  { value: "Hatchback", text: "Hatchback" },
                  { value: "Other", text: "Other" },
                ]}
              />
            )}
            control={control}
            defaultValue=""
          />
        </Form.Field>
        <Form.Field>
          <label>Engine Size</label>
          <Controller
            name="engineSize"
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                placeholder="Select..."
                {...field}
                options={[
                  { value: "1000", text: "1000" },
                  { value: "1600", text: "1600" },
                  { value: "2000", text: "2000" },
                  { value: "2500", text: "2500" },
                  { value: "3000", text: "3000" },
                  { value: "Other", text: "Other" },
                ]}
              />
            )}
            control={control}
            defaultValue=""
          />
        </Form.Field>
      </Form.Group>
      <Form.Group inline>
        <label>Additional Drivers</label>
        <Controller
          name="additionalDrivers"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Form.Radio
              label="1"
              value="1"
              checked={additionalDrivers === 1}
              onClick={() => setAdditionalDrivers(1)}
              {...field}
            />
          )}
        />
        <Controller
          name="additionalDrivers"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Form.Radio
              label="2"
              value="2"
              checked={additionalDrivers === 2}
              onClick={() => setAdditionalDrivers(2)}
              {...field}
            />
          )}
        />
        <Controller
          name="additionalDrivers"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Form.Radio
              label="3"
              value="3"
              checked={additionalDrivers === 3}
              onClick={() => setAdditionalDrivers(3)}
              {...field}
            />
          )}
        />
        <Controller
          name="additionalDrivers"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Form.Radio
              label="4"
              value="4"
              checked={additionalDrivers === 4}
              onClick={() => setAdditionalDrivers(4)}
              {...field}
            />
          )}
        />
      </Form.Group>
      <Form.Group inline>
        <label>Will the vehicle be used for commercial purposes?</label>
        <Controller
          name="commercialPurposes"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Form.Radio
              label="Yes"
              value="Yes"
              checked={commercialPurposes === "Yes"}
              onClick={() => setCommercialPurposes("Yes")}
              {...field}
            />
          )}
        />
        <Controller
          name="commercialPurposes"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Form.Radio
              label="No"
              value="No"
              checked={commercialPurposes === "No"}
              onClick={() => setCommercialPurposes("No")}
              {...field}
            />
          )}
        />
      </Form.Group>
      <Form.Group inline>
        <label>Will the vehicle be used outside the registered state?</label>
        <Controller
          name="outOfRegisteredState"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Form.Radio
              label="Yes"
              value="Yes"
              checked={outOfRegisteredState === "Yes"}
              onClick={() => setOutOfRegisteredState("Yes")}
              {...field}
            />
          )}
        />
        <Controller
          name="outOfRegisteredState"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Form.Radio
              label="No"
              value="No"
              checked={outOfRegisteredState === "No"}
              onClick={() => setOutOfRegisteredState("No")}
              {...field}
            />
          )}
        />
      </Form.Group>
      <Form.Group width="equal">
        <Form.Field>
          <label>
            What is the current value of the vehicle (range 0 - 50000)?
          </label>
          <Controller
            name="currentValue"
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                placeholder="Select..."
                {...field}
                options={[
                  { value: "0 to 5000", text: "0 to 5000" },
                  { value: "5001 to 10000", text: "5001 to 10000" },
                  { value: "10001 to 20000", text: "10001 to 20000" },
                  { value: "20001 to 30000", text: "20001 to 30000" },
                  { value: "30001 to 40000", text: "30001 to 40000" },
                  { value: "40001 to 50000", text: "40001 to 50000" },
                ]}
              />
            )}
            control={control}
            defaultValue=""
          />
        </Form.Field>
        <Form.Field>
          <label>Date vehicle was first registered?</label>
          <Controller
            name="registrationDate"
            rules={{ required: true }}
            control={control}
            defaultValue=""
            render={({ field }) => <input type="datetime-local" {...field} />}
          />
        </Form.Field>
      </Form.Group>
      <Button type="submit">Get Quote</Button>
    </Form>
    
  );
}
