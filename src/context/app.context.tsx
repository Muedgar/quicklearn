"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  open: boolean;
};

type ActionType = {
  type: string;
};

const initialState: StateType = {
  open: true,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "OPEN":
      return { ...state, open: true };
    case "CLOSE":
      return { ...state, open: false };
    default:
      return state;
  }
};

export const AppContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
