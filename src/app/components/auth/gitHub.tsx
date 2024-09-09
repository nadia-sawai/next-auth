'use client';

import { signIn, useSession } from "next-auth/react";
import Button from "../button/button";

const SignInGithub = () => {
  const { data: session, status } = useSession();
  return (
    <>
      {!session && (<Button type={"primary"} onClick={() => signIn('github')}>Sign in with gitHub</Button>)}
    </>
  );
};

export default SignInGithub;