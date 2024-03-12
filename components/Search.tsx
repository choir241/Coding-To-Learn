"use client";
import { useState } from "react";
import { useStore } from "../states/Zustand";
import { Action } from "../states/ZustandTypes";
import { useRouter } from "next/navigation";
import SearchSuggest from "./SearchSuggest";
import { updateSearchResults } from "./UpdateSearchResults";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const setSearchResults = useStore(
    (action: Action) => action.setSearchResults,
  );
  const { push } = useRouter();

  function renderSearchResults() {
    const results = updateSearchResults(searchValue);
    setSearchResults(results as unknown as React.JSX.Element[]);
    push("/search");
  }

  return (
    <form>
      <input
        type="search"
        value={searchValue}
        placeholder={`${searchValue ? searchValue : "search"}`}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          renderSearchResults();
        }}
      >
        Search
      </button>
      <SearchSuggest
        searchValue={searchValue}
        setSearchValue={(e: string) => setSearchValue(e)}
      />
    </form>
  );
}
