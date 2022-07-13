import { Key, useEffect } from "react";
import { useCoffeesContext } from "../hooks/useCoffeesContext";

// components
import CoffeeDetails from "../components/CoffeeDetails";
import ImportCoffeeForm from "../components/ImportCoffeeForm";

export default function Home() {
  const { coffees, dispatch } = useCoffeesContext();

  useEffect(() => {
    const fetchCoffees = async () => {
      const response = await fetch('/api/coffees')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_COFFEES', payload: json})
      }
    }

    fetchCoffees()
  }, [dispatch])

  return (
    <div className="home">
      <div>
        {coffees && coffees.map((coffee: { _id: Key; }) => (
          <CoffeeDetails coffee={coffee} key={coffee._id} />
        ))}
      </div>
      <ImportCoffeeForm />
    </div>
  )
}
