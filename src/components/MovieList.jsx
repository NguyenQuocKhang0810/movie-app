import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieContext } from "../context/MovieContext";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1200, min: 600 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 2,
  },
};

const MovieList = ({ title, data = [] }) => {
  const { handleTrailer } = useContext(MovieContext);

  return (
    <div className="text-white p-10">
      <h2 className="text-[25px] font-bold mb-4">{title}</h2>
      <Carousel className="flex items-center" responsive={responsive}>
        {data.length > 0 &&
          data.map((item) => (
            <div
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
      </Carousel>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default MovieList;
