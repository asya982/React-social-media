import React, { useState } from "react";
import styles from "./Pagination.module.css";

const Pagination = ({
  totalItemsCount,
  pageSize,
  currentPage,
  portionSize = 10,
  getUsers,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let totalPortionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(
    Math.ceil(currentPage / pageSize),
  );

  let leftPortionBorder = (portionNumber - 1) * pageSize + 1;
  let rightPortionBorder = portionSize * portionNumber;

  return (
    <div className={styles.totalCount}>
      {portionNumber > 1 && (
        <button onClick={() => setPortionNumber(portionNumber - 1)}>
          Previos
        </button>
      )}
      <div className={styles.pages}>
        {pages
          .filter((p) => p >= leftPortionBorder && p <= rightPortionBorder)
          .map((p, index) => (
            <span
              className={currentPage === p ? styles.selected : undefined}
              onClick={() => {
                debugger;
                getUsers(p)}
              } 
              key={index}
            >
              {p}
            </span>
          ))}
      </div>
      {portionNumber < totalPortionCount && (
        <button onClick={() => setPortionNumber(portionNumber + 1)}>
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
