import { useEffect, useState } from "react";
import { makeRequest } from "../helpers/makeRequest";
import { IGame } from "../interfaces/game";

export function useGetGames(): [
  IGame[],
  { isLoading: boolean; isError: boolean }
] {
  const [games, setGames] = useState<IGame[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    makeRequest("/games")
      .then((data) => {
        setGames(data.results);
      })
      .catch((e) => {
        setIsError(true);
        console.log(e);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return [games, { isLoading, isError }];
}
