import { useEffect, useRef } from "react";

const Search = ({ search, setSearch, openSearch, setOpenSearch }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (openSearch) {
      inputRef.current?.focus();
    }
  }, [openSearch]);

  return (
    <>
      {/* <div
        className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ${
          openSearch
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpenSearch(false)}
      /> */}

      <div
        className={`fixed top-20 left-0 w-full bg-white z-40 transition-transform duration-300 ease-in-out ${
          openSearch ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between w-full px-10 py-5 shadow-xl">
          <input
            ref={inputRef}
            name="search"
            className="w-[80%] focus:outline-none text-md"
            type="text"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i
            className="ri-close-line text-2xl text-black cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => setOpenSearch(false)}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Search;
