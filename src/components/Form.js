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



const Form = ({ setInputText, todos, setTodos, inputText }) => {
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
    return (
        <form className= "input-form">
            <input value={inputText} onChange={inputTextHandler} type="text"  className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit" >
                <i className="fas fa-plus-square"></i>
            </button>
            
        </form>
    );
};

export default Form; 