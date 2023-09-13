"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    if (!search) return;

    router.push(`/search/${search}`);
  }
  return (
    <div className="flex gap-3">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        className=" hidden md:block md:w-96 h-9 px-2.5 py-1.5 rounded-md border border-gray-300 justify-between items-center gap-2.5 "
        placeholder="What do you want to watch?"
      />

      <button
        type="submit"
        disabled={!search}
        className="disabled:text-gray-400 border border-gray-500   px-3 cursor-pointer hidden md:block"
        onClick={handleSubmit}
      >
        {" "}
        search
      </button>
    </div>
  );
};

export default SearchBar;
