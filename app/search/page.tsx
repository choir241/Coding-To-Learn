"use client";
import Search from "../../components/Search";
import { useStore } from "../../states/Zustand";
import { State } from "../../states/ZustandTypes";

export default function SearchResults() {
  const searchResults = useStore((state: State) => state.searchResults);

  let i = 0;

  return (
    <main>
      <Search />

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
    </main>
  );
}
