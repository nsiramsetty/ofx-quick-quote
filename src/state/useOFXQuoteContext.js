import React, { createContext, useReducer, useContext } from 'react';
import { STATE_VIEW_NEW_QUOTE, STATE_UPDATE_STATE } from '../utils/Constants';
import defaultVales from '../config/DefaultValues';

const initialState = {
  view: STATE_VIEW_NEW_QUOTE,
  result: null,
  error: null,
  inputs: { ...defaultVales }
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action || {};
  const data = payload || {};
  switch (type) {
    case STATE_UPDATE_STATE:
      return { ...state, ...data };
    default:
      return state;
  }
};

export const OFXQuoteContext = createContext();
export const { Provider, Consumer } = OFXQuoteContext;

export const OFXQuoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export const useOFXQuoteContext = () => {
  return useContext(OFXQuoteContext);
};
