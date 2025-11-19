const Person = ({person, search}) =>{
    if(search === ''){
        return <p>{person.name} {person.number}</p>
    }

    const match = person.name.toLowerCase().includes(search.toLowerCase())
    if(match){
        return <p>{person.name} {person.number}</p>
    }

    return null
}   

export default Person