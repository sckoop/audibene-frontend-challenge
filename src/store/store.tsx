import React, { createContext, useCallback, useReducer } from "react";

import { ActionTypes, reducer } from "./reducer/reducer";
import { ApplicationState, StateContextProps, Status } from "./types";

export const initialState: ApplicationState = {
  status: Status.Initial,
};

const store = createContext<StateContextProps>({
  state: initialState,
  fetchRedditPost: () => {},
});
const { Provider } = store;

const StateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchRedditPost = useCallback(
    async (url: string) => {
      dispatch({ type: ActionTypes.FetchRedditPostLoad });

      try {
        const response = await fetch(url);
        const data = await response.json();

        dispatch({
          type: ActionTypes.FetchRedditPostSuccess,
          redditPost: data,
        });
      } catch (error) {
        dispatch({ type: ActionTypes.FetchRedditPostFailure, error });
      }
    },
    [dispatch]
  );

  return <Provider value={{ state, fetchRedditPost }}>{children}</Provider>;
};

export { store, StateProvider };
