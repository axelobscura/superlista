import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({id, editTodo, task, toogleEditForm}){
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