import { auth } from "@/lib/auth"
import SignInGoogle from "./components/auth/signInGoogle"
import SignInGithub from "./components/auth/gitHub"
 
export default async function Page() {
  const session = await auth()
  
  return (
    <>
      {session ? (
        <p>Welcome {session?.user?.name}!</p>
      ) : (
        <p>ログインしてください</p>
      )}
      <div className="flex">
      <SignInGoogle />
      <SignInGithub />
      </div>
    </>
  )
}