import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Note from './Note'
import notes from '../notes.js'
import "./App.css"
const note = x=>{
  return <Note
  key={x.key}
  title={x.title}
  content={x.content}
  />
}
const App = () => {
  return (
    <div>
      <Header/>
      {notes.map(note)}
      <Footer/>
    </div>
  )
}

export default App
