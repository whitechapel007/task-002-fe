import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const movieId = params.id;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTlmZTRjZWVlYTQyYjk1N2QxZmRkMWE4ZWYxYTZjOCIsInN1YiI6IjY1MDE2NDliZDdkY2QyMDBhY2IwYzRlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DTp3S2w9mMo2b1giaxLh5GMBAENKACr0aQjzGlhn-hw",
    },
  };

  let results = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  )
    .then((response) => response.json())

    .catch((err) => console.error(err));

  const imageSrc = `https://image.tmdb.org/t/p/original/`;

  //   results = results.results;
  console.log("rr", results);

  return (
    <div classNamle="w-full">
      <div className="p-4 pt-5">
        <Link
          href={"/"}
          className="border border-blue-100 px-3 py-2 rounded-md "
        >
          Back
        </Link>
      </div>
      <div className="p-4 md:pt-8  flex-col md:flex-row   content-center  max-w-6xl mx-auto md:space-x-6 flex items-start">
        <Image
          src={imageSrc + results?.poster_path}
          width={500}
          height={300}
          className="rounded-lg group-hover:opacity-80 trnasition-opacity duration-200"
          alt=""
        />

        <div>
          <div className="p-2">
            <h2 className="text-lg mb-3  font-bold" data-testid="movie-title">
              {results.original_title}
            </h2>
          </div>

          <div data-testid="movie-overview">{results.overview}</div>

          <div className="text-bold mt-4" data-testid="movie-release-date">
            {new Date(results.release_date).toUTCString()}
          </div>
          <div className="text-bold mt-4" data-testid="movie-runtime">
            {results.runtime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
