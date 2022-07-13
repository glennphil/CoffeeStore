import { createContext, useReducer } from 'react';

export const CoffeesContext = createContext();

export const coffeesReducer = (/** @type {{ coffees: any[]; }} */ state, /** @type {{ type: any; payload: { _id: any; }; }} */ action) => {
  switch (action.type) {
    case 'SET_COFFEES':
      return { 
        coffees: action.payload 
      }
    case 'CREATE_COFFEE':
      return { 
        coffees: [action.payload, ...state.coffees] 
      }
    case 'DELETE_COFFEE':
      return { 
        coffees: state.coffees.filter((/** @type {{ _id: any; }} */ w) => w._id !== action.payload._id) 
      }
    default:
      return state
  }
}

export const CoffeesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(coffeesReducer, { 
    coffees: null
  })
  
  return (
    <CoffeesContext.Provider value={{ ...state, dispatch }}>
      { children }
    </CoffeesContext.Provider>
  )
}