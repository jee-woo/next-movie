// [id] 대괄호로 동적 라우팅

import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // 컴포넌트 내에서 await 하면 loading 페이지가 보임
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  // Suspense의 fallback은 컴포넌트를 await 하는 동안 보여줌
  return (
    <div>
      <h2>Movie Detail Page</h2>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

/* 한 페이지에서 두 개의 fetch를 하는 경우

async function getMovie(id: string) {
  console.log(`Fetching movie: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 일부러 loading 보이게

  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieDetail(
  // props
  {
    params: { id },
  }: {
    params: { id: string };
  }
) {
  // console.log(props); // client 컴포넌트가 아니기 때문에 server에 찍힘
  console.log("==============");
  console.log("start fetching");

  // 순서대로 실행 -> 앞의 fetch가 늦게 끝나면 뒤의 결과도 늦게 반환
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);

  // 병렬적으로 실행
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("end fetching");

  return (
    <div>
      <h1>{movie.title}</h1>
      {videos.map((video) => (
        <div key={video.id}>{video.name}</div>
      ))}
    </div>
  );
}
*/
