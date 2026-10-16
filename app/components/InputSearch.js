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
    { name: "Packages", url: "/packages" },
    { name: "special", url: "/packages" },
    { name: "makeup", url: "/packages" },
    { name: "cost", url: "/packages" },
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
      <div className="relative flex h-10 w-full items-center justify-center border border-[#d8c8d8] bg-white/70 px-2">
        <span className="fill-[#775b77] stroke-current text-[#775b77]">
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
          className="search-input h-full min-w-0 w-full bg-transparent p-2 text-sm text-[#302631] outline-none"
        />
      </div>
      {results.length > 0 && (
        <ul className="absolute left-0 z-50 mt-2 max-h-60 w-full min-w-[220px] overflow-y-auto border border-[#e5dce5] bg-white shadow-lg">
          {results.map((result, index) => (
            <li
              key={`${result.url}-${index}`}
              className="w-full text-black"
            >
              <button type="button" onClick={() => handleResultClick(result.url)} className="w-full px-3 py-2 text-left hover:bg-[#f5edf5]">
                {result.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default InputSearch;
