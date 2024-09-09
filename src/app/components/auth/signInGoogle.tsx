'use client';

import { signIn, useSession } from "next-auth/react";
import Button from "../button/button";

const SignInGoogle = () => {
  const { data: session, status } = useSession();
  console.log(status)
  console.log(session)
  return (
    <>
      {!session && <Button type={"primary"} onClick={() => signIn('google')}>Sign in with Google</Button>}
    </>
  );
};

export default SignInGoogle;