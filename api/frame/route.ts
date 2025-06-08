// app/api/frame/route.ts
export async function GET() {
  return new Response(
    JSON.stringify({
      version: "vNext",
      image: "https://orbique.vercel.app/og-image.png",
      post_url: "https://orbique.vercel.app/api/frame",
      buttons: [
        {
          label: "Play Orbique",
          action: "launch_frame",
        },
      ],
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}















