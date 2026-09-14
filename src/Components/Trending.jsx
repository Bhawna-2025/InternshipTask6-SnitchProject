import { ShirtData, JeansData } from "../Data/TrendingData.js";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Trending = () => {
  const [category, setCategory] = useState("All");
  const allData = [...ShirtData, ...JeansData];
  const filterData =
    category === "All"
      ? allData
      : allData.filter((item) => item.category === category);

  return (
    <>
      <div className="w-full pb-10">
        <h1 className="text-3xl font-bold uppercase">Trending</h1>
        <div className="flex justify-start items-center uppercase gap-5 text-[12px]  mt-3">
          <a
            href="#"
            className={category === "All" ? "font-bold" : "text-gray-700"}
            onClick={(e) => {
              e.preventDefault();
              setCategory("All");
            }}
          >
            All
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCategory("Shirts");
            }}
            className={category === "Shirts" ? "font-bold" : "text-gray-700"}
          >
            Shirts
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCategory("Jeans");
            }}
            className={category === "Jeans" ? "font-bold" : "text-gray-700"}
          >
            Jeans
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCategory("T-shirts");
            }}
            className={category === "T-shirts" ? "font-bold" : "text-gray-700"}
          >
            T-shirts
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCategory("Shoes");
            }}
            className={category === "Shoes" ? "font-bold" : "text-gray-700"}
          >
            Shoes
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCategory("Trousers");
            }}
            className={category === "Trousers" ? "font-bold" : "text-gray-700"}
          >
            Trousers
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCategory("Shorts");
            }}
            className={category === "Shorts" ? "font-bold" : "text-gray-700"}
          >
            Shorts
          </a>
        </div>
        <div className="h-[1px] w-full bg-gray-200 mt-3"></div>
      </div>

      <div className="w-full grid grid-cols-5 gap-x-2 gap-y-15">
        {filterData.map((item) => (
          <a
            href="#"
            key={item.id}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full">
              
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                slidesPerView={1}
                navigation
                className=" w-full  overflow-hidden"
              >
                {item.images.map((img, index) => (
                  <SwiperSlide className="h-full w-full" key={index}>
                    <img src={img} alt={item.name} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="px-2">

                <p className="text-[12px] text-gray-500">{item.name}</p>

                <p className="text-[12px] font-bold">₹{item.price}</p>

                <div className="flex justify-between items-end">
                  <div className="flex inline-flex border border-gray-300 divide-x divide-gray-300 text-xs text-gray-700 mt-2">
                    {(Array.isArray(item.size) ? item.size : [item.size]).map(
                      (sz, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-center font-medium cursor-pointer"
                        >
                          {sz}
                        </span>
                      ),
                    )}
                  </div>
                  <div>
                    <i className="ri-whatsapp-line text-lg pr-1"></i>
                  </div>
                </div>

              </div>

            </div>
          </a>
        ))}
      </div>

    </>
  );
};

export default Trending;
