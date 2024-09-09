import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { NextResponse } from "next/server";

declare module 'next-auth' {
  interface Session {
    provider?: string;
  }
}
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
    // .envにAUTH_GOOGLE_xx で設定している場合は以下は不要
    // clientId: process.env.GOOGLE_ID,
    // clientSecret: process.env.GOOGLE_SECRET
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // cf. https://next-auth.js.org/configuration/callbacks#jwt-callback
    async session({ session, user, token }) {
      // tokenからプロバイダ情報をセッションに追加
      session.provider = token.provider as string | undefined;
      return session;
    },
    async jwt({ token, account }) {
      // accountが存在する場合どのプロバイダでログインしたか保存
      if (account) {
        token.provider = account.provider;
      }
      return token;
    },
    // authorized({ request, auth }) {
    //   // ログイン済みのユーザーしか見せたくないページなど
    //   // パス取得
    //   const { pathname } = request.nextUrl;
      
    //   // ログインしていない場合はリダイレクト
    //   if (pathname === "/mypage") {
    //     if (!auth) {
    //       return NextResponse.redirect(new URL('/', request.url));
    //     }
    //     return true;

    //     // authのオブジェクトが空:false, 空ではない：trueを返す
    //     // return !!auth;
    //   }
    //   return true;
    // },
  }
})
