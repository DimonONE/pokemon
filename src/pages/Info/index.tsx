import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { CircularProgress, Container, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import { pokemonInfo as info } from "../../common/pokemonInfo";
import { useParams } from "react-router";
import { getPokemonInfo, getPokemons } from "../../store/thunks";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, TypesPokemon } from "../../components";
import { useNavigate } from "react-router-dom";
import { RootReducer } from "../../types/Store";

const Info = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();

  const { id } = useParams();
  const pokemonId = Number(id);
  const pokemonInfo = info(pokemonId);
  const { count } = useSelector(
    (state: RootReducer) => state.pokemons.pokemons
  );

  useEffect(() => {
    if (!pokemonInfo) {
      dispatch(getPokemons());
      dispatch(getPokemonInfo(pokemonId));
    }
  }, [id]);

  useEffect(() => {
    if (!count) {
      dispatch(getPokemons());
    }
  }, [count]);

  if (!pokemonInfo)
    return (
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
      </Stack>
    );

  return (
    <Container className={styles.info}>
      <Pagination
        count={count}
        page={pokemonId}
        onPage={(page) => navigate(`/info/${page}`)}
      />

      <img
        className={styles.sprite}
        src={pokemonInfo.sprites.front_default ?? ""}
        alt={pokemonInfo.name}
      />
      <span className={styles.name}>{pokemonInfo.name}</span>
      <span className={styles.types}>
        <TypesPokemon types={pokemonInfo.types} />
      </span>
      <span className={styles.weight}>weight: {pokemonInfo.weight}</span>
      <Card className={styles.card}>
        {pokemonInfo.stats.map((item, index: number) => (
          <div key={index}>
            <span>{item.stat.name + " =>"} </span>
            <span>{item.base_stat}</span>
          </div>
        ))}
      </Card>
    </Container>
  );
};

export default Info;
