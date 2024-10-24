import React from "react"

const Header = (props) =>{
  return(
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}
//padre de la lista
const Content = (props) =>{
  return(
    <div>
      <Part part={props.parts[0].name} excercise={props.parts[0].excercises}/>
      <Part part={props.parts[1].name} excercise={props.parts[1].excercises} />
      <Part part={props.parts[2].name} excercise={props.parts[2].excercises} />
    </div>
  )
}
// Elemento de la lista
const Part = (props)=>{
  return(
    <div>
      <p>{props.part} {props.excercise}</p>
    </div>
  )
}

const Total = (props) =>{
  return(
    <div>
      <p>Number of exercises {props.parts[0].excercises + props.parts[1].excercises + props.parts[2].excercises}</p>
    </div>
  )
}

const App = () =>{
  const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      excercises: 10
    },
    {
      name: 'Using props to pass data',
      excercises: 7
    },
    {
      name: 'State of a component',
      excercises: 14
    }]
  }
  return(
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
export default App
