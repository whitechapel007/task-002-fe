import Image from "next/image";
import Link from "next/link";

const Results = ({ result }) => {
  const imageSrc = `https://image.tmdb.org/t/p/original/`;

  return (
    <div className="grid grid-cols-1  justify-center md:grid-cols-2  lg:grid-cols-4 gap-3 p-3 ">
      {result.slice(0, 10).map((item) => (
        <section
          key={item.id}
          className="p-3 cursor-pointer dark:text-gray-400 dark:shadow-md"
          data-testid=" movie-card"
        >
          <Link href={`/movie/${item.id}`}>
            <div>
              <img
                className="w-[250px] h-[370px]"
                src={imageSrc + item.poster_path}
                data-testid="movie-poster"
              />
            </div>

            <div className="flex flex-col gap-2 mt-2 pt-3">
              <div
                className="text-gray-400 text-xs font-bold font-['DM Sans']"
                data-testid="movie-release-date"
              >
                {new Date(item.release_date).toUTCString()}
              </div>

              <div
                className="w-[250px] text-gray-900 text-lg font-bold font-['DM Sans'] dark:text-gray-400"
                data-testid="movie-title"
              >
                {item.title}
              </div>

              <div className="flex gap-3">
                <div className="flex items-center gap-2">
                  <Image
                    layout="intrinsic"
                    src={"idmb.svg"}
                    alt=""
                    width={"50"}
                    height={"50"}
                  />

                  <p className="text-gray-900 text-xs font-normal font-['DM Sans'] leading-3 dark:text-gray-400">
                    86.0 / 100
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Image
                    layout="intrinsic"
                    src={"tomatoes.svg"}
                    alt=""
                    width={"30"}
                    height={"30"}
                  />

                  <p className="text-gray-900 text-xs font-normal font-['DM Sans'] leading-3 dark:text-gray-400">
                    97%
                  </p>
                </div>
              </div>

              <div className="text-gray-400 text-xs font-bold font-['DM Sans'] dark:text-gray-400">
                Action, Adventure, Horror
              </div>
            </div>
          </Link>
        </section>
      ))}
    </div>
  );
};

export default Results;
