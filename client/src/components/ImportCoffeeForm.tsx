import { useState } from 'react'
import { useCoffeesContext } from '../hooks/useCoffeesContext'

const ImportCoffeeForm = () => {
  const { dispatch } = useCoffeesContext()

  const [title, setTitle] = useState('');
  const [strength, setStrength] = useState('');
  const [flavor, setFlavor] = useState('');
  const [caffienated, setCaffienated] = useState('');
  const [price, setPrice] = useState('');
  const [origin, setOrigin] = useState('');
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const coffee = {title, strength, flavor, caffienated, origin, price}
    
    const response = await fetch('/api/coffees', {
      method: 'POST',
      body: JSON.stringify(coffee),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setTitle('')
      setStrength('')
      setCaffienated('')
      setFlavor('')
      setOrigin('')
      setPrice('')
      dispatch({type: 'CREATE_COFFEE', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Coffee</h3>

      <label>Name:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Strength:</label>
      <input 
        type="text" 
        onChange={(e) => setStrength(e.target.value)} 
        value={strength}
        className={emptyFields.includes('strength') ? 'error' : ''}
      />

      <label>Flavor:</label>
      <input 
        type="text" 
        onChange={(e) => setFlavor(e.target.value)} 
        value={flavor}
        className={emptyFields.includes('flavor') ? 'error' : ''}
      />

      <label>Price:</label>
      <input 
        type="number" 
        onChange={(e) => setPrice(e.target.value)} 
        value={price}
        className={emptyFields.includes('price') ? 'error' : ''}
      />

      <label>Caffienated:</label>
      <input 
        type="text" 
        onChange={(e) => setCaffienated(e.target.value)} 
        value={caffienated}
        className={emptyFields.includes('caffienated') ? 'error' : ''}
      />

      <label>Origin:</label>
      <input 
        type="text" 
        onChange={(e) => setOrigin(e.target.value)} 
        value={origin}
        className={emptyFields.includes('origin') ? 'error' : ''}
      />

      <button>Add Coffee</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ImportCoffeeForm