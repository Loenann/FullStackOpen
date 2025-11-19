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
        const nameExist = persons.some(person => person.name === newName)
        if (nameExist){
            alert(newName + ' is already added to phonebook')
            return
        }
        const nameObject = {name: newName, number: newNumber}
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
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