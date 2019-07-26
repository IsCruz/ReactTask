import React from 'react'
function AddTask (props) {
  return (
    <div className="container">
    <form onSubmit={props.onAddTask} className="row">
      <div className="row">
      <label htmlFor='add-task-area' className="col-lg">Ingresa la tarea</label>
      </div>
      <div className="row">
      <textarea
        value={props.taskValue}
        onChange={props.onChange}
        className="col-lg"
      />
      </div>
      <div className="row">
      <button className="col-lg btn btn-primary button-submit"> Agregar task a lista</button>
      </div>
      
    </form>
    </div>
  )
}

export default AddTask
