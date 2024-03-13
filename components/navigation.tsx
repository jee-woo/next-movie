"use client"; // "use hydrate"

// use client가 client 단에서만 렌더링된다는 걸 의미하지는 않음
// 모든 컴포넌트와 페이지들은 먼저 서버에서 렌더 됨 -> 렌더 된 html을 브라우저에 제공 -> client에서 hydrate
// use client를 쓰지 않은 컴포넌트는 모두 서버 컴포넌트

// clinet 컴포넌트 안에는 server 컴포넌트를 가질 수 없음
//   https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#supported-pattern-passing-server-components-to-client-components-as-props
// server 컴포넌트 안에는 client 컴포넌트를 가질 수 있음

import Link from "next/link";
import { usePathname } from "next/navigation";

// url 정보를 알려주는 hook 사용 - usePathname()
//   "use client"에서만 사용 가능

// Link 컴포넌트가 javascript를 disable 했을 때는 <a> 태그였다가 enable 했을 때 리액트 컴포넌트로 hydrate 됨
// 그래서 페이지 전체를 새로고침하지 않고 client side only navigation이 됨
// 처음 html은 dummy html - eventListner x

// hydration은 단순 HTML을 React Application으로 초기화하는 작업!
// ㄴ 모든 컴포넌트에 대해 발생하지 않음!
// "use client" - client에서 interactive한 컴포넌트라서 hydrate가 필요하다
//   useState, usePathName 등

export default function Navigation() {
  const path = usePathname();

  console.log(path);
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
          {path === "/" && "🍔"}
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link>
          {path === "/about-us" && "🍔"}
        </li>
      </ul>
    </nav>
  );
}
