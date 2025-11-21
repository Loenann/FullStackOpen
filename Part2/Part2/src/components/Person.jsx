const Person = ({person, search, handleDelete}) =>{
    if(search === ''){
        return (
        <p>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person)}>delete</button>
        </p> 
        )
    }

    const match = person.name.toLowerCase().includes(search.toLowerCase())
    if(match){
        return <p>{person.name} {person.number} {person.id}</p>
    }

    return null
}   

export default Person