// app/api/frame/route.ts
import { NextResponse } from 'next/server';

const PAYLOAD = {
  version: 'vNext',
  imageUrl: 'https://orbique.vercel.app/og-image.png',
  button: {
    title: 'Launch Orbique',
    action: {
      type: 'link',
      target: 'https://orbique.vercel.app',
    },
  },
};

export async function GET() {
  // Pour que le validateur puisse vérifier en GET
  return NextResponse.json(PAYLOAD, {
    headers: { 'Cache-Control': 'max-age=0' },
  });
}

export async function POST() {
  // Pour Farcaster lorsqu’on clique sur le bouton du mini-app
  return NextResponse.json(PAYLOAD, {
    headers: { 'Cache-Control': 'max-age=0' },
  });
}


















