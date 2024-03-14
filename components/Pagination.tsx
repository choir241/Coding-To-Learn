import { Button } from "./Button";
import style from "../css/main.module.css";

interface PaginatedInterface {
  setEndIndex: (e: number) => void;
  endIndex: number;
  rowsPerPage: number;
}

export default function Pagination(props: PaginatedInterface) {
  return (
    <div key="buttons" className={`${style.flex} ${style.justifyCenter}`}>
      {Button({
        text: "Show More",
        key: "showMoreButton",
        classNames: style.button,
        onClick: () => {
          props.setEndIndex(props.endIndex + props.rowsPerPage);
        },
      })}
    </div>
  );
}
