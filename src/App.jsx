import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Details from "./Pages/Details";
function App() {
  const navigate = useNavigate();
  
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Manga/:id" element={<Details  />} />
          <Route path="/Search/:keyword" element={<Search />} />
        </Routes>
    </>
  );
}

export default App;
