import { useState } from "react";
import {
  ShirtData,
  JeansData,
  TshirtData,
  newArrivalData,
} from "../Data/TrendingData.js";
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

const SearchResult = ({
  search,
  selectedSizes,
  setSelectedSizes,
  setProduct
}) => {
  const allData = [
    ...newArrivalData,
    ...ShirtData,
    ...JeansData,
    ...TshirtData,
  ];

  // here all the filtered data gets stored
  const filterData = allData.filter((item) => {
    if (!search || !search.trim()) return true;

    const query = search.toLowerCase().trim();
    const clean = (str) => str.toLowerCase().replace(/[-_\s]/g, "");

    const cleanQuery = clean(query);
    const cleanName = clean(item.name);
    const cleanCategory = clean(item.category);

    if (item.name.toLowerCase().includes(query)) return true;
    if (item.category.toLowerCase().includes(query)) return true;

    if (cleanName.includes(cleanQuery) || cleanCategory.includes(cleanQuery)) {
      if (
        (cleanQuery === "shirt" || cleanQuery === "shirts") &&
        cleanCategory === "tshirts"
      ) {
        return false;
      }
      return true;
    }

    const singularQuery = cleanQuery.endsWith("s")
      ? cleanQuery.slice(0, -1)
      : cleanQuery;
    if (
      cleanName.includes(singularQuery) ||
      cleanCategory.includes(singularQuery)
    ) {
      if (singularQuery === "shirt" && cleanCategory === "tshirts") {
        return false;
      }
      return true;
    }

    return false;
  });

  return (
    <>
     
      {/* if nothing found then this will render */}
      {filterData.length === 0 ? (
        <div className="w-full text-center py-20 mt-40">
          <p className="text-xl md:text-2xl font-semibold text-gray-600">
            Nothing found
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Try searching for something else like "Shirts", "Jeans", or
            "T-shirts".
          </p>
        </div>
      ) : (
        // if data is found then this will render
        <div className="w-full grid md:grid-cols-5 grid-cols-2 gap-x-2 gap-y-15 mt-38 mb-20 ">
          {filterData.map((item) => (
            <a
              href="#"
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <div className="w-full group relative">
                <Swiper
                  key={item.id}
                  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                  slidesPerView={1}
                  navigation
                  loop={true}
                  className=" w-full  overflow-hidden trending-swiper"
                >
                  {item.images.map((img, index) => (
                    <SwiperSlide
                      className="h-full w-full"
                      key={index}
                      id="SlideImage"
                    >
                      <img src={img} alt={item.name} />
                    </SwiperSlide>
                  ))}
                </Swiper>
                {item.isNew && (
                  <span className="absolute top-2 right-2 bg-white px-2 py-1 text-[10px] text-red-500 border border-gray-300 z-10 font-bold">
                    NEW
                  </span>
                )}

                <div className="px-2 pt-1">
                  <p className="md:text-[12px] text-[10px] text-gray-500">
                    {item.name}
                  </p>

                  <p className="text-[12px] font-bold">₹{item.price}</p>

                  <div className="flex inline-flex border border-gray-300 divide-x divide-gray-300 md:text-xs text-[10px] text-gray-700 mt-2">
                    {(Array.isArray(item.size) ? item.size : [item.size]).map(
                      (sz, index) => (
                        <span
                          key={index}
                          className={`md:px-2 px-1.5 py-1 text-center md:font-medium cursor-pointer ${selectedSizes[item.id] === sz ? "bg-gray-200 text-black" : ""}`}
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedSizes((prev) => ({
                              ...prev,
                              [item.id]: sz,
                            }));
                          }}
                        >
                          {sz}
                        </span>
                      ),
                    )}
                  </div>
                  <div className="my-2 flex items-center gap-2">
                    <i className="ri-whatsapp-line md:text-lg text-sm  text-[#25D366] "></i>

                    {item.isNew ? (
                      <span
                        className="md:text-[11px] text-[9px] text-gray-500 hover:text-[#25D366] cursor-pointer"
                        onClick={() => setProduct(item)}
                      >
                        Send Message to us for prebooking
                      </span>
                    ) : (
                      <span
                        className="md:text-[11px] text-[9px] text-gray-500 hover:text-[#25D366] cursor-pointer"
                        onClick={() => setProduct(item)}
                      >
                        Message us if you want to buy
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchResult;
