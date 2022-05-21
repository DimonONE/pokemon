import * as React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CircularProgress, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { getPokemonInfo } from "../../store/thunks";
import { pokemonInfo } from "../../common/pokemonInfo";
import { TypesPokemon } from "../index";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  url: string;
}

const PokemonCard: React.FC<Props> = (props) => {
  const dispatch = useDispatch<any>();
  let flag = true;

  const { name, url } = props;
  const idUrl = url.split("/");
  const id = Number(idUrl[idUrl.length - 2]);
  const pokemon = pokemonInfo(id);

  useEffect(() => {
    if (flag) {
      dispatch(getPokemonInfo(id));
      flag = false;
    }
  }, []);

  return (
    <Link className={styles.link} to={`info/${id}`}>
      <Card className={styles.card}>
        {!pokemon ? (
          <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
            <CircularProgress color="secondary" />
          </Stack>
        ) : (
          <CardActionArea>
            <CardMedia
              className={styles.cardImg}
              component="img"
              height="170"
              image={pokemon.sprites.front_default ?? ""}
              alt={name}
            />
            <CardContent>
              <Typography
                className={styles.name}
                gutterBottom
                variant="h5"
                component="h3"
                fontWeight={550}
              >
                {name}
              </Typography>
              <Typography
                className={styles.types}
                variant="body2"
                color="text.secondary"
              >
                <TypesPokemon types={pokemon.types} />
              </Typography>
            </CardContent>
          </CardActionArea>
        )}
      </Card>
    </Link>
  );
};

export default React.memo(PokemonCard);
