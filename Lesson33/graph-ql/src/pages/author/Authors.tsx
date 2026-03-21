import React from 'react'
import type { IAuthors } from '../../interfaces/author.interface';
import { useQuery } from '@apollo/client/react';
import { GET_AUTHORS } from '../../graphql/queries/get-authors';
import ErrorPage from '../ErrorPage';
import AuthorsList from '../../components/authors/AuthorsList';

type AuthorsQuery = {
  authors: IAuthors[] | undefined;
};

const Authors: React.FC = () => {
  const { data, loading, error } = useQuery<AuthorsQuery>(GET_AUTHORS);

  if (loading) return <h1>Loading . . .</h1>
  if (error) return <ErrorPage />

  return (
    <div>
      <AuthorsList authors={data?.authors} />
    </div>
  )
}

export default Authors