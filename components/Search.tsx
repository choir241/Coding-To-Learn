"use client";
import { useState } from "react";
import { useStore } from "../states/Zustand";
import { Action } from "../states/ZustandTypes";
import { useRouter } from "next/navigation";
import SearchSuggest from "./SearchSuggest";
import { updateSearchResults } from "./UpdateSearchResults";
import { CiSearch } from "react-icons/ci";
import style from "../css/main.module.css";
import search_icon from "../assets/search-icon.png";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const setSearchResults = useStore(
    (action: Action) => action.setSearchResults,
  );
  const { push } = useRouter();

  function renderSearchResults() {
    const results = updateSearchResults(searchValue);
    setSearchResults(results as unknown as React.JSX.Element[]);
    setSearchValue("");
    push("/search");
  }

  return (
    <form
      id="search"
      className={`${style.flex} ${style.column} ${style.alignEnd}`}
    >
      <section
        className={`searchBar ${style.flex} ${style.justifyEnd} ${style.alignEnd}`}
      >
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
          <img src={search_icon.src} className="searchBtn" />
        </button>
      </section>

      {searchValue ? (
        <SearchSuggest
          searchValue={searchValue}
          setSearchValue={(e: string) => setSearchValue(e)}
        />
      ) : (
        ""
      )}
    </form>
  );
}
