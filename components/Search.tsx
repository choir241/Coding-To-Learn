"use client";
import { useState } from "react";
import { siteData } from "../data/siteData";
import { useStore } from "../states/Zustand";
import { Action } from "../states/ZustandTypes";
import { useRouter } from "next/navigation";

export default function Search() {
  const [searchSuggest, setSearchSuggest] = useState("");
  const setSearchResults = useStore(
    (action: Action) => action.setSearchResults,
  );
  const { push } = useRouter();

  function updateSearchResults() {
    const searchResults: number[] = [];

    siteData.forEach((content: string) => {
      if (content.includes(searchSuggest)) {
        searchResults.push(siteData.indexOf(content));
      }
    });

    const sites = [
      "Odin_Project",
      "Free_Code_Camp",
      "100_Devs",
      "C",
      "Java",
      "PHP",
      "Python",
      "React",
      "Swift",
      "TypeScript",
    ];

    const results = searchResults
      .map((i: number) => {
        const searchResult = siteData[i].split(".");
        return searchResult.map((result: string) => {
          if (result.toLowerCase().includes(searchSuggest) && i < 3) {
            return (
              <a href={`/${sites[i]}`} key={sites[i]}>
                {result}
              </a>
            );
          } else if (result.toLowerCase().includes(searchSuggest) && i > 3) {
            return (
              <a href={`/languages/${sites[i]}`} key={sites[i]}>
                {result}
              </a>
            );
          } else {
            return "";
          }
        });
      })
      .flat()
      .filter((result) => {
        if (result !== "") {
          return result;
        }
      });

    setSearchResults(results as unknown as React.JSX.Element[]);
    sessionStorage.setItem("searchResults", JSON.stringify(results));
    push("/search");
  }

  return (
    <form>
      <input
        type="search"
        placeholder="search"
        onChange={(e) => setSearchSuggest(e.target.value)}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          updateSearchResults();
        }}
      >
        Search
      </button>
    </form>
  );
}
