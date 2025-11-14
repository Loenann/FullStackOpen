const Part = (props) =>{
  console.log(props)
  return (
    <div>
      <p>{props.part} {props.total}</p>
    </div>
  ) 
}
const Header = (props) =>{
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Part part={course.parts[0].name} total={course.parts[0].exercises}/>
      <Part part={course.parts[1].name} total={course.parts[1].exercises}/>
      <Part part={course.parts[2].name} total={course.parts[2].exercises}/>
    </div>
  )
}

export default App