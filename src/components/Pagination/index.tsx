import React from "react";
import Stack from "@mui/material/Stack";
import { Pagination } from "@mui/material";
import styles from "./styles.module.scss";

interface IProps {
  count: number;
  onPage: (page: number) => void;
  page?: number;
}

const PaginationCustom: React.FC<IProps> = ({ count, page = 1, onPage }) => {
  const change = (event: React.ChangeEvent<unknown>, page: number) => {
    onPage(page);
  };

  return count > 1 ? (
    <Stack className={styles.pagination} spacing={2}>
      <Pagination
        count={count}
        page={page}
        variant="outlined"
        color="secondary"
        onChange={change}
      />
    </Stack>
  ) : null;
};

export default PaginationCustom;
