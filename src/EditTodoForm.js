import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';
import { DispatchContext } from './context/todos.context';

function EditTodoForm({id, task, toogleEditForm}){
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  return(
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({type: "EDIT", id: id, newTask: value});
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