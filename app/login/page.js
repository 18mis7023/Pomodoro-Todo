'use client';
import auth0 from 'auth0-js';
import { useState } from 'react';
import { redirect } from 'next/navigation';


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
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} />
      <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <button type="submit">Log in</button>
    </form>
  );
};
export default page;
