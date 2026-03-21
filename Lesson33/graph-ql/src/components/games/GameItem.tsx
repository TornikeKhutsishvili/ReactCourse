import React from 'react'

interface GameItemProps {
  id: string,
  title: string,
  platform: string[]
}

const GameItem: React.FC<GameItemProps> = ({ id, title, platform }) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>
          {platform?.map(p => (
            <li key={id}>{p}</li>
          ))}
        </p>
    </div>
  )
}

export default GameItem