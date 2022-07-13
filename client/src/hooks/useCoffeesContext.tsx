import { CoffeesContext } from "../context/CoffeesContext"
import { useContext } from "react"

export const useCoffeesContext = () => {
  const context = useContext(CoffeesContext)

  if(!context) {
    throw Error('useCoffeesContext must be used inside a CoffeesContextProvider')
  }

  return context
}