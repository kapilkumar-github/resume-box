"use client";
import React from "react";
import { Input, Button, Stack, Box, Typography } from "@mui/material";
import {
  SignInActionBox,
  SignInContentBox,
  SignInWrapper,
} from "./signin.styled";
import { SignInOptions, signIn } from "next-auth/react";
import { PAGE_PATH, getAbsoluteURL } from "@/common";
import { Branding } from "@/components";
import Link from "next/link";
import { Toast } from "@/common/ui";
import { redirect, useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement> | any
  ) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const requestPayload: SignInOptions = {
      email: email.value,
      password: password.value,
      redirect: false,
    };
    // Make API Call
    signIn("credentials", requestPayload).then((res) => {
      if (!res) return;
      if (res.error) {
        Toast.error(res.error);
      } else if (res.ok) {
        router.push(getAbsoluteURL(PAGE_PATH.DASHBOARD));
        // Bug In NextJS
        // redirect(getAbsoluteURL(PAGE_PATH.DASHBOARD))
      }
    });
  };

  return (
    <SignInWrapper>
      <SignInActionBox>
        <header>
          <Branding />
        </header>
        <form onSubmit={handleSubmit}>
          <Typography marginBottom={2} textAlign={"center"} variant="h6">
            Sign In
          </Typography>
          <Stack direction={"column"} rowGap={4}>
            <Input placeholder="Enter Email" type="email" name="email" />
            <Input
              placeholder="Enter password"
              type="password"
              name="password"
            />
            <Button type="submit" variant="contained" size="small">
              Login
            </Button>
          </Stack>
        </form>
        <Box>
          Don't have an account yet?{" "}
          <Link href={getAbsoluteURL(PAGE_PATH.SIGN_UP, "/auth")}>Sign Up</Link>
        </Box>
      </SignInActionBox>
    </SignInWrapper>
  );
};

export default SignIn;
