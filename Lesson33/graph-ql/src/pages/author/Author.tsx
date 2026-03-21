import React from 'react'
import ErrorPage from '../ErrorPage';
import AuthorList from '../../components/authors/AuthorList';
import { useParams } from 'react-router-dom';
import { GET_AUTHOR } from '../../graphql/queries/get-author';
import { useQuery } from '@apollo/client/react';
import type { IAuthor } from '../../interfaces/author.interface';

type AuthorQuery = {
  author: IAuthor[] | undefined;
};

const Author: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<AuthorQuery>(GET_AUTHOR, {
    variables: { gameId: id }
  });

  if (loading) return <h1>Loading . . .</h1>
  if (error) return <ErrorPage />

  return (
    <div>
      <AuthorList author={data?.author} />
    </div>
  )
}

export default Author
