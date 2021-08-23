import React,{useState}from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  const fetchItems = async () => {
    setIsLoading(true)
    const result = await axios(
      `https://rickandmortyapi.com/api/character?name=${query}`
    )
    console.log(result.data.results)
    setItems(result.data.results)
    setIsLoading(false)
  }
  return (
    <div className='container'>
    </div>
  );
}

export default App;
