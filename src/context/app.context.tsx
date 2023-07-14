"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  open: boolean;
  drawerRight: boolean;
  drawerTop: boolean;
};

type ActionType = {
  type: string;
};

const initialState: StateType = {
  open: true,
  drawerRight: false,
  drawerTop: false,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "OPEN":
      return { ...state, open: true };
    case "CLOSE":
      return { ...state, open: false };
    case "OPEN_DRAWER_RIGHT":
      return { ...state, drawerRight: true };
    case "CLOSE_DRAWER_RIGHT":
      return { ...state, drawerRight: false };
    case "OPEN_DRAWER_TOP":
      return { ...state, drawerTop: true };
    case "CLOSE_DRAWER_TOP":
      return { ...state, drawerTop: false };
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
