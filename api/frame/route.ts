// app/api/frame/route.ts
import { NextResponse } from "next/server";
import { createFrames } from "frames.js";

const frames = createFrames();

export async function GET() {
  const res = await frames.create({
    image: "https://orbique.vercel.app/og-image.png",
    imageAspectRatio: "1.91:1",
    buttons: [
      {
        label: "Play now",
        action: "link",
        target: "https://orbique.vercel.app",
      },
    ],
  });

  return new NextResponse(res, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  });
}







