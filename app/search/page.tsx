"use client";
import Search from "../../components/Search";
import { useStore } from "../../states/Zustand";
import { State } from "../../states/ZustandTypes";
import { useState, useEffect } from "react";

export default function search() {
  const searchResults = useStore((state: State) => state.searchResults);

  const [renderSearchResults, setRenderSearchResults] = useState<
    React.JSX.Element[]
  >([]);
  useEffect(() => {
    let i = 0;

    setRenderSearchResults(
      searchResults.map((element: JSX.Element) => {
        return (
          <tr key={i++}>
            <td>{element}</td>
          </tr>
        );
      }),
    );
  }, [searchResults]);

  return (
    <main>
      <Search />

      <table>
        <thead></thead>
        <tbody>{renderSearchResults}</tbody>
      </table>
    </main>
  );
}
