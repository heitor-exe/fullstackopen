import { Header } from "./components/Header.jsx"
import { Content } from "./components/Content.jsx"
import { Total } from "./components/Total.jsx"





const App = () => {
  const course = {
    name: 'Desenvolvimento de aplicação Half Stack',
    parts: [
      {
        name: 'Fundamentos da biblioteca React',
        exercises: 10
      },
      {
        name: 'Usando props para passar dados',
        exercises: 7
      },
      {
        name: 'Estado de um componente',
        exercises: 14
      }
    ]
  }


  // Utilização de variáveis
  // const part1 = 'Fundamentos da biblioteca React'
  // const exercises1 = 10
  // const part2 = 'Usando props para passar dados'
  // const exercises2 = 7
  // const part3 = 'Estado de um componente'
  // const exercises3 = 14


  // Utilização de objetos
  // const part1 = {
  //   name: 'Fundamentos da biblioteca React',
  //   exercises: 10
  // }

  // const part2 = {
  //   name: 'Usando props para passar dados',
  //   exercises: 7
  // }

  // const part3 = {
  //   name: 'Estado de um componente',
  //   exercises: 14
  // }

  return (
    <div>
      <Header course={course.name} />
      <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises} part2={course.parts[1].name} exercises2={course.parts[1].exercises} part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} />
    </div>
  )
}

export default App