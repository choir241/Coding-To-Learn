"use client";
import { useStore } from "../../states/Zustand";
import { State } from "../../states/ZustandTypes";

export default function SearchResults() {
  const searchResults = useStore((state: State) => state.searchResults);

  let i = 0;

  return (
    <main id="searchResults">
      <h1>Search Results</h1>
      {searchResults.length ? (
        <table>
          <tbody>
            {searchResults.map((element: JSX.Element) => {
              return (
                <tr key={i++}>
                  <td>{element}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2>No Search Results to Show</h2>
      )}
    </main>
  );
}
