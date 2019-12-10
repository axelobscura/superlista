import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import { TodosContext } from './context/todos.context';

function EditTodoForm({id, task, toogleEditForm}){
  const { editTodo } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  return(
    <form onSubmit={(e) => {
      e.preventDefault();
      editTodo(id, value);
      reset();
      toogleEditForm();
    }}
    style={{width: '100%'}}
    >
      <TextField 
        margin="normal" 
        value={value} 
        onChange={handleChange}
        fullWidth 
        autoFocus
      />
    </form>
  )
}

export default EditTodoForm;