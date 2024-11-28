import Link from "next/link";
import React from "react";
import { DUMMY_DATA } from "@/Model/DummyData";

const MoviesIndex = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Movies Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {DUMMY_DATA.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/movies/${movie.id}`}>
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{movie.title}</h2>
                <p className="text-sm text-gray-600 mb-2">
                  Release date: {movie.releaseDate}
                </p>
                <p className="text-sm text-gray-700">{movie.summary}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesIndex;
