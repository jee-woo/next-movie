// (home) route groups
// () 안의 이름은 url에 포함되지 않음

import Link from "next/link";

// function의 이름은 상관 없음!
// default로 export 되어야 함

// client 컴포넌트에서는 metadata를 export할 수 없음
export const metadata = {
  title: "Home",
};

// server component에서 fetch 한다는 것은 useEffect, useState, loading 상태 구현이 필요 없다는 것

// server 컴포넌트에서는 fetch된 url을 캐싱 시켜줌!
//   browser가 캐싱 시켜주는 것이 아님!

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
async function getMovies() {
  console.log("Fetching all movies");
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <li key={movie.title}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
