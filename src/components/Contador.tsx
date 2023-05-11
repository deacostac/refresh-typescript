import { useState } from "react"

const Contador = () => {

  const [count, setCount] = useState<number>(0)

  const handleCount = (numero: number) => {
    setCount(count + numero)
  }


  return (
    <>
        <h3>Contador</h3>
        <button className="btn btn-primary" onClick={() => handleCount(-1)}>
            -1
        </button>
        &nbsp;
        <span>{count}</span>
        &nbsp;
        <button className="btn btn-primary" onClick={() => handleCount(1)}>
            +1
        </button>
    </>
  )
}

export default Contador