import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../src/components/views/Header'
import CharacterWrapper from '../src/components/characters/characterWrapper'
import Search from '../src/components/views/SearchBar'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://rickandmortyapi.com/api/character?name=${query}`
      )

      console.log(result.data.results)

      setItems(result.data.results)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q:string) => setQuery(q)} />
      <CharacterWrapper isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
