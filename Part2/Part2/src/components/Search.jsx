const Search = ({search, setSearch}) => {
    return(
    <div>
        filter shown with {" "}
        <input 
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        />
    </div>
    )
}

export default Search