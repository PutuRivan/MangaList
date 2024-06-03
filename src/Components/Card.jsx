import React, { useEffect, useState } from "react";
import "../Style/Card.css";
import { Heart, Star } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
const Card = () => {
  const [Manga, setManga] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://api.jikan.moe/v4/manga");
    const data = await response.json();
    setManga(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:m-5 ">
      {Manga.map((item) => (
        <Link
          to={`/Manga/${item.mal_id}`}
          key={item.mal_id}
          className="wrapper mt-5 lg:mt-0"
        >
          <div className="card">
            <img src={item.images.webp.image_url} alt="" />
            <div className="info mx-10">
              <h1 className="text-center text-lg font-bold text-white">
                {item.title}
              </h1>
              <div className="flex justify-between gap-3">
                <div className="flex gap-1 items-center justify-center">
                  <Star size={15} fill="#FFC107" />
                  <p className="mb-2">{item.score}</p>
                </div>
                <div className="flex gap-1 items-center justify-center">
                  <Heart size={15} fill="red" />
                  <p className="mb-2">{item.favorites}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
