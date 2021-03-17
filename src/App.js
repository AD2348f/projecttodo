
import './App.css';


function App() {
    return (
    <div className="container">
      <header>
        <img source="" alt="logo"/>
        <select>
          <option value="0">Select filter:</option>
          <option value="1">Important</option>
          <option value="2">Done</option>
          <option value="3">ascending</option>
          <option value="4">Descending</option>
          <option value="5">Schedule</option>    
        </select>
      </header>
      <main>
        <ul>
          
          <li><input type="radio" /><input type = "text" value="Eat Currywurst" /><button>Edit</button><button>Del</button></li>
          <li><input type="radio" /><input type = "text" value="Wash car" /><button>Edit</button><button>Del</button></li>
          <li><input type="radio" /><input type = "text" value="Butter" /><button>Edit</button><button>Del</button></li>
          <li><input type="radio" /><input type = "text" value="Get toooo the Choppa" /><button>Edit</button><button>Del</button></li>
          
        </ul>
      </main>
      <footer>
        <input type="text"></input>
        <button>OK</button>
      </footer>
    </div>
  );
}



export default App;
