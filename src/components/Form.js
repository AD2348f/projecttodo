// import React from 'react'

// const Footer = () => {


// const inputTextHandler = (e) => {
//     console.log(e.target.value);
//     setInputText(e.target.value);  
// }

// const submitTodoHandler = (e) => {
//     e.preventDefault(); //stops from always refreshing the page -> see <button> onClick
//     setTodos([
//         ...todoList,
//         { text: inputTextHandler, completed: false, id: Math.random() * 1000}
//     ]);
//    //setInputText('');
// }

// return (
//     <footer>
//         <form>
//             <input  onChange={inputTextHandler} type="text"  placeholder="new entry..."></input>
//             <button onClick={submitTodoHandler}><i className="fas fa-plus"></i></button>
//         </form>
//       </footer>
//     )


// }

// export default Footer;











import React from 'react';



const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    //here I can write javascript code and function
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();  //stops from always refreshing the page -> see <button> onClick 
        setTodos([
            ...todos,
            { text: inputText, important:false, completed: false, id: Math.random() * 1000}
        ]);
        setInputText('');   //resets the state back to zero (press plus button -> input field resets) 
                            //so that you don't have to delete the text inside the input field -> see value in <input>
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form className= "input-form">
            <input value={inputText} onChange={inputTextHandler} type="text"  className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit" >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
             </div>
        </form>
    );
};

export default Form; 