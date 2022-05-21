import React, { KeyboardEvent, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useDispatch } from "react-redux";
import { searchPokemon } from "../../store/thunks";

interface IProps {
  hideSearch?: boolean;
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },

  ".clicked": {
    width: "50px",
    cursor: "pointer",
    background: "#f4e62d29",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: "1em",
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "45ch",
      "&:focus": {
        width: "50ch",
      },
    },
  },
}));

const SearchCustom: React.FC<IProps> = ({ hideSearch }) => {
  const dispatch = useDispatch<any>();
  const [value, setValue] = useState("");

  const click = () => {
    if (value) dispatch(searchPokemon(value.toLowerCase()));
    setValue("");
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (
    event:
      | KeyboardEvent<HTMLImageElement>
      | KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter") {
      if (value) dispatch(searchPokemon(value.toLowerCase()));
      setValue("");
    }
  };

  return (
    <Search
      sx={{
        display: {
          sm: hideSearch ? "none" : "flex",
          xs: !hideSearch ? "none" : "flex",
        },
      }}
    >
      <span className="clicked" onClick={click}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </span>

      <StyledInputBase
        fullWidth
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Search pokemon on name…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default SearchCustom;
