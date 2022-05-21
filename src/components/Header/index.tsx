import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import { Search, Select } from "../index";
import styles from "./styles.module.scss";
import pokemonICO from "../../assets/icon/pokemon.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../types/Store";
import {
  getAllTypesPokemon,
  getPokemonByTypes,
  getPokemons,
} from "../../store/thunks";
import TemporaryDrawer from "../TemporaryDrawer";

interface SampleType {
  hideSelection?: boolean;
  hideSearch?: boolean;
}

const Header: React.FC = () => {
  const dispatch = useDispatch<any>();

  const types = useSelector(
    (state: RootReducer) => state.pokemons.pokemonTypes
  );

  useEffect(() => {
    if (!types.length) {
      dispatch(getAllTypesPokemon());
    }
  }, []);

  const onType = (id: number) => {
    if (id > 0) {
      return dispatch(getPokemonByTypes(id));
    }
    dispatch(getPokemons());
  };

  const Sample: React.FC<SampleType> = ({
    hideSelection = false,
    hideSearch = false,
  }): JSX.Element => {
    return (
      <>
        <Search hideSearch={hideSearch} />
        <Select
          hideSelection={hideSelection}
          types={types}
          onChangeCustom={onType}
        />
      </>
    );
  };

  return (
    <header className={styles.header}>
      <AppBar position="fixed">
        <Toolbar className={styles.toolbar}>
          <TemporaryDrawer
            content={<Sample hideSearch={true} hideSelection={true} />}
            position="bottom"
          />
          <Link to="/" className={styles.logoLink} onClick={() => onType(0)}>
            <Typography className={styles.logoContainer} variant="h6">
              POKEMON
              <img className={styles.logo} src={pokemonICO} alt="pokemon" />
            </Typography>
          </Link>
          <Sample />
        </Toolbar>
      </AppBar>
    </header>
  );
};
export default Header;
