import React from "react";
import GameItem from "./GameItem";
import type { IGame } from "../../interfaces/games.interface";

interface GameListProps {
  game: IGame[] | undefined;
}

const GameList: React.FC<GameListProps> = ({ game }) => {
  return (
    <div>
      {game?.map(({ id, platform, title }) => (
        <GameItem key={id} id={id} title={title} platform={platform} />
      ))}
    </div>
  );
};

export default GameList;
