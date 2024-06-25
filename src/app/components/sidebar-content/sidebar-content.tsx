"use client";

import { useState } from "react";
import { Search } from "../search/search";

export const SidebarContent = ({ children }: { children: React.ReactNode }) => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <>
      <Search setIsSearching={setIsSearching} isSearching={isSearching} />

      {!isSearching && children}
    </>
  );
};
