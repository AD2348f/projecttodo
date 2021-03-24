// import './ListItem.css';


// export default  () => (
// <li>
//     <i className="fas fa-check"></i><input type = "text" value="Eat Döner" />
//     <button><i className="fas fa-pencil-alt"></i></button>
//     <button> <i className="far fa-trash-alt"></i></button>
// </li>
// )





import React from 'react';
// import components 
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => { 

    
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map((todo) => ( 

                    <Todo
                    setTodos={setTodos}
                    todos={todos}
                    key={todo.id}
                    todo={todo}
                    text={todo.text} 
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList; 