import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterWrapper from '../src/components/characters/characterWrapper'
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
      <CharacterWrapper isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
