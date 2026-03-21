import { Suspense } from "react"
import AppRouter from "./routes/AppRouter"

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </>
  )
}

export default App
