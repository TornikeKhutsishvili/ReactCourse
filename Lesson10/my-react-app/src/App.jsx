import { useState } from 'react'
import tornikeLogo from './assets/Tornike.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);


  const handleClick = () => {
    setCount((prev) => prev + 1);

    const colors = ["#ffbb00", "#00aaff", "#ee4444", "#77dd77"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
  };


  return (
    <>
      <div className="content">
        <div>
            <img src={tornikeLogo} className="logo" alt="Tornike's logo" />
        </div>
        <h1>Hello, I am learner React in SkillWill</h1>
        <div className="card">
          <button onClick={handleClick}>
            you can change the backround color - changed {count} times
          </button>
        </div>
      </div>
    </>
  )

}

export default App
