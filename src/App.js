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


import React, {useState} from 'react';
import './App.css';
// Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //input for the input field next to the add button
  const [inputText, setInputText] = useState('');
  // now the todo's: they will be an array of objects
  const [todos, setTodos] = useState([]);
  return (
    <div className="wrapper">
    <div className="App">
      <header>
      <h1>Our Todos</h1>
      </header>

      <TodoList setTodos={setTodos} todos={todos} />
      <Form inputText={inputText} 
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText} 
      />
     
    </div>

    </div>
  );
}

export default App;


// things to add: filter, important, time stamp instead of random id's? :D