import { useState } from "react"

export const useCounter = (initial: number = 0) => {
    const [count, setCount] = useState<number>(initial)

    const handleCount = (numero: number) => {
      setCount(count + numero)
    }

    return {
        valor: count,
        acumular: handleCount,
    }
}
