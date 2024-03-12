import { API_URL } from "../app/(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movie: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 1000)); // fallback 보이게

  const response = await fetch(`${API_URL}/${id}`, {
    next: { revalidate: 2 },
  });
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
