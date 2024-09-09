'use client';
import { useSession } from "next-auth/react"
import Styles from './mypage.module.scss'
import Image from "next/image";

export default function Page() {
  const { data: session } = useSession()
  const provider = session?.provider === "google" ? "Google" : "Github"


  return (
    <div className={Styles.maypage}>
      <dl className={Styles.list}>
        <dt>ログインプロバイダ</dt>
        <dd>{provider}</dd>
        <dt>ユーザー名</dt>
        <dd>{session?.user?.name}</dd>
        <dt>メールアドレス</dt>
        <dd>{session?.user?.email}</dd>
      </dl>
      {session?.user?.image && <div className={Styles.image}><Image src={session.user?.image} width={100} height={100} alt="" /></div>}
    </div>
  )
}