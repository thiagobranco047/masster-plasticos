import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Interceptar requisições de favicon.ico e retornar 404
  if (request.nextUrl.pathname === '/favicon.ico') {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/favicon.ico',
  ],
};
