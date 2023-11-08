import { Results } from "@/app/components";

const API_KEY = process.env.API_KEY;

export default async function Home({ params }: { params: any }) {
  const term = params.term;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${term}&api_key=${API_KEY}&language=en-US`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data"); //this will be caught by the error page and passed to the page as props
  }

  const data = await res.json();
  const results = data.results ?? [];

  return (
    <main className="">
      {results.length === 0 ? <h1 className="text-center pt-6">No results found</h1> : null}
      {results.length ? <Results results={results} /> : null}
    </main>
  );
}
