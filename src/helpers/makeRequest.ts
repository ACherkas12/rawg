export const BASE_URL = "https://api.rawg.io/api/games";
import { API_KEY } from "../constants/api";

export async function makeRequest(requestParams: string) {
  const response = await fetch(
    `https://api.rawg.io/api${requestParams}?key=${API_KEY}`,
    {
      method: "GET",
    }
  );
  return await response.json();
}
