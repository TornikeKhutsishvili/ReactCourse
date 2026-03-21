import React from 'react'
import type { IAuthor } from '../../interfaces/author.interface';
import AuthorItem from './AuthorItem';

interface AuthorListProps {
  author: IAuthor[] | undefined;
}

const AuthorList: React.FC<AuthorListProps> = ({ author }) => {
  return (
    <div>
      {author?.map(({ id, name, verified }) => (
        <AuthorItem key={id} name={name} verified={verified} />
      ))}
    </div>
  )
}

export default AuthorList