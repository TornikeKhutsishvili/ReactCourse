import React from 'react'
import { useNavigate } from 'react-router-dom';

interface AuthorsItemProps {
  id: string;
  name: string;
  verified: boolean;
}

const AuthorsItem:React.FC<AuthorsItemProps> = ({ id, name, verified }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/authors/${id}`)} className='card'>
      <h1>{name}</h1>
      <p>{verified}</p>
    </div>
  )
}

export default AuthorsItem