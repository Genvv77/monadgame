// app/page.tsx
export const metadata = {
  title: "Orbique",
  icons: "/og-image.png",
  openGraph: {
    title: "Orbique",
    images: ["https://orbique.vercel.app/og-image.png"],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://orbique.vercel.app/og-image.png",
    "fc:frame:button:1": "Play Orbique",
    "fc:frame:button:1:action": "launch_frame",
    "fc:frame:post_url": "https://orbique.vercel.app/api/frame",
  },
};

import ClientComponent from "./ClientComponent";

export default function Page() {
  return <ClientComponent />;
}















