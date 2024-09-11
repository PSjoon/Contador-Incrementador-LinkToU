import "./App.css"
import { Counter } from "./utils/Counter"

function App() {
  const { count, error, handleIncrement, handleDecrement, handleReset } =
    Counter()

  return (
    <>
      <main className="container">
        <p>{count}</p>
        <section className="section">
          <button type="button" className="button" onClick={handleIncrement}>
            Incrementar
          </button>
          <button type="button" className="button" onClick={handleDecrement}>
            Decrementar
          </button>
          <button type="button" className="button" onClick={handleReset}>
            Resetar
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </section>
      </main>
    </>
  )
}

export default App
