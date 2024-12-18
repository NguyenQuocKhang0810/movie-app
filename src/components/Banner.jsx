import React from "react";
import img1 from "../assets/rating.png";
import img2 from "../assets/rating-half.png";
import img3 from "../assets/temp-1.jpeg";
import img4 from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[1000px] bg-banner bg-no-repeat bg-cover bg-center relative">
      <div className="absolute bg-opacity-40 bg-black w-full h-full z-10"></div>
      <div className="flex items-center justify-center w-full h-full p-10 relative z-20">
        <div className="w-[50%] text-white space-y-8">
          <button className="bg-[#EB5D5E] px-6 py-2 rounded-sm bg-gradient-to-r from-red-500 to-orange-300 hover:opacity-90">
            TV Show
          </button>
          <h2 className="text-[50px] font-bold">Nghe nói em thích tôi</h2>
          <div className="flex w-[40px] h-[40px]">
            <img src={img1} alt="rating" />
            <img src={img1} alt="rating" />
            <img src={img1} alt="rating" />
            <img src={img1} alt="rating" />
            <img src={img2} alt="rating" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae
            quisquam deserunt assumenda distinctio minima nostrum beatae,
            ducimus eos similique, corporis suscipit doloribus earum repellat
            nesciunt exercitationem dolor iste cum!
          </p>
          <div className="flex items-center space-x-4">
            <button className="px-3 py-2 bg-black rounded-sm hover:bg-opacity-70 font-semibold">
              Chi tiết
            </button>
            <button className="px-3 py-2 bg-red-600 rounded-sm hover:bg-opacity-90 font-semibold">
              Xem phim
            </button>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="w-[350px] h-[500px] group relative">
            {/* group trên phần tử cha, bạn có thể áp dụng các hiệu ứng hover, focus, hoặc các trạng thái khác cho phần tử con bên trong phần tử cha đó thông qua các lớp tiện ích như group-hover, group-focus */}
            <img src={img3} alt="movie" className="w-full h-full" />
            <div className="w-full h-full flex justify-center items-center absolute backdrop-blur-sm top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out cursor-pointer">
              <img src={img4} alt="play" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
