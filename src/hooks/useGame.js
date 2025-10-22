import axios from "axios";
import { useEffect, useState } from "react";

const useGame = () => {
  const [gamesData, setGamesData] = useState([]);
  const [gameLoading, setGameLoading] = useState(true);
  const [gameError, setGameError] = useState(null);
  useEffect(() => {
    setGameLoading(true);
    axios
      .get("../gamesData.json")
      .then((res) => setGamesData(res.data))
      .catch((err) => setGameError(err))
      .finally(() => setGameLoading(false));
  }, []);
  return { gamesData, gameLoading, gameError };
};

export default useGame;
