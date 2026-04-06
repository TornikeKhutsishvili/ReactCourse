import { Suspense } from 'react';
import AppRouter from './routes/AppRouter';
import './App.css'

const App = () => {
  const loading = "./public/loading.gif"

  return (
    <>
      <Suspense fallback={
        <div className="loader m-auto">
          <img className='w-20' src={loading} alt="loading..." />
        </div>
      }>
        <AppRouter />
      </Suspense>
    </>
  )
}

export default App;