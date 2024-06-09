import React from "react";
import {  useParams } from "react-router-dom";
import Card from "../Components/MangaList/Card";
import Judul from "../Components/MangaList/Header";

const Search = () => {
  const { keyword } = useParams();
  const decodedKeyword = decodeURI(keyword);

  return (
    <>
      <Judul Title={`Pencarian untuk ${decodedKeyword}`} />
      <Card resource={"manga"} query={`q=${decodedKeyword}`} />
    </>
  );
};

export default Search;
