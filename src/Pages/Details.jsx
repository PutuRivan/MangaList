import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [Manga, setManga] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/manga/${id}`);
    const data = await response.json();
    setManga(data.data);
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  console.log(Manga);
  return (
    <div className="mt-5 flex flex-row w-full gap-5">
      {Manga.map((item) => (
        <div>
          <div>
            <img src={item.images.webp.image_url} alt="" />
            <div className="flex flex-col text-white text-l mt-5">
              <div className="flex flex-row">
                <p>Score : </p>
                <p>Popularity</p>
              </div>
              <div className="flex flex-row">
                <p>Rank : </p>
                <p>Popularity</p>
              </div>
              <div className="flex flex-row">
                <p>Status : </p>
                <p>Popularity</p>
              </div>
              <div className="flex flex-row">
                <p>Chapter : </p>
                <p>Popularity</p>
              </div>
              <div className="flex flex-row">
                <p>Popularity : </p>
                <p>Popularity</p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div>
              <h1 className="text-2xl font-bold text-white text-center">
                JUDUL
              </h1>
            </div>
            <p className="text-xl text-white">Sinopsis :</p>
            <p className="text-l text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus officiis, blanditiis assumenda unde ratione sint
              quibusdam perspiciatis deleniti eum praesentium eos vel magni
              necessitatibus fugit molestiae facilis corporis reprehenderit
              iusto nihil. Iusto omnis consequatur officia necessitatibus natus,
              consectetur distinctio libero. Ea vero deleniti, accusamus
              consequatur eius modi iure sunt sapiente?
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;
