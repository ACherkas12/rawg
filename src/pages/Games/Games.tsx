import "./Games.css";
import { GameCard } from "../../components/GameCard/GameCard";
import { useGetGames } from "../../hooks/useGetGames";

export function Games() {
  const [games, {isLoading}] = useGetGames()

  return (
    <div className="games-grid">
      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
      {isLoading && <p>isLoading</p>}
    </div>
  );
}
