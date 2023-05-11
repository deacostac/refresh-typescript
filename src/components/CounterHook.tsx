import { useCounter } from "../hooks/useCounter"


const CounterHook = () => {

 const { valor, acumular} = useCounter(5)


  return (
    <>
        <h3>CounterHook</h3>
        <button className="btn btn-primary" onClick={() => acumular(-1)}>
            -1
        </button>
        &nbsp;
        <span>{valor}</span>
        &nbsp;
        <button className="btn btn-primary" onClick={() => acumular(1)}>
            +1
        </button>
    </>
  )
}

export default CounterHook