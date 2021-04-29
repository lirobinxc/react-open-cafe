import { createContext } from 'react';
import settingsConfig from '../utlities/settingsConfig';

const initialState = settingsConfig;
const store = createContext(initialState);

export default store;
