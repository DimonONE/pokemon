import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { RootReducer } from "../../types/Store";
import { getPokemons } from "../../store/thunks";
import { Card, Pagination } from "../../components";
import styles from "./styles.module.scss";
import { Typography } from "@mui/material";

const List = () => {
  const dispatch = useDispatch<any>();
  const limit = 20;

  const [updateList, setUpdateList] = useState({
    offset: 0,
    page: 1,
    flag: true,
  });

  const { count, results: pokemons } = useSelector(
    (state: RootReducer) => state.pokemons.pokemons
  );

  useEffect(() => {
    if (updateList.flag) {
      dispatch(getPokemons(updateList.offset));
      setUpdateList((prev) => ({ ...prev, flag: false }));
    }
  }, [updateList.flag]);

  const onPage = (page: number) => {
    const offset = (page - 1) * limit;
    setUpdateList((prev) => ({ ...prev, offset, page, flag: true }));
  };

  if (!pokemons?.length)
    return (
      <Typography className={styles.notFound}>Nothing found...</Typography>
    );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className={styles.pagination}>
        <Pagination count={count} page={updateList.page} onPage={onPage} />
      </div>
      <Grid className={styles.wrapper} container>
        {pokemons.map(({ url, name }) => (
          <Grid
            item={true}
            className={styles.itemContainer}
            key={name}
            xs={10}
            md={4}
            lg={3}
            xl={2}
          >
            <Card name={name} url={url} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default List;
