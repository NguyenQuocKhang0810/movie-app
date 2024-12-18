import React, { memo, useContext } from "react";
import PropTypes from "prop-types";
import { MovieContext } from "../context/MovieContext";

const MovieSearch = ({ title, data = [] }) => {
  const { handleTrailer } = useContext(MovieContext);

  return (
    <div className="text-white p-10">
      <h2 className="text-[25px] font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {data.length > 0 &&
          data.map((item) => (
            <div
              tabIndex={0}
              key={item.id}
              className="relative flex items-center w-[200px] h-[300px] mb-4 group"
              onClick={() => handleTrailer(item.id)}
            >
              <div className="group-hover:scale-105 transition-transform duration-300 ease-in-out w-full h-full cursor-pointer">
                <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40 z-0"></div>
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt={item.title || item.original_title}
                  className="w-full h-full object-cover"
                />
                <h3 className="absolute bottom-3 left-1/2 transform -translate-x-1/2 font-semibold">
                  {item.title || item.original_title}
                </h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

MovieSearch.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default MovieSearch;
