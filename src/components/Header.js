import React from "react";
import DarkModeSwitch from "./DarkModeSwitch";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Link from "next/link";

const Header = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTlmZTRjZWVlYTQyYjk1N2QxZmRkMWE4ZWYxYTZjOCIsInN1YiI6IjY1MDE2NDliZDdkY2QyMDBhY2IwYzRlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DTp3S2w9mMo2b1giaxLh5GMBAENKACr0aQjzGlhn-hw",
    },
  };

  let results = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())

    .catch((err) => console.error(err));

  function randomGen() {
    return Math.floor(Math.random() * results.results.length);
  }

  let poster = results.results[randomGen()];

  const imageSrc = `https://image.tmdb.org/t/p/original/`;

  return (
    <div className="min-h-[70vh] overlay">
      <div
        className=" overlay min-h-[70vh]"
        style={{
          backgroundImage: `url(${imageSrc + poster.backdrop_path})`,
          backgroundSize: "cover",
          minHeight: "70vh",
          backgroundPosition: "center",
          backgroundColor: "overlay",
        }}
      >
        <div className="flex items-center justify-around pt-5 overlay">
          <div>
            <Link href={"/"}>
              <Image
                src="/Logo.svg"
                width="200"
                height="200"
                alt=""
                layout="intrinsic"
              />
            </Link>
          </div>

          <SearchBar />

          <div className="flex items-center gap-2  ">
            <p className=" text-white">sign in</p>
            <Image
              src="Menu.svg"
              alt=""
              layout="intrinsic"
              width="50"
              height="50"
            />
          </div>
          <DarkModeSwitch />
        </div>

        <div className="overlay min-h-[70vh]">
          <div className=" flex flex-col gap-6 h-full pt-44 px-20">
            <p className="  md:w-[404px] text-white md:text-5xl text-2xl font-bold font-['DM Sans'] md:leading-[56px] py-2">
              {poster.title}
            </p>
            <div className="flex gap-14">
              <div className="flex items-center gap-2">
                <Image
                  src={"/idmb.svg"}
                  layout="intrinsic"
                  alt=""
                  width={"30"}
                  height={"30"}
                />
                <div class="text-white text-xs font-normal font-['DM Sans'] leading-3">
                  86.0 / 100
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src={"/tomatoes.svg"}
                  layout="intrinsic"
                  alt=""
                  width={"20"}
                  height={"20"}
                />
                <div class="text-white text-xs font-normal font-['DM Sans'] leading-3">
                  97%
                </div>
              </div>
            </div>

            <div>
              <p className="text-white md:w-[400px] mb-3">{poster.overview}</p>
              <div className="h-9 px-4 py-1.5  rounded-md justify-start items-center gap-2 inline-flex pt-3">
                <Image
                  src={"/Play.svg"}
                  layout="intrinsic"
                  alt=""
                  width={"30"}
                  height={"30"}
                />
                <div className="text-white text-sm font-bold font-['DM Sans'] uppercase leading-normal">
                  Watch trailer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
