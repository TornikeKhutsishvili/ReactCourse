import React from 'react'
import Posts from './posts/Posts';

const Home:React.FC = () => {
  return (
    <div className="home-wrapper">
      <Posts />
    </div>
  )
}

export default Home;