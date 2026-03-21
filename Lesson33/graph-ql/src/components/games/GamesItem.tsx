import React from "react";
import { useNavigate } from "react-router-dom";

interface GamesItemProps {
  id: string;
  title: string;
  platform: string[];
}

const GamesItem: React.FC<GamesItemProps> = ({ id, title, platform }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/games/${id}`)} className='card'>
      <h1>{title}</h1>
      <p>
        {platform?.map((p) => (
          <li key={id}>{p}</li>
        ))}
      </p>
    </div>
  );
};

export default GamesItem;
