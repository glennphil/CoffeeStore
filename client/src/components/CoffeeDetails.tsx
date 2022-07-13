import { useCoffeesContext } from '../hooks/useCoffeesContext';
import { useState } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const CoffeeDetails = ({ coffee }:any) => {
  const [show, setShow] = useState(false);
  const { dispatch } = useCoffeesContext()

  const handleDelete = async () => {
    const response = await fetch('/api/coffees/' + coffee._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_COFFEE', payload: json})
    }
  }

  return (
    <div className="coffee-details">
      <h4>{coffee.title}</h4>
      <p><strong>Strength: </strong>{coffee.strength}</p>
      <p><strong>Flavor: </strong>{coffee.flavor}</p>
      <p><strong>Caffienated: </strong>{coffee.caffienated}</p>
      <p><strong>Origin: </strong>{coffee.origin}</p>
      <p><strong>Price: </strong>{coffee.price}</p>
      <p><strong>Quantity: </strong>{coffee.quantity}</p>
      <p><strong>Note: </strong>{coffee.note}</p>
      <br/>
      <p>{formatDistanceToNow(new Date(coffee.createdAt), { addSuffix: true })}</p>
      <div className="coffee-buttons">
        <span className="material-symbols-outlined" onClick={handleDelete}>delete</span>
        <span className="material-symbols-outlined" onClick={() => setShow(!show)}>edit</span>
      </div>
      { show ? 
      <div>Update coffee</div>
       : null}
      
      
    </div>
  )
}

export default CoffeeDetails