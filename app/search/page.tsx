"use client";
import { useStore } from "../../states/Zustand";
import { State } from "../../states/ZustandTypes";
import Pagination from "../../components/Pagination";
import { useState } from "react";

export default function SearchResults() {
  const searchResults = useStore((state: State) => state.searchResults);

  let i = 0;

  const rowsPerPage = 4;
  const startIndex = 0;
  const [endIndex, setEndIndex] = useState(4);

  return (
    <main id="searchResults">
      <h1>Search Results</h1>
      {searchResults.length ? (
        <section>
          <table>
            <tbody>
              {searchResults
                .map((element: JSX.Element) => {
                  return (
                    <tr key={i++}>
                      <td>{element}</td>
                    </tr>
                  );
                })
                .slice(startIndex, endIndex)}
            </tbody>
          </table>

          <Pagination
            rowsPerPage={rowsPerPage}
            setEndIndex={(e: number) => setEndIndex(e)}
            endIndex={endIndex}
          />
        </section>
      ) : (
        <h2>No Search Results to Show</h2>
      )}
    </main>
  );
}
