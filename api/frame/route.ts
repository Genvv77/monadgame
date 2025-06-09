export async function GET() {
  // Retourner la page avec frame metadata pour l'embed
  const frameHTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Orbique - Web3 Riddle Game</title>
  
  <!-- Frame metadata pour embed -->
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
  <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
  <meta property="fc:frame:button:1" content="🎮 Play Orbique" />
  <meta property="fc:frame:button:1:action" content="post" />
  <meta property="fc:frame:post_url" content="https://orbique.vercel.app/api/frame" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Orbique - Web3 Riddle Game" />
  <meta property="og:description" content="Web3 riddle game powered by MONAD — only one can win." />
  <meta property="og:image" content="https://orbique.vercel.app/og-image.png" />
  <meta property="og:url" content="https://orbique.vercel.app" />
</head>
<body>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center;">
    <h1 style="font-size: 4rem; margin-bottom: 1rem; font-weight: bold;">ORBIQUE</h1>
    <p style="font-size: 1.5rem; margin-bottom: 2rem; max-width: 600px;">
      Web3 riddle game powered by MONAD — only one can win.
    </p>
    <div style="background: rgba(255,255,255,0.1); padding: 2rem; border-radius: 1rem; backdrop-filter: blur(10px);">
      <p style="font-size: 1.2rem; margin-bottom: 1rem;">Ready to test your skills?</p>
      <p style="font-size: 1rem; opacity: 0.8;">Click the button to start playing!</p>
    </div>
  </div>
</body>
</html>`;

  return new Response(frameHTML, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
}

export async function POST(request: Request) {
  try {
    // Traiter l'interaction du frame
    const body = await request.json();
    
    // Valider les données Farcaster (optionnel)
    console.log('Frame interaction:', body);
    
    // Retourner un nouveau frame ou rediriger
    const responseHTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Orbique - Launch Game</title>
  
  <!-- Frame de redirection -->
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
  <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
  <meta property="fc:frame:button:1" content="🚀 Launch Game" />
  <meta property="fc:frame:button:1:action" content="link" />
  <meta property="fc:frame:button:1:target" content="https://orbique.vercel.app" />
</head>
<body>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center;">
    <h1 style="font-size: 4rem; margin-bottom: 1rem; font-weight: bold;">ORBIQUE</h1>
    <p style="font-size: 1.5rem; margin-bottom: 2rem;">
      🎯 Ready to play? Click Launch Game!
    </p>
  </div>
</body>
</html>`;

    return new Response(responseHTML, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=60',
      },
    });
    
  } catch (error) {
    console.error('Frame POST error:', error);
    
    // Retourner un frame d'erreur
    const errorHTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://orbique.vercel.app/og-image.png" />
  <meta property="fc:frame:button:1" content="🔄 Try Again" />
  <meta property="fc:frame:button:1:action" content="post" />
  <meta property="fc:frame:post_url" content="https://orbique.vercel.app/api/frame" />
</head>
<body>
  <div style="display: flex; align-items: center; justify-content: center; height: 100vh; background: #ff6b6b; color: white; text-align: center;">
    <h1>Oops! Something went wrong. Try again.</h1>
  </div>
</body>
</html>`;

    return new Response(errorHTML, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
      status: 500,
    });
  }
}