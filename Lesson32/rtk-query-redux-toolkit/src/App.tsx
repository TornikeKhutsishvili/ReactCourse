import { Suspense } from "react"
import Router from "./routes/Router"

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  )
}

export default App
