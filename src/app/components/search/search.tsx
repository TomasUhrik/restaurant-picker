"use client";

import { Place4SDetailed } from "@/data-access/fetch-random-place";
import { useDebounce } from "@/utils/useDebounce";
import { useCallback, useEffect, useState } from "react";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<Array<Place4SDetailed>>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();
  const debouncedSearchValue = useDebounce(searchValue, 500);

  const handleFetchPlaces = useCallback(async (value: string) => {
    if (!value) {
      setSearchResults([]);
      return;
    }

    try {
      setLoading(true);
      setError(undefined);
      const results: Array<Place4SDetailed> = await fetch("/api?query=" + value)
        .then((response) => response.json())
        .then((data) => data.data);

      setSearchResults(results);
    } catch (error) {
      setError(new Error("Failed to fetch places"));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    handleFetchPlaces(debouncedSearchValue);
  }, [debouncedSearchValue, handleFetchPlaces]);

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchValue(e.target.value);
        }}
        placeholder="Search..."
      />
      {loading && <p>Loading...</p>}
      {!error && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.fsq_id}>{result.name}</li>
          ))}
        </ul>
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
};
