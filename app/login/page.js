'use client';
import auth0 from 'auth0-js';
import { useState } from 'react';
import { redirect } from 'next/navigation';

import {
  Button,
  CheckBox,
  Form,
  FormField,
  RadioButtonGroup,
  Select,
  TextInput,
  Box
} from "grommet";

const auth0Client = new auth0.WebAuth({
  domain: 'dev-hemanthchowdary.us.auth0.com',
  clientID: 'V2Vw3iF1Qr4mdm4PdYGYLvMTCOEy2J6W',
  audience: 'Yd2oQ9kSpUgZvc8kYwjlob5ZHAdI3okAsUmwjcrr7FLayiTp-tmbQu8VykxLKGU0'
});


const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      auth0Client.login({
        username: email,
        password: password
      });

      // Redirect to the home page after the user has logged in.
      redirect('/');
  } catch (error) {
      console.error(error);
  }};

  
  return (
    <Form className='login-form' onSubmit={({ value }) => {}}>
      <FormField name="name" htmlFor="textinput-id" label="EMAIL">
        <TextInput id="textinput-id" name="name" />
      </FormField>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Submit" />
        <Button type="reset" label="Reset" />
      </Box>
    </Form>
  );
};
export default page;
