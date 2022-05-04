import { createContext, useState, useEffect, useReducer } from 'react';

import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';

// Actual value to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const snjs = 0;

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CURRENT_USER':
      return {
        currentUser: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in userReducer!`);
  }
};
export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/*
const userReducer = (state, action) => {
  return {
    correntUser: {}
  }
}
*/
