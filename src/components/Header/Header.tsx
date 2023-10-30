import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header>
      {location.pathname === '' <button onClick={() => navigate(-1)}>Back</button>}
    </header>
  );
}
