import { createContext, useEffect, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.utils';
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth
} from '../utils/firebase/firebase.utils';

const USER_ACTION_TYPES = {
  setCurrentUser: 'SET_CURRENT_USER'
};

const INITIAL_USER_STATE = {
  currentUser: null
};

// As the actual value need to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => {}
});

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.setCurrentUser:
      return {
        ...state,
        currentUser: payload
      };
    default:
      throw new Error(`Unhandled type: ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_USER_STATE);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.setCurrentUser, user));
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
