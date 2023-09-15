const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function fetchTop10Movies() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results = data.results.slice(0, 10);
  return results;
}

export async function fetchGenres() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch genres");
  }

  const data = await res.json();
  return data.genres;
}
