import { Link, generatePath } from "react-router-dom";
import { IGame } from "../../interfaces/game";

import "./GameCard.css";
import { ROUTES } from "../../constants/routes";

interface IGameCardProps {
  game: IGame;
}

export function GameCard({ game }: IGameCardProps) {
  const path = generatePath(ROUTES.gameDetails, {
    gameId: String(game.id),
  });

  return (
    <Link to={path}>
      <h3 className="game-card-name">{game.name}</h3>
      <img src={game.background_image} className="game-card-image" />
    </Link>
  );
}
