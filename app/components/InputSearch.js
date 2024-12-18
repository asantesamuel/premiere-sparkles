"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const router = useRouter(); // For navigation
  const [query, setQuery] = useState(""); // Store the input value
  const [results, setResults] = useState([]); // Store filtered results

  // Mock searchable data
  const searchData = [
    { name: "Home", url: "/" },
    { name: "Team", url: "/" },
    { name: "premiere", url: "/" },
    { name: "sparkles", url: "/" },
    { name: "special", url: "/" },
    { name: "payment", url: "/" },
    { name: "Services", url: "/works" },
    { name: "Our Services", url: "/works" },
    { name: "Nail", url: "/works" },
    { name: "makeup", url: "/works" },
    { name: "pedicure", url: "/works" },
    { name: "wigs", url: "/works" },
    { name: "photoshoot", url: "/works" },
    { name: "lashes", url: "/works" },
    { name: "sew", url: "/works" },
    { name: "installation", url: "/works" },
    { name: "styling", url: "/works" },
    { name: "bridal", url: "/works" },
    { name: "brow", url: "/works" },
    { name: "trimming", url: "/works" },
    { name: "Packages", url: "/packagess" },
    { name: "special", url: "/packagess" },
    { name: "makeup", url: "/packagess" },
    { name: "cost", url: "/packagess" },
    { name: "About Us", url: "/about" },
    { name: "Team", url: "/about" },
    { name: "about", url: "/about" },
    { name: "Our Location", url: "/location" },
    { name: "Contact Us", url: "/location" },
    { name: "Find us", url: "/location" },
  ];

  // Filter results based on the query
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]); // Clear results if query is empty
    } else {
      const filtered = searchData.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    }
  };

  // Navigate to the selected URL
  const handleResultClick = (url) => {
    router.push(url);
  };

  return (
    <div>
      <div className=" flex   justify-center  items-center border-2 border-white  p-2 h-[50px]">
        <span className="fill-white stroke-current text-white  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6">
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="search"
          aria-label="search"
          className="search-input w-[200px] bg-transparent rounded-none p-2 h-[70px]border-none  outline-none  "
        />
      </div>
      {results.length > 0 && (
        <ul className="absolute bg-white border mt-2 w-[300px] max-h-60 overflow-y-auto">
          {results.map((result) => (
            <li
              key={result.url}
              onClick={() => handleResultClick(result.url)}
              className="p-2 text-black hover:bg-gray-200 cursor-pointer w-full">
              {result.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSearch;
