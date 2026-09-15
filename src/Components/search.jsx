import { useEffect, useRef } from "react";

const Search = ({ search, setSearch, setOpenSearch }) => {
  // for automatically focus on input field
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="fixed top-20 left-0 w-full h-fit bg-white z-10">
      <div className="flex items-center justify-between w-full px-10 py-5 shadow-xl">
        <input
          ref={inputRef}
          autoFocus
          name="search"
          className="w-[80%] focus:outline-none text-xl"
          type="text"
          placeholder="Search here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i
          className="ri-close-line text-2xl text-black cursor-pointer hover:opacity-70 transition-opacity "
          onClick={() => setOpenSearch(false)}
        ></i>
      </div>
    </div>
  );
};

export default Search;
