import WeekClass from './components/component1/WeekClass'


function App () {

  return (
 
      <div >
        front end web development
        <WeekClass/>
        <WeekClass2/>
      </div>
      
   
  )
}

// function WeekClass (){
//   return(
//     <div>
//       <h1>Week1 Class 2</h1>
//     </div>
//   )
// }

function WeekClass2 (){
  return(
    <div className='mainWeek'>
      <h1>Week1 Class 3</h1>
    </div>
  )
}



export default App
