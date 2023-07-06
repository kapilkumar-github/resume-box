"use client"
import React from 'react'
import { Input, Button, Stack, Box, Typography } from '@mui/material';
import { SignInWrapper } from './signin.styled';

const SignIn = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement> | any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const requestPayload = {
      email: email.value,
      password: password.value
    }
    // Make API Call
  }

  return (
    <SignInWrapper >
      <form onSubmit={handleSubmit}>
        <Typography marginBottom={2} textAlign={'center'} variant='h6'>Sign In</Typography>
        <Stack direction={'column'} rowGap={4}>
          <Input placeholder="Enter Email" type='email' name="email" />
          <Input placeholder="Enter password" type='password' name="password" />
          <Button type="submit" variant='contained' size='small'>Login</Button>
        </Stack>
      </form>
    </SignInWrapper>
  )
}

export default SignIn
