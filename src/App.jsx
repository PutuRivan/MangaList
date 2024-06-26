import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Details from "./Pages/Details";
import TopManga from "./Pages/TopManga";
import Manga from "./Pages/Manga";
function App() {
  const navigate = useNavigate();
  
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Manga/:id" element={<Details  />} />
          <Route path="/Search/:keyword" element={<Search />} />
          <Route path="/TopManga" element={<TopManga/>}/>
          <Route path="/Manga" element={<Manga/>}/>
        </Routes>
    </>
  );
}

export default App;
