import { useState } from 'react'
import Person from './components/Person'
import Search from './components/Search'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [search, setSearch] = useState('')

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