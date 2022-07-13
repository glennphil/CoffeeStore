import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCoffeesContext } from '../hooks/useCoffeesContext';

const ImportCoffeeForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { dispatch } = useCoffeesContext();

  const [title, setTitle] = useState('');
  const [strength, setStrength] = useState('');
  const [flavor, setFlavor] = useState('');
  const [caffienated, setCaffienated] = useState('');
  const [price, setPrice] = useState('');
  const [origin, setOrigin] = useState('');
  const [quantity, setQuantity] = useState('');
  const [note, setNote] = useState('');

  const onSubmit = async () => {
    const coffee = { title, strength, flavor, caffienated, origin, price, quantity, note };
    
    const response = await fetch('/api/coffees', {
      method: 'POST',
      body: JSON.stringify(coffee),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();

    if (response.ok) {
      setTitle('');
      setStrength('');
      setCaffienated('');
      setFlavor('');
      setOrigin('');
      setPrice('');
      setQuantity('');
      setNote('');
      dispatch({type: 'CREATE_COFFEE', payload: json});
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit(onSubmit)}> 
      <h3>Add a New Coffee</h3>

      <label>Name:</label>
      <input 
        {...register('name', { required: true })}
        type="text" 
        autoComplete="off"
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />
      {errors.name && <div className="error">Name is required.</div>}

      <label>Strength (light/medium/dark):</label>
      <input 
        {...register('strength', { required: true })}
        type="text" 
        autoComplete="off"
        onChange={(e) => setStrength(e.target.value)} 
        value={strength}
      />
      {errors.strength && <div className="error">Strength is required.</div>}

      <label>Flavor:</label>
      <input 
        {...register('flavor', { required: true })}
        type="text" 
        autoComplete="off"
        onChange={(e) => setFlavor(e.target.value)} 
        value={flavor}
      />
      {errors.flavor && <div className="error">Flavor is required.</div>}

      <label>Price (kg):</label>
      <input 
        {...register('price', { required: true })}
        type="number" 
        autoComplete="off"
        onChange={(e) => setPrice(e.target.value)} 
        value={price}
      />
      {errors.price && <div className="error">Price is required.</div>}

      <label>Caffienated (y/n):</label>
      <input 
        {...register('caffienated', { required: true })}
        type="text" 
        autoComplete="off"
        onChange={(e) => setCaffienated(e.target.value)} 
        value={caffienated}
      />
      {errors.caffienated && <div className="error">Caffienated is required.</div>}

      <label>Origin:</label>
      <input 
        {...register('origin', { required: true })}
        type="text" 
        autoComplete="off"
        onChange={(e) => setOrigin(e.target.value)} 
        value={origin}
      />
      {errors.origin && <div className="error">Origin is required.</div>}

      <label>Quantity:</label>
      <input 
        {...register('quantity', { required: true })}
        type="number" 
        autoComplete="off"
        onChange={(e) => setQuantity(e.target.value)} 
        value={quantity}
      />
      {errors.quantity && <div className="error">Quantity is required.</div>}

      <label>Note:</label>
      <textarea 
        {...register('note', { required: false })}
        autoComplete="off"
        onChange={(e) => setNote(e.target.value)} 
        value={note}
        style={{width:'100%', height:'75px'}}
      ></textarea>

      <button>Add Coffee</button>
    </form>
  )
};

export default ImportCoffeeForm