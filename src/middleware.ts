// 特に認証有無で処理しない場合は以下
// export { auth as middleware } from "@/lib/auth"

import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';


export async function middleware(req: NextRequest) {
  const secret = process.env.NEXTAUTH_SECRET || 'default_secret';
  const token = await getToken({ req, secret: secret, salt: ""});
  const { pathname } = req.nextUrl;

  // 認証が必要なルート指定
  const protectedRoutes = ['/mypage', '/sample'];

  // protectedRoutesのページにアクセスし、かつトークンがない場合はトップへリダイレクト
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !token) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  // 他ページへのアクセスはそのまま
  return NextResponse.next();
}

// matcherでmiddlewareを適用するルートを指定
export const config = {
  matcher: ['/mypage', '/sample'],
};