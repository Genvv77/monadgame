export async function GET() {
  return new Response(JSON.stringify({
    version: 'vNext',
    image: 'https://orbique.vercel.app/og-image.png',
    buttons: [
      { title: 'Play Orbique', action: { type: 'launch_frame', url: 'https://orbique.vercel.app/' } }
    ]
  }), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'max-age=3600',
    },
    status: 200
  });
}
















