import { create } from "zustand";
import { produce } from "immer";
import { State, Action } from "./ZustandTypes";

export const useStore = create<State & Action>((set) => ({
  searchResults: [],
  setSearchResults: (searchResults: React.JSX.Element[]) => {
    set(
      produce((state: State) => {
        state.searchResults = searchResults;
      }),
    );
  },
}));
