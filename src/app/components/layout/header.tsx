'use client';
import Link from 'next/link'
import Styles from './header.module.scss'

import { useSession } from "next-auth/react"
import Login from '../login/login';
import Logout from '../logout/logout';

const Header = () => {
  const { data: session, status } = useSession()

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