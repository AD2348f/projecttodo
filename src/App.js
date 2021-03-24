// import React, {useState} from 'react';
// import List from './components/List';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import './App.css';




// function App() {

//   const [inputText, setInputText] = useState('');

//   const [todos, setTodos] = useState([]);   // now the todo's: they will be an array of objects

//     return (
//     <div className="container">
//       <Header />
      
      
//       <Footer 
//       inputText={inputText}
//       setInputText={setInputText}
//       todos={todos}
//       setTodos={setTodos}
//       />
//     </div>
//   );
// }



// export default App;


import React, {useEffect, useState} from 'react';
import './App.css';
// Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //state stuff
  //input for the input field next to the add button
  const [inputText, setInputText] = useState('');
  // now the todo's: they will be an array of objects
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);
  //use Effect
  useEffect(() => {
    //console.log('hey');  // will only be rendered once you enter the app
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);            // if todo is added as an argument, this function is running again and again everytime you add a todos

    //functions and events
    const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
//save to local
const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
};
const getLocalTodos = () => {
  if (localStorage.getItem('todos') === null) {
    localStorage.setItem('todos', JSON.stringify([]));
  } else {
   let todoLocal = JSON.parse(localStorage.getItem('todos'));
   setTodos(todoLocal);
  }
};

  return (
    <div className="wrapper">
    <div className="App">
      <header>
      <h1>Lazor ToDo's</h1>
      </header>
      <TodoList filteredTodos={filteredTodos} 
                setTodos={setTodos} 
                todos={todos} 
      />
      <Form inputText={inputText} 
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText} 
            setStatus={setStatus}
      />
      
      </div>
    </div>
  );
}

export default App;


// things to add: filter, important, time stamp instead of random id's? :D