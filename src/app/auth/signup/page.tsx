"use client"
import React from 'react'
import { Input, Button, Stack, Box, Typography } from '@mui/material';
import { SignUpWrapper } from './signup.styled';
import axios from 'axios';
import { useRouter } from 'next/navigation';
const SignUp = () => {
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const requestPayload = {
      email: email.value,
      password: password.value
    }
    // Make API Call
    axios.post('/api/user', requestPayload)
      .then(function (response) {
        // Redirect to signin page
        router.push('/auth/signIn');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <SignUpWrapper >
      <form onSubmit={handleSubmit}>
        <Typography marginBottom={2} textAlign={'center'} variant='h6'>Sign Up</Typography>
        <Stack direction={'column'} rowGap={4}>
          <Input placeholder="Enter Email" type='email' name="email" />
          <Input placeholder="Enter password" type='password' name="password" />
          <Button type="submit" variant='contained' size='small'>Login</Button>
        </Stack>
      </form>
    </SignUpWrapper>
  )
}

export default SignUp
