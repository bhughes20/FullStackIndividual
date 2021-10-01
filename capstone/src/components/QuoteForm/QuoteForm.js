import React from "react";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { Button, Form, Select } from "semantic-ui-react";

export default function QuoteForm() {
  const { handleSubmit, control, setValue, formState: { errors } } = useForm({
    mode: "onBlur",
  });

  const prefixOptions = [
    { key: "Dr", value: "Dr", text: "Dr" },
    { key: "Miss", value: "Miss", text: "Miss" },
    { key: "Mr", value: "Mr", text: "Mr" },
    { key: "Mrs", value: "Mrs", text: "Mrs" },
    { key: "Ms", value: "Ms", text: "Ms" }
  ];

  const handleRegistration = (data) => console.log(data);

  const handleError = (errors) => {
    console.log(errors);
  };

  return (
    <Form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <Form.Field>
          <label>Prefix</label>
          <Controller
            name="prefix"
            control={control}
            defaultValue={null}
            rules={{ required: "Prefix is a required field" }}
            render={({ field : { name, value, onChange}}) => (
              <Select
                name = {name}
                placeholder="Select..."
                options={prefixOptions}
                onChange={(event, item) => {
                  onChange(item.options.map);
                }}
              />
            )}
          />
        <ErrorMessage errors={errors} name='prefix' />
        </Form.Field>
      <Form.Field>
        <label>First Name</label>
        <Controller
          name="firstName"
          control = {control}
          defaultValue = ""
          rules={{ required: "First Name is a required field" }}
          render={({ field : { value, onChange} }) => 
            <input 
              value={value}
              onChange={onChange}
            />
          }
        />
        <small className="text-danger">
          <ErrorMessage errors={errors} name='firstName' />
        </small>
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <Controller
          name="lastName"
          control = {control}
          defaultValue = ""
          rules={
            { required: "Last Name is a required field" }
          }
          render={({ field : { value, onChange} }) => 
            <input 
              value={value}
              onChange={onChange}
            />
          }
        />
        <small className="text-danger">
          {errors.lastName && errors.lastName.message}
        </small>
      </Form.Field>

      <Button color="green">Submit</Button>
    </Form>
  );
}
