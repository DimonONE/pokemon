import { ADD_POKEMONS } from "./constants";

import { getPokemons } from "../api";

export const addTodo = (p: any) => {
  return (dispatch: any) => {
    dispatch(addTodoStarted());
    const gets = async () => {
      const pokemon = await getPokemons();
      console.log("pokemon +++", pokemon);
    };
    gets();
  };
};

const addTodoSuccess = (todo: any) => ({
  type: ADD_POKEMONS,
  payload: {
    ...todo,
  },
});

const addTodoStarted = () => ({
  type: ADD_POKEMONS,
});

// const addTodoFailure = (error) => ({
//   type: ADD_POKEMONS,
//   payload: {
//     error,
//   },
// });
