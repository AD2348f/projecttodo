

// export default  () => (
//     <header>
//         <img source="" alt="logo"/>
//         <div>
//         <i className="fas fa-filter"></i>
//         <i className="fas fa-sort-alpha-up-alt"></i>
//         <i className="fas fa-sort-alpha-down"></i>
//         <i className="fas fa-exclamation"></i>
//         <i className="far fa-trash-alt"></i>
//         <i className="fas fa-pencil-alt"></i>
//         <i className="far fa-calendar-alt"></i>
//         <i className="fas fa-check"></i>
//         <i className="fas fa-plus"></i>
//         </div>
//         <select>
//           <option value="0">Select filter:</option>
//           <option value="1">Important</option>
//           <option value="2">Done</option>
//           <option value="3">ascending</option>
//           <option value="4">Descending</option>
//           <option value="5">Schedule</option>    
//         </select>
//     </header>
//     )


    import React from 'react';

    const Todo = ({ text, todo, todos, setTodos }) => {
        //events
        const deleteHandler = () => {
            setTodos(todos.filter(el => el.id !== todo.id));
        };
        const completeHandler = () => {
            setTodos(todos.map((item) => {
                if(item.id === todo.id) {
                    return {
                        ...item, completed: !item.completed     //to modify the opposite of item.completed -> !
                    };
                }
                    return item;     
            })
            );
        };
        const importantHandler = () => {
            setTodos(todos.map((item) => {
                if(item.id === todo.id) {
                    return {
                        ...item, important: !item.important     
                    };
                }
                    return item;     
            })
            );
        };
        return (
            <div className="todo">                
                <li className={`todo-item ${todo.completed ? "completed" : ''}${todo.important ? "important" : ''}`}>{text}</li>        
                    <button onClick={completeHandler} className="complete-btn">
                        <i className="fas fa-check"></i>
                    </button>
                    <button onClick={importantHandler} className="important-btn">
                        <i className="fas fa-exclamation"></i>
                    </button>
                    <button onClick={deleteHandler} className="trash-btn">
                        <i className="fas fa-trash"></i>
                    </button>
                    
            </div>
        );
    };
    
    export default Todo; 
    
    
 