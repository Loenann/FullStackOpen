import personService from '../services/persons'
const Form = ({
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    persons,
    setPersons
}) =>{
    const handleNameAdd = (event) =>{
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const addName = (event) =>{
        event.preventDefault()
        const existingPerson = persons.find(person => person.name === newName)
        if (existingPerson){
            const id = existingPerson.id
            if(!window.confirm(newName + ' is already added to phonebook, replace the old number with a new one?')){
                return
            }
            const changedPerson = { ...existingPerson, number: newNumber}
            personService
                .update(id, changedPerson)
                .then(returnedPerson => {
                    setPersons(persons.map(p => p.id !== existingPerson.id ? p : returnedPerson))
                    setNewName('')
                    setNewNumber('')
                })
                .catch(error =>{
                    alert(`Information of ${existingPerson.name} has already been removed from server`)
                })
            return
        }
        const nameObject = {name: newName, number: newNumber}
        personService
            .create(nameObject)
            .then(returnedPersons =>{
                setPersons(persons.concat(returnedPersons))
                setNewName('')
                setNewNumber('')
            })
    }
    return(
        <form onSubmit={addName}>
            <div>
                name: <input 
                    value={newName}
                    onChange={handleNameAdd}
                />
            </div>
            <div>
                number: <input
                    value={newNumber}
                    onChange={(event) => setNewNumber(event.target.value)}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
            <div>debug: {newName}</div>
        </form>
    )
}

export default Form