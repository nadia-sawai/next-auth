'use client';
import Link from 'next/link'
import Styles from './header.module.scss'
import { signIn, signOut } from "next-auth/react"

import { useSession } from "next-auth/react"
import Button from '../button/button';
import { useCallback, useState } from 'react';
import Login from '../login/login';
import Logout from '../logout/logout';
import Image from 'next/image';

const Header = () => {
  const { data: session, status } = useSession()
  console.log(session)
  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  const provider = session?.provider === "google" ? "Google" : "Github"

  return (
    <header className={Styles.header}>
      <Link href={"/"}>logo</Link>
      <div className={Styles.buttons}>
        
        {status === "authenticated" ? 
          <>
            <Link href={"/mypage"} >マイページ</Link>
            <ul className={Styles.profile}>
              <li>{provider} でログイン中</li>
              <li>{session.user?.name}</li>
              <li>{session.user?.email}</li>
              {/* {session.user?.image && <li><Image src={session.user?.image} width={60} height={60} alt="" /></li>} */}
            </ul>
            <Logout />
          </>
          : 
          <Login text="Sign In" />
        }
      </div>
    </header>
  )
}

export default Header