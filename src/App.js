import { React, useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import firebase from 'firebase';
import DeleteForeverIcon from '@material-ui/icons/Delete';
import './App.css';
import './firebase';
import './speacer'
import Speacer from './speacer';
import db from './firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {

    event.preventDefault();

    db.collection('todos').add({
      text: input,
      timestamps: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log('clicked');
    setInput('');

  }

  useEffect(() => {
    db.collection('todos').orderBy('timestamps', 'desc').onSnapshot(snapshot => { setTodos(snapshot.docs.map(doc => doc.data().text)) })
  }, [])



  return (
    <div className="App">
      <h1 className='apptitle'>Todo Application</h1>
      <form className='form'>
        <TextField id="outlined-basic" value={input} onChange={event => setInput(event.target.value)} label="write your text" variant="outlined" />

        <Speacer></Speacer>

        <Button className='todo-button' onClick={addTodo} disabled={!input} variant="contained" color="secondary">
          Add Todo
      </Button>

      </form>

      <Speacer></Speacer>

      <List className='list'>

        {todos.map(
          todo => (
            <ListItem>
              <ListItemText primary={todo} secondary='the boss'></ListItemText>
            </ListItem>
          )
        )}
      </List>

    </div>
  );
}

export default App;
