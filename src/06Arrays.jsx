import { useState } from 'react'


const Part = ({part}) =>{
  return(
    <li>{part.name}: {part.exercises}</li>
  )
}

const Course = ( props )=>{
  const {course, module} = props
  const total = course[module].parts.reduce((acc, part) => {
    return acc + part.exercises
  },0)
  return(
    <header>
      <h2>{course[module].name}</h2>
      <ul>
        {course[module].parts.map(part =>(
          <Part key={part.id} part={part} />
        ))}
      </ul>
      <p>Total of {total} excercises</p>
    </header>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course course={courses} module={0} />
      <Course course={courses} module={1} />
    </div>
  )
}



export default App