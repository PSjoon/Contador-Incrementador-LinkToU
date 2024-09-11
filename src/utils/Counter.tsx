import { useState, useEffect } from "react"

export function Counter() {
  const [count, setCount] = useState(() => {
    const saveCount = localStorage.getItem("count")
    return saveCount !== null ? parseInt(saveCount, 10) : 0
  })
  const [error, setError] = useState("")

  useEffect(() => {
    localStorage.setItem("count", count.toString())
  }, [count])

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      setError("O valor não pode ser negativo")
    }
  }

  const handleReset = () => {
    setCount(0)
    setError("")
  }

  useEffect(() => {
    if (count > 0 && error) {
      setError("")
    }
  }, [count, error])

  return { count, error, handleIncrement, handleDecrement, handleReset }
}
