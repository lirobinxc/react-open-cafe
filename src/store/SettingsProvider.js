import React, { useReducer } from 'react';
import reducer from './settingsReducer';
import settingsConfig from '../utlities/settingsConfig';
import store from './store';

const initialState = settingsConfig;
const { Provider } = store;

const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};
export default SettingsProvider;
