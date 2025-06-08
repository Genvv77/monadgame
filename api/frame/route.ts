// app/api/frame/route.ts
export async function GET() {
  return Response.json({
    version: "next",
    imageUrl: "https://orbique.vercel.app/og-image.png",
    button: {
      title: "🎯 Play Orbique",
      action: {
        type: "launch_frame",
        url: "https://orbique.vercel.app/",
        name: "Orbique",
        splashImageUrl: "https://orbique.vercel.app/og-image.png",
        splashBackgroundColor: "#000000"
      }
    }
  });
}

export async function POST() {
  // Handle button clicks
  return Response.json({
    type: "launch_frame",
    url: "https://orbique.vercel.app/"
  });
}














