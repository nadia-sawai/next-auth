'use client';

import { signIn, useSession } from "next-auth/react";
import Button from "../button/button";

// const SignInGoogle = ({ session }: any) => {
const SignInGoogle = () => {
  const { data: session, status } = useSession();
  return (
    <>
      {!session && <Button type={"primary"} onClick={() => signIn('google', {redirect: false})}>Sign in with Google</Button>}
    </>
  );
};

export default SignInGoogle;