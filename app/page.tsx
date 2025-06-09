// app/page.tsx
export const metadata = {
  title: "Orbique",
  description: "Web3 riddle game powered by MONAD — only one can win.",
  icons: "/og-image.png",
  openGraph: {
    title: "Orbique",
    description: "Web3 riddle game powered by MONAD — only one can win.",
    images: ["https://orbique.vercel.app/og-image.png"],
    url: "https://orbique.vercel.app",
  },
};

import ClientComponent from "./ClientComponent";

export default function Page() {
  return <ClientComponent />;
}



















