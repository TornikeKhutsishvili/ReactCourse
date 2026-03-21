import { useQuery } from '@apollo/client/react'
import { GET_GAMES } from '../../graphql/queries/get-games';
import React from 'react'
import ErrorPage from '../ErrorPage';
import GamesList from '../../components/games/GamesList';
import type { IGames } from '../../interfaces/games.interface';

type GamesQuery = {
  games: IGames[] | undefined;
};

const Games: React.FC = () => {
  const { data, loading, error } = useQuery<GamesQuery>(GET_GAMES);

  if (loading) return <h1>Loading . . .</h1>
  if (error) return <ErrorPage />

  return (
    <div>
      <GamesList games={data?.games} />
    </div>
  )
}

export default Games