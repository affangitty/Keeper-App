import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Note from './Note'
import notes from '../notes.js'
import "./App.css"

const App = () => {
  return (
    <div>
      <Header/>
      {notes.map(x=>(
      <Note
        key={x.key}
        title={x.title}
        content={x.content}
  />)
  )}
      <Footer/>
    </div>
  )
}

export default App
