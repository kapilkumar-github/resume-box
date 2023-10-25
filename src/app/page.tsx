"use client";
import React from 'react'
import { useSession, signIn } from "next-auth/react";
import { redirect } from 'next/navigation'
import { PAGE_PATH, getAbsoluteURL } from '@/common';
export default function Home() {
  const { data: session, status } = useSession()

  React.useEffect(() => {
    if (status !== 'loading') {
      if (!session?.user) {
        signIn()
      }
      else {
        redirect(getAbsoluteURL(PAGE_PATH.DASHBOARD))
      }
    }
  }, [status])

  return <>Loading...</>
}
