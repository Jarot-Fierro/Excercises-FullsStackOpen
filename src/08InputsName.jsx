import { useState } from 'react'

const Names = ({ name }) => {
  return (
    <li>{name}</li>
  )
}

const App = () => {
  // Lista para agregar los nombres de las personas
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      id: 1 }
  ]) 
  // Nombre actual
  const [newName, setNewName] = useState('')

  const handleNewNameChanges = (event) =>{
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1,
    }
    //Validar si el nombre ya existe
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      // Agregar la nueva persona a la lista
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
    
  }
  
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNewNameChanges} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => (
          <Names key={i} name={person.name} />
        ))}
      </ul>
    </div>
  )
}

export default App
