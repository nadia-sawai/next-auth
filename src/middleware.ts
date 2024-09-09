// 特に認証有無で処理しない場合は以下
// export { auth as middleware } from "@/lib/auth"

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './lib/auth';


export async function middleware(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  return NextResponse.next();
}

// matcherでmiddlewareを適用するルートを指定
export const config = {
  matcher: ['/mypage', '/sample'],
};