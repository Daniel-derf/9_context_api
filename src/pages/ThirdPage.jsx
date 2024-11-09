import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const ThirdPage = () => {
  const { counter } = useContext(CounterContext)


  return (
    <div>
      <h1>Produtos</h1>
      
      <p>Valor do contador: {counter}</p>
    </div>
    
  )
}

export default ThirdPage