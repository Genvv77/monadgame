// pages/api/frame.ts
export async function GET(): Promise<Response> {
  const frameData = {
    version: "next",
    imageUrl: "https://orbique.vercel.app/og-image.png",
    button: {
      title: "Play Orbique",
      action: {
        type: "launch_frame",
        url: "https://orbique.vercel.app/",
        name: "Orbique",
        splashImageUrl: "https://orbique.vercel.app/og-image.png",
        splashBackgroundColor: "#000000",
      },
    },
  };

  return new Response(JSON.stringify(frameData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}














