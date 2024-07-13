import React from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import CreateArea from './CreateArea'


function App() {

  const [notes, setNotes] = React.useState([]);

  function addNote(note) {
    setNotes( prev => {
      return [...prev, note];
    });
  } 
  function deleteNode(id)   {
    setNotes(prev => {
      return prev.filter((noteItem, index) => {
        return index !== id;
      });
    })
  }
  return (
    <div>
      <Header />
      <CreateArea 
        onAdd = {addNote}
      />
    
      {notes.map((noteItem, index) => {
        return <Note key = {index}  id = {index} title = {noteItem.title} content = {noteItem.content} onDelete = {deleteNode}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
