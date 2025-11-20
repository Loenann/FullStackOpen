import { useState, useEffect} from 'react'
import Person from './components/Person'
import Search from './components/Search'
import Form from './components/Form'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        console.log(response.data)
      })
  }


  useEffect(hook, [])
  return (
    <div>
      <h2>Phonebook</h2>
      <Search search={search} setSearch={setSearch}/>
      <h2>add a new</h2>
      <Form newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      {persons.map(person => (
        <Person key={person.name} person={person} search={search}/>
      ))}
      ...
    </div>
  )
}

export default App