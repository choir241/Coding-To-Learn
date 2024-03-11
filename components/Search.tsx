"use client";
import { useState } from "react";
import { siteData } from "../data/siteData";

export default function Search() {
  const [searchSuggest, setSearchSuggest] = useState("");

  function setSearchResults() {
    const searchResults: number[] = [];

    siteData.forEach((content: string) => {
      if (content.includes(searchSuggest)) {
        searchResults.push(siteData.indexOf(content));
      }
    });

    const sites = [
      "Odin Project",
      "Free Code Camp",
      "100 Devs",
      "C#",
      "Java",
      "PHP",
      "Python",
      "React",
      "Swift",
      "TypeScript",
    ];

    searchResults.map((i: number) => {
      const searchResult = siteData[i].split(".");
    });
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
          setSearchResults();
        }}
      >
        Search
      </button>
    </form>
  );
}
