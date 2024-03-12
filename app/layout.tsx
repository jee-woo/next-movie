// layout 파일이 없어서 next가 알아서 생성해줌

import { Metadata } from "next";
import Navigation from "../components/navigation";

// metdata는 page 또는 layout에서만 export 가능
// 여러 곳에서 export 된 metadata는 하나로 병합됨

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />

        {children}
      </body>
    </html>
  );
}
