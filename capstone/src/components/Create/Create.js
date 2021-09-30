
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Create() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("Prefix", { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Ms">Ms</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80, pattern: /^[A-Za-z]/i})} />
      <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100, pattern: /^[A-Za-z]/i})} />
      <input type="tel" placeholder="Telephone number" {...register("Telephone number", {required: true, maxLength: 11})} />
      <input type="text" placeholder="Address line 1 (street)" {...register("Address line 1 (street)", {required: true})} />
      <input type="text" placeholder="Address line 2 (road)" {...register("Address line 2 (road)", {required: true})} />
      <input type="text" placeholder="City" {...register("City", {required: true})} />
      <input type="text" placeholder="Postcode/Zip Code" {...register("Postcode/Zip Code", {required: true})} />
      <select {...register("Vehicle type", { required: true })}>
        <option value="Cabriolet">Cabriolet</option>
        <option value="Coupe">Coupe</option>
        <option value="Estate">Estate</option>
        <option value="Hatchback">Hatchback</option>
        <option value="Other">Other</option>
      </select>
      <select {...register("Engine size", { required: true })}>
        <option value="1000">1000</option>
        <option value="1600">1600</option>
        <option value="2000">2000</option>
        <option value="2500">2500</option>
        <option value="3000">3000</option>
        <option value="Other">Other</option>
      </select>
      <select {...register("Additional drivers", { required: true })}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <input {...register("Vehicle use", { required: true })} type="radio" value="Yes" />
      <input {...register("Vehicle use", { required: true })} type="radio" value="No" />

      <input {...register("Out of state", { required: true })} type="radio" value="Yes" />
      <input {...register("Out of state", { required: true })} type="radio" value="No" />

      <input {...register("Current value", { required: true })} type="radio" value="0 to 5000" />
      <input {...register("Current value", { required: true })} type="radio" value="5001 to 10000" />
      <input {...register("Current value", { required: true })} type="radio" value="10001 to 20000" />
      <input {...register("Current value", { required: true })} type="radio" value="20001 to 30000" />
      <input {...register("Current value", { required: true })} type="radio" value="300001+" />
      <input type="datetime-local" placeholder="Registration date" {...register("Registration date", {required: true})} />
      <textarea {...register("Additional details", {})} />

      <input type="submit" />
    </form>
  );
}