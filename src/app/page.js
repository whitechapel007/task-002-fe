import Header from "@/components/Header";
import Results from "@/components/Results";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTlmZTRjZWVlYTQyYjk1N2QxZmRkMWE4ZWYxYTZjOCIsInN1YiI6IjY1MDE2NDliZDdkY2QyMDBhY2IwYzRlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DTp3S2w9mMo2b1giaxLh5GMBAENKACr0aQjzGlhn-hw",
    },
  };

  let result = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return (
    <>
      <Header />

      <div className="p-4">
        <h2 className="px-4 text-black text-4xl font-bold font-['DM Sans']">
          Top 10 movies
        </h2>

        <Results result={result.results} />
      </div>
    </>
  );
}
