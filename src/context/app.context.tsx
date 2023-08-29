"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  open: boolean;
  drawerRight: boolean;
  drawerTop: boolean;
  showModal: boolean;
  stepKey: number;
  balanceSheet: boolean;
  startTourInvoice: boolean;
};

type ActionType = {
  type: string;
};


const initialState: StateType = {
  open: true,
  drawerRight: false,
  drawerTop: false,
  showModal: false,
  stepKey: 0,
  balanceSheet: true,
  startTourInvoice: false
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
    case "OPEN_MODAL":
      return { ...state, showModal: true };
    case "CLOSE_MODAL":
      return { ...state, showModal: false };
    case "NEXT_STEP_KEY":
      return { ...state, stepKey: state.stepKey + 1};
    case "PREV_STEP_KEY":
      return { ...state, stepKey: state.stepKey - 1};
    case "RESET_STEP_KEY":
      return { ...state, stepKey: 0 };
    case "SET_REPORT_BALANCE_SHEET":
      return { ...state, balanceSheet: true };
    case "RESET_REPORT_BALANCE_SHEET":
      return { ...state, balanceSheet: false }
    case "SET_START_TOUR_TRUE_INVOICE":
      return { ...state, startTourInvoice: true }
    case "RESET_START_TOUR_TRUE_INVOICE":
      return { ...state, startTourInvoice: false }
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
