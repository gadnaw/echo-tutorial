"use client";

import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { AuthLayout } from "../layouts/auth-layout";
import { SignUpView } from "../views/sign-up-view";

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthLoading>
        <AuthLayout>
          <p>Loading...</p>
        </AuthLayout>
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
      <Unauthenticated>
        <AuthLayout>
          <SignUpView />
        </AuthLayout>
      </Unauthenticated>
    </>
  );
};
