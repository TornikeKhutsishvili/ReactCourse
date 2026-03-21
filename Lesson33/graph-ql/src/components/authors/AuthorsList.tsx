import React from 'react'
import AuthorsItem from './AuthorsItem';
import type { IAuthors } from '../../interfaces/author.interface';

interface AuthorsListProps {
  authors: IAuthors[] | undefined;
}

const AuthorsList: React.FC<AuthorsListProps> = ({ authors }) => {
  return (
    <div className="grid-wrapper">
      <div className='grid'>
        {authors?.map(({ id, name, verified }) => (
          <AuthorsItem key={id} id={id} name={name} verified={verified} />
        ))}
      </div>
    </div>
  )
}

export default AuthorsList