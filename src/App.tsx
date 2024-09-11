import { Counter } from "./utils/Counter"
import { Header } from "./components/Header"

function App() {
  const { count, error, handleIncrement, handleDecrement, handleReset } =
    Counter()

  return (
    <>
      <Header />

      <main className="container">
        <p className="counter-value">{count}</p>
        <section className="section">
          <button type="button" id="increment" onClick={handleIncrement}>
            Incrementar
          </button>
          <button type="button" id="decrement" onClick={handleDecrement}>
            Decrementar
          </button>
          <button type="button" id="reset" onClick={handleReset}>
            Resetar
          </button>
          {error && <p className="error">{error}</p>}
        </section>
      </main>
    </>
  )
}

export default App
