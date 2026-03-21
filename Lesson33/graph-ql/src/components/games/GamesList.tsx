import React from "react";
import GamesItem from "./GamesItem";
import type { IGames } from "../../interfaces/games.interface";

interface GamesListProps {
  games: IGames[] | undefined;
}

const GamesList: React.FC<GamesListProps> = ({ games }) => {
  return (
    <div className="grid-wrapper">
      <div className="grid">
        {games?.map(({ id, platform, title }) => (
          <GamesItem key={id} id={id} title={title} platform={platform} />
        ))}
      </div>
    </div>
  );
};

export default GamesList;
