"use client";

import StoreProvider from "@/redux/StoreProvider";
import { SessionProvider } from "next-auth/react";

type Props = {
    children?: React.ReactNode;
};

const NextAuthProvider = ({ children }: Props) => {
    return <SessionProvider>{children}</SessionProvider>
};

export const Providers = ({ children }: Props) => {
    return <NextAuthProvider>
        <StoreProvider>
            {children}
        </StoreProvider>
    </NextAuthProvider>
};
