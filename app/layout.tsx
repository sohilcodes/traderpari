import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
title: "Trade With Pari | Color Trading Insights",
description:
"Explore Trade With Pari for color trading education, market observations, session updates, and responsible risk awareness.",
applicationName: "Trade With Pari",
openGraph: {
title: "Trade With Pari",
description:
"Color trading insights, educational content, and session updates.",
type: "website",
},
};

export const viewport: Viewport = {
width: "device-width",
initialScale: 1,
themeColor: "#080b0a",
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}
