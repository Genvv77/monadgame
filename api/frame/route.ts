// app/api/frame/route.ts
import { NextResponse } from 'next/server';

const EMBED = {
  version: 'vNext',
  imageUrl: 'https://orbique.vercel.app/og-image.png',
  button: {
    title: 'Launch Orbique',
    action: { type: 'link', target: 'https://orbique.vercel.app' },
  },
};

export async function GET() {
  return NextResponse.json(EMBED, { headers: { 'Cache-Control': 'max-age=0' } });
}

export async function POST() {
  return NextResponse.json(EMBED, { headers: { 'Cache-Control': 'max-age=0' } });
}



















