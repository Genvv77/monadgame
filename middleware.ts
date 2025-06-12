// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add Content-Security-Policy
  response.headers.set(
    'Content-Security-Policy',
    'frame-ancestors https://*.farcaster.xyz https://farcaster.xyz;'
  );

  // Prevent caching
  response.headers.set('Cache-Control', 'no-store');

  return response;
}
