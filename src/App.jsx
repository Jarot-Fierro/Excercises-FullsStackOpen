import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


  useEffect(() =>{
    console.log('effect')
    axios.get('http://localhost:3001/notes').then(response => {
      console.log('promise fullfilled')
      setNotes(response.data)
     })
  }, [])
  console.log('render', notes.length, 'notes')
  return(
    <div>
      <h1>hola</h1>
    </div>
  ) 
}

export default App
