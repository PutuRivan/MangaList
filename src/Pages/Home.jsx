import React from "react";
import Card from "../Components/MangaList/Card";
import Judul from "../Components/MangaList/Header";
const Home = () => {
  return (
    <>
      <section>
        <Judul Title="Top Manga"  />
        <Card resource={`top/manga`} query={"limit=20"} />
      </section>
    </>
  );
};

export default Home;
