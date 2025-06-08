export async function GET() {
  const frameHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Orbique - Web3 Riddle Game</title>
  
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
  <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
  <meta property="fc:frame:button:1" content="🎮 Play Orbique" />
  <meta property="fc:frame:button:1:action" content="link" />
  <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Orbique - Web3 Riddle Game" />
  <meta property="og:description" content="Web3 riddle game powered by MONAD — only one can win." />
  <meta property="og:image" content="https://orbique.vercel.app/og-image.png" />
  <meta property="og:url" content="https://orbique.vercel.app" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Orbique - Web3 Riddle Game" />
  <meta name="twitter:description" content="Web3 riddle game powered by MONAD — only one can win." />
  <meta name="twitter:image" content="https://orbique.vercel.app/og-image.png" />
</head>
<body>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <h1 style="color: white; font-size: 3rem; margin-bottom: 1rem;">ORBIQUE</h1>
    <p style="color: white; font-size: 1.2rem; text-align: center; max-width: 600px;">
      Web3 riddle game powered by MONAD — only one can win.
    </p>
    <a href="https://orbique.vercel.app" style="
      background: #8b5cf6; 
      color: white; 
      padding: 12px 24px; 
      border-radius: 8px; 
      text-decoration: none; 
      margin-top: 2rem;
      font-weight: bold;
    ">
      🎮 Play Now
    </a>
  </div>
</body>
</html>`;

  return new Response(frameHTML, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'max-age=300',
    },
  });
}

export async function POST() {
  // Redirect vers l'app principale pour les interactions Frame
  return Response.redirect('https://orbique.vercel.app', 302);
}
















