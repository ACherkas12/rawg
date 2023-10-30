import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IGame } from "../../interfaces/game";
import { makeRequest } from "../../helpers/makeRequest";

export function GameDetails() {
  const { gameId } = useParams();
  const [details, setDetails] = useState<IGame | null>(null);

  useEffect(() => {
    makeRequest(`/games/${gameId}`).then((data) => setDetails(data));
  }, [gameId]);

  return <div>{details?.name}</div>;
}
