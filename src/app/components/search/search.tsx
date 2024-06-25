"use client";

import { Place4SDetailed } from "@/data-access/fetch-random-place";
import { useState } from "react";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<Array<Place4SDetailed>>(
    []
  );
  const [loading, setLoading] = useState(false);

  // @TODO: Throttle
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setLoading(true);

    const results: Array<Place4SDetailed> = await fetch(
      "/api?query=" + e.target.value
    )
      .then((response) => response.json())
      .then((data) => data.data);

    console.log(results);

    setSearchResults(results);
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search..."
      />
      {loading && <p>Loading...</p>}
      <ul>
        {searchResults.map((result) => (
          <li key={result.fsq_id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};
