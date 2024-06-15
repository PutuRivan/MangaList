import React from "react";
import Card from "../Components/MangaList/Card";
import Judul from "../Components/MangaList/Header";
const Home = () => {
  return (
    <>
      <section>
        <Judul Title="Top Manga" linkHref="/TopManga" linkTitle="See More"/>
        <Card resource={`manga`} query={"limit=10"} />
      </section>
    </>
  );
};

export default Home;
