import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import { PokemonTypes } from "../../types/PokemonInfo";

interface IProps extends PokemonTypes {
  name?: JSX.Element | string;
  onChangeCustom: (id: number) => void;
  hideSelection?: boolean;
}

const SelectCustom: React.FC<IProps> = ({
  name,
  types,
  onChangeCustom,
  hideSelection,
}) => {
  const defaultSelectType = Number(sessionStorage.getItem("type"));
  const [select, setSelect] = React.useState<number>(defaultSelectType || -1);
  const location = useLocation();
  const typesPokemons = useMemo(() => {
    return [{ name: "All types", value: -1 }, ...types];
  }, [types]);

  const handleChange = (event: SelectChangeEvent<typeof select>) => {
    const { value } = event.target;
    const id = Number(value);
    setSelect(id);
    onChangeCustom(id);
    sessionStorage.setItem("type", id.toString());
  };

  useEffect(() => {
    if (location.pathname === "/" && !hideSelection) {
      setSelect(-1);
    }
  }, [location]);

  return (
    <Box
      sx={{
        display: {
          sm: hideSelection ? "none" : "flex",
          xs: !hideSelection ? "none" : "flex",
        },
      }}
      className={styles.container}
    >
      {name ? <span className={styles.text}>{name}</span> : null}
      <FormControl variant="standard" sx={{ m: 1 }}>
        <Select
          className={styles.select}
          value={select}
          onChange={handleChange}
          multiline={false}
          sx={{
            "& .MuiInputBase-input:focus": {
              background: "none",
            },
          }}
        >
          {typesPokemons.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectCustom;
