import { siteData } from "../data/siteData";

export function updateSearchResults(searchValue: string) {
  const searchResults: number[] = [];

  siteData.forEach((content: string) => {
    if (content.includes(searchValue)) {
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

  return searchResults
    .map((i: number) => {
      const searchResult = siteData[i].split(".");
      return searchResult.map((result: string) => {
        if (result.toLowerCase().includes(searchValue.toLowerCase()) && i < 3) {
          return (
            <a href={`/${sites[i]}`} key={sites[i]}>
              {result}
            </a>
          );
        } else if (
          result.toLowerCase().includes(searchValue.toLowerCase()) &&
          i > 3
        ) {
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
}
