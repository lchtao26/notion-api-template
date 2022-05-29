import {fetchDatabase } from './services'
import { useState, useEffect } from 'react'
import '@picocss/pico'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await fetchDatabase())
  }, []);
  return (
    <div className="App">{JSON.stringify(data)}</div>
  )
}

export default App
