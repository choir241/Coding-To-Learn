export type State = {
  searchResults: React.JSX.Element[];
};

export type Action = {
  setSearchResults: (e: React.JSX.Element[]) => void;
};
