import React, { useRef } from 'react'

const FormComponent = ( {handleTasks} ) => {

    const nameRef= useRef()
    const detailRef = useRef()

    const handleSubmit = (event)=>{
      event.preventDefault()
      const taskName= nameRef.current.value;
      const taskDetail= detailRef.current.value;
      // console.log(taskName, taskDetail)
      handleTasks(taskName,taskDetail)
      event.currentTarget.reset()
    }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="name">Task Name: </label>
      <input type="text" id='name' ref={nameRef} />

      <br />
      <br />
      <label htmlFor="detail">Description: </label>
      <input type="text" id='detail' ref={detailRef} />

      <br />
      <br />
      <button type="submit" >Add Task</button>

      <br />
      <br />

    </form>
  )
}

export default FormComponent