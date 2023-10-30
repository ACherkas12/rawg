import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Games } from "./pages/Games/Games";
import { GameDetails } from "./pages/GameDetails/GameDetails";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Header />
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<Games />} />
          <Route path="/:gameId" element={<GameDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
