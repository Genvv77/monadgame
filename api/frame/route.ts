export async function GET() {
  const manifest = {
    accountAssociation: {
      header: {
        fid: 200831, // Remplacez par votre FID Farcaster
        type: "custody",
        key: "0xe3d1fa019a0b44ea4c4bcb278c1bdf36052af6e0" // Votre clé publique
      },
      payload: "eyJkb21haW4iOiJvcmJpcXVlLnZlcmNlbC5hcHAifQ", // Payload signé
      signature: "MHhiMTYwNzgzYmRiMWQ5ZjA3NWU3YzE0MjA2ZDliNjUyNjg3NGZlMjhhMGViMDQ3ZDY2YWJmNDk5NjgyNGJmYTExNTc4ZTg5YWU4MmEyOGExOWQ5ZWNkNjhmNTdiYzAxMWQ4ZTQ0MGU2MWY4YmQzNTFhNTE4YzhhZWVlOWY2MDYwNTFj" // Signature
    },
    frame: {
      name: "Orbique",
      version: "1.0.0",
      iconUrl: "https://orbique.vercel.app/og-image.png",
      splashImageUrl: "https://orbique.vercel.app/og-image.png",
      splashBackgroundColor: "#8b5cf6",
      homeUrl: "https://orbique.vercel.app"
    }
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}




















