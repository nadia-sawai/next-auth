'use client';
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

export default function Page() {
  const { data: session, status } = useSession()
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }

  },[status, router])


  return (<p>Signed in as {session?.user?.email}</p>)
}