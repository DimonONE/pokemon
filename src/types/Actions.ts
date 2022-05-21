export interface ActionsType<T = string> {
  type: T;
}

export interface Actions extends ActionsType {
  [extraProps: string]: any;
}
