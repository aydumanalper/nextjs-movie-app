import { DUMMY_DATA } from "@/Model/DummyData";
import React from "react";

interface Params {
  params: {
    movie: number;
  };
}

const MovieDetail = ({ params }: Params) => {
  const { movie } = params;
  const currentMovie = DUMMY_DATA.find((m) => m.id == movie);

  if (!currentMovie) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Movie Not Found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row items-center bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={currentMovie.image}
          alt={currentMovie.title}
          className="w-full lg:w-1/2 h-64 lg:h-auto object-cover"
        />
        <div className="p-6 lg:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{currentMovie.title}</h1>
          <p className="text-gray-600 text-sm mb-4">
            Release Date: {currentMovie.releaseDate}
          </p>
          <p className="text-gray-800 text-lg">{currentMovie.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
