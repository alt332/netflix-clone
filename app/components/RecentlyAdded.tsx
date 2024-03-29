import Image from "next/image";
import prisma from "../utils/db";
import MovieCard from "./MovieCard";

async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchList: true,
      imageString: true,
      videoSource: true,
      youtubeString: true,
      age: true,
      release: true,
      duration: true,
    },
  });

  return data;
}

export default async function RecentlyAdded() {
  const data = await getData();

  return (
    <div className="grid grid-cold-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-48">
          <Image
            src={movie.imageString}
            alt={movie.title}
            width={500}
            height={400}
            className="rounded-sm absolute w-full"
          />

          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
              <Image
                src={movie.imageString}
                alt={movie.title}
                width={800}
                height={800}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />

              <MovieCard
                movieId={movie.id}
                overview={movie.overview}
                title={movie.title}
                watchListId={movie.WatchList[0]?.id}
                youtubeUrl={movie.youtubeString}
                watchList={movie.WatchList.length > 0}
                age={movie.age}
                year={movie.release}
                time={movie.duration}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
