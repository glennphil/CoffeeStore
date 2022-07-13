import { Key, useEffect } from "react";
import {Helmet} from "react-helmet";
import { useCoffeesContext } from "../hooks/useCoffeesContext";

// components
import CoffeeDetails from "../components/CoffeeDetails";
import ImportCoffeeForm from "../components/ImportCoffeeForm";

export default function Admin() {
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
    <>
    <Helmet>
      <title>Admin Panel | Pretzel Coffee</title>
    </Helmet>
    <div className="home">
      <div className="map-container">
        {coffees && coffees.map((coffee: { _id: Key; }) => (
          <CoffeeDetails coffee={coffee} key={coffee._id} />
        ))}
      </div>
      <ImportCoffeeForm />
    </div>
    </>
  )
}
