"use client";

import { Place4SDetailed } from "@/data-access/fetch-random-place";
import { useDebounce } from "@/utils/useDebounce";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Muted } from "../muted/muted";
import { cn } from "@/lib/utils";

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
    <Command shouldFilter={false} className={cn("relative")}>
      <CommandInput
        placeholder="Type a command or search..."
        value={searchValue}
        onValueChange={(value) => {
          setSearchValue(value);
        }}
      />

      <CommandList
        className={cn(
          "absolute top-full left-0 bg-white w-full rounded-b-md z-30"
        )}
      >
        {loading && (
          <div className={cn("p-4 text-center")}>
            <Muted>Loading...</Muted>
          </div>
        )}

        {!loading && error && (
          <div className={cn("p-4 text-center")}>
            <Muted>Something went wrong, please try again later.</Muted>
          </div>
        )}

        {!loading && !error && searchResults.length > 0 && (
          <CommandGroup heading="Nearby venues">
            {searchResults.map((result) => (
              <CommandItem key={result.fsq_id}>
                <Link href={`/place/${result.fsq_id}`}>{result.name}</Link>
              </CommandItem>
            ))}
          </CommandGroup>
        )}
      </CommandList>
    </Command>
  );
};
