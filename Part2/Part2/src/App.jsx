import { useState, useEffect} from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() =>{
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => setCountries(response.data))
  })
  
  const handleSearch = (e) => {
    setSearch(e.target.value)
    setSelectedCountry(null)
  }

  const handleShowCountry = (country) =>{
    setSelectedCountry(country)
  }
  const filtered = countries.filter(country => 
    country.name.common.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <p>find countries <input value={search} onChange={handleSearch}/></p>
      <Countries 
      countries = {filtered}
      selectedCountry = {selectedCountry}
      onShow = {handleShowCountry}
      />
    </div>
  )
}

export default App