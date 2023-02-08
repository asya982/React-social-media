import React from "react";
import styles from "./Pagination.module.css";

const Pagination = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let currrent = props.currentPage;
  let previous = currrent - 5 < 0 ? 0 : currrent - 5;
  let next = currrent + 5;
  let slicedPages = pages.slice(previous, next);

  return (
      <div className={styles.totalCount}>
        {slicedPages.map((p, index) => (
          <span
            className={props.currentPage === p ? styles.selected : undefined}
            onClick={() => props.getUsers(p)}
            key={index}
          >
            {p}
          </span>
        ))}
      </div>
  );
};

export default Pagination;
