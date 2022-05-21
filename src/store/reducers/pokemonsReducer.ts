import { ADD_POKEMONS } from "../actions/constants";

const initialState = {
  pokemons: [],
};

export default function todosReducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
}
