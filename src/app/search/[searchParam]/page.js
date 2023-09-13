import Results from "@/components/Results";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const search = params.searchParam;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTlmZTRjZWVlYTQyYjk1N2QxZmRkMWE4ZWYxYTZjOCIsInN1YiI6IjY1MDE2NDliZDdkY2QyMDBhY2IwYzRlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DTp3S2w9mMo2b1giaxLh5GMBAENKACr0aQjzGlhn-hw",
    },
  };

  let results = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then((response) => response.json())

    .catch((err) => console.error(err));

  const imageSrc = `https://image.tmdb.org/t/p/original/`;

  console.log(results);

  return (
    <>
      <div>
        <div className="pt-4">
          <Link href={"/"} className="px-3 border boder-gray">
            {" "}
            Back
          </Link>
        </div>
        {results.results.length == 0 && (
          <h1 className="text-center pt-6">no result found</h1>
        )}
      </div>

      {results && <Results result={results.results} />}
    </>
  );
};

export default page;
