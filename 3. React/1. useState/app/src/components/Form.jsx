
const Form = ({input, setInput, addTodo, setError, error}) => {
  return (
      <form onSubmit={(e) => {
          e.preventDefault();
          if ( input.length <= 3 ) {
              setError(true)
          } else {
              setError(false);
              addTodo(input);
              setInput("");
         }     
       }}>
          <input
              type="text"
              value={input}
              onChange={(e) => {
                  setError(false);
                  setInput(e.target.value);
             }}
              className={error ? "input input--error" : "input"}
          />
          <button disabled={error}>add todo</button>
      </form>
  )
}

export default Form;