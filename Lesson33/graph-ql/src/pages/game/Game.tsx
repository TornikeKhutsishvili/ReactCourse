import { useQuery } from '@apollo/client/react'
import { useParams } from 'react-router-dom'
import { GET_GAME } from '../../graphql/queries/get-game'
import React from 'react'
import ErrorPage from '../ErrorPage'
import GameList from '../../components/games/GameList'
import type { IGame } from '../../interfaces/games.interface'

type GameQuery = {
  game: IGame[] | undefined;
};

const Game: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useQuery<GameQuery>(GET_GAME, {
    variables: { gameId: id }
  });

  if (loading) return <h1>Loading . . .</h1>
  if (error) return <ErrorPage />

  return (
    <div>
      <GameList game={data?.game} />
    </div>
  )
}

export default Game
