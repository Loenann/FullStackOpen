import { useState, useEffect} from 'react'
import Person from './components/Person'
import Search from './components/Search'
import Form from './components/Form'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)

  const hook = () => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons =>{
        setPersons(initialPersons)
      })
  }
  const deletePerson = (person) =>{
    if (!window.confirm(`Delete ${person.name}?`)){
      return
    }
    console.log(person.id)
    personService
        .remove(person.id)
        .then(returnedPersons => {
            console.log(returnedPersons)
            setPersons(persons.filter(p => p.id !== person.id))
        })

  }


  useEffect(hook, [])
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} type="error"/>
      <Notification message={successMessage} type="success"/>
      <Search search={search} setSearch={setSearch}/>
      <h2>add a new</h2>
      <Form newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} errorMessage={errorMessage} setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage} successMessage={successMessage}/>
      <h2>Numbers</h2>
      {persons.map(person => (
        <Person key={person.id} person={person} search={search} handleDelete={deletePerson}/>
      ))}
      ...
    </div>
  )
}

export default App