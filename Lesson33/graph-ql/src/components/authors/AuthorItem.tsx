import React from 'react'

interface AuthorItemProps {
  name: string;
  verified: boolean;
}

const AuthorItem: React.FC<AuthorItemProps> = ({ name, verified }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{verified}</p>
    </div>
  )
}

export default AuthorItem