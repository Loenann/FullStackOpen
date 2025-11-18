const Course = ({course}) =>{
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Header = ({name}) => <h2>{name}</h2>

const Content = ({parts}) => (
  <div>
    {parts.map(part => (
      <Part key = {part.id} name={part.name} exercises={part.exercises}/>
    ))}
  </div>
)

const Part = ({name, exercises}) => (
  <p>{name} {exercises}</p>
)

const Total = ({parts}) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0)

  return <p><strong>total of {total} exercises</strong></p>
}

export default Course