


export default  () => {

    
    


const addItem = (e) => {
    // e.preventDefault();
    // setTodos([
        console.log("Hallo")
        
    // ])
}

return (
    <footer>
        <form>
            <input onChange={inputTextHandler} type="text" placeholder="new entry..."></input>
            <button onClick={addItem} ><i className="fas fa-plus"></i></button>
        </form>
      </footer>
    )


}

    




const Form = ({ setInputText, todos, setTodos, inputText }) => {
    //here I can write javascript code and function
   const inputTextHandler = (e) => {
       console.log(e.target.value);
       setInputText(e.target.value);
   }

   const submitTodoHandler = (e) => {
       e.preventDefault();  //stops from always refreshing the page -> see <button> onClick
       setTodos([
           ...TodoList,
           { text: inputText, completed: false, id: Math.random() * 1000}
       ]);
       setInputText('');    //so that you don't have to delete the text inside the input field -> see value in <input>
   };
   
    return (
        <form>
            <input onChange={inputTextHandler} type="text" className="input-todo">
                <button onClick={submitTodoHandler} className="add-button" type="submit">
                    <i className="plus-field plus"></i>
                </button>
            </input>
            <div className="filter-todo">
                <select name="todos" className="filter-todo">
                    <option value="All">All</option>
                    <option value="done">Done</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
        </form>
    );
}

export default Form;