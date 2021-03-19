import React, {useState} from 'react';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';



function App() {

  const [inputText, setInputText] = useState('');

  const [todos, setTodos] = useState([]);   // now the todo's: they will be an array of objects

    return (
    <div className="container">
      <Header />
      
      <main>
        <ul>
          <List />
          <li><input type="radio" /><input type = "text" value="Eat Currywurst" /><button>Edit</button><button>Del</button></li>
          <li><input type="radio" /><input type = "text" value="Wash car" /><button>Edit</button><button>Del</button></li>
          <li><input type="radio" /><input type = "text" value="Butter" /><button>Edit</button><button>Del</button></li>
          <li><input type="radio" /><input type = "text" value="Get to the Choppa" /><button>Edit</button><button>Del</button></li>
          
        </ul>
      </main>
      <Footer 
      inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
      />
    </div>
  );
}



export default App;
