import { Reducer, useReducer } from "react";

export interface InitialStateProps<State = any, StateReset = any> {
  initialState: State;
  initialStateReset?: StateReset;
}

export type ApplicationLocaleKeys<State> = keyof State;

export interface FormProps<State = any> {
  state: State;
  setState: (
    field: ApplicationLocaleKeys<State>,
    value: string | number | boolean | any[] | File
  ) => void;
  dispatch: React.Dispatch<any>;
  resetAllState: () => void;
}

export const useForm = <State,>({
  initialState,
  initialStateReset,
}: InitialStateProps<State>): FormProps<State> => {
  const reducer: Reducer<State, any> = (state, action) => {
    switch (action.type) {
      case "updateField":
        return { ...state, [action.field]: action.value };
      case "resetAll":
        if (initialStateReset) {
          return initialStateReset;
        }
        return initialState;
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setState = (
    field: ApplicationLocaleKeys<State>,
    value: string | number | boolean | any[] | File
  ) => {
    dispatch({ type: "updateField", field: field as string, value });
  };

  const resetAllState = () => {
    dispatch({ type: "resetAll" });
  };

  return { state, setState, dispatch, resetAllState };
};
