"use client";
import { Box, Stack, styled } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const ImageBox = styled(Box)(() => ({}));

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [imageURL, setImageURL] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/stockImages");
      setImageURL(response.data.response.urls.regular);

      return {
        props: {
          response,
        },
      };
    }
    fetchData();
  }, []);
  return (
    <Stack direction={"row"} height={"100%"}>
      <Box width={"25%"}>{children}</Box>
      <ImageBox width={"75%"}>
        <img
          width={"100%"}
          src={imageURL}
          style={{ filter: "brightness(50%)" }}
        />
      </ImageBox>
    </Stack>
  );
}
