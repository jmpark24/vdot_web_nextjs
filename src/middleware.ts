import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // console.log('미들웨어 실행됨:', request.nextUrl.pathname);

  if (request.nextUrl.pathname === '/') {
    const url = new URL('/Calculator', request.url);
    // console.log('리다이렉트 URL:', url.toString());
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
