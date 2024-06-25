"use client";

import { Place4SDetailed } from "@/data-access/fetch-random-place";
import { useDebounce } from "@/utils/useDebounce";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export const Search = ({
  setIsSearching,
}: {
  setIsSearching: (value: boolean) => void;
}) => {
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
        onFocus={() => {
          setIsSearching(true);
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchValue(e.target.value);
        }}
        placeholder="Search..."
      />
      {loading && <p>Loading...</p>}
      <button
        onClick={() => {
          setIsSearching(false);
          setSearchValue("");
          setSearchResults([]);
        }}
      >
        Stop Searching
      </button>
      {!error && (
        <ul>
          {searchResults.map((result) => (
            <li key={result.fsq_id}>
              <Link href={`/place/${result.fsq_id}`}>{result.name}</Link>
            </li>
          ))}
        </ul>
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
};
