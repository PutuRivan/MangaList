import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailSkeleton from "../Components/Skeleton/DetailSkeleton";

const Details = () => {
  const { id } = useParams();
  const [Manga, setManga] = useState(null);

  const fetchData = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/manga/${id}`);
    const data = await response.json();
    setManga(data.data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="m-5 mt-10">
      {Manga ? (
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-5 justify-center lg:items-start items-center ">
          <div>
            <h1 className="text-2xl font-bold text-white text-center">
              {Manga.title}
            </h1>
            <img src={Manga.images.webp.image_url} alt="" />
            <div className="flex flex-col text-white text-l mt-5">
              <div className="flex flex-row">
                <p>Score : </p>
                <p>{Manga.score}</p>
              </div>
              <div className="flex flex-row">
                <p>Rank : </p>
                <p>{Manga.rank}</p>
              </div>
              <div className="flex flex-row">
                <p>Status : </p>
                <p>{Manga.status}</p>
              </div>
              <div className="flex flex-row">
                <p>Chapter : </p>
                <p>{Manga.chapters}</p>
              </div>
              <div className="flex flex-row">
                <p>Popularity : </p>
                <p>{Manga.popularity}</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <p className="text-xl text-white">Sinopsis :</p>
            <p className="text-l text-white">{Manga.synopsis}</p>
          </div>
        </div>
      ) : (
        <DetailSkeleton />
      )}
    </div>
  );
};

export default Details;
