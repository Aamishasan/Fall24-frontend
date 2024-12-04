import React, { useState } from 'react'
import FormComponent from './Components/formComponent/FormComponent'
import DisplayComponent from './Components/Display/DisplayComponent'

const App = () => {

  const [tasks, setTasks]= useState([])

  const handleTasks = (name,detail)=>{
    setTasks(
      ()=>{
        return [...tasks, {name:name, detail:detail}]
      }
    )
    console.log('parent component')
    console.log(name,detail)
    console.log(tasks)
  }

  return (
    
      <>
        <h1>To-Do App</h1>
        <h3>Please enter your task</h3>
        <FormComponent handleTasks={handleTasks} />
        <DisplayComponent tasks={tasks} />

      </>
    
  )
}

export default App