import { createContext, useReducer } from 'react';

export const UsersContext = createContext();

export const usersReducer = (/** @type {{ users: any[]; }} */ state, /** @type {{ type: any; payload: { _id: any; }; }} */ action) => {
  switch (action.type) {
    case 'SET_USERS':
      return { 
        users: action.payload 
      }
    case 'CREATE_USER':
      return { 
        users: [action.payload, ...state.users] 
      }
    case 'DELETE_USER':
      return { 
        users: state.users.filter((/** @type {{ _id: any; }} */ w) => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const UsersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, { 
    users: null
  })
  
  return (
    <UsersContext.Provider value={{ ...state, dispatch }}>
      { children }
    </UsersContext.Provider>
  )
}