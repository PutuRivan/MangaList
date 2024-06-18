import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardSkeleton from "../Components/Skeleton/CardSkeleton";
import { Heart, Star } from "@phosphor-icons/react";

const TopManga = () => {
    const [Manga, setManga] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [LastPage, setLastPage] = useState([]);
    const fetchData = async () => {
        setLoading(true);
        const response = await fetch(`https://api.jikan.moe/v4/top/manga?page=${page}`);
        const data = await response.json();
        setLoading(false);
        setManga(data.data);
        setLastPage(data.pagination.last_visible_page);
    };
    useEffect(() => {
        fetchData();
    }, [page]);

    const scrollTop = () => {
        scrollTo({
          behavior:"smooth",
          top:"0"
        })
      }
    
      const handlePrevPage = () =>{
          setPage((prevState) => prevState - 1)
          scrollTop()
        }
      
    
    
      const handleNextPage = () =>{
        setPage((prevState) => prevState + 1)
        scrollTop()
      }

  return (
    <>
      <div className="flex justify-center text-color-white mt-5">
        <h1 className="text-2xl">TOP MANGA #{page}</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 lg:m-5 ">
      {loading ? (
        <CardSkeleton/>
      ) : (
        Manga.map((item) => (
          <Link
            to={`/Manga/${item.mal_id}`}
            key={item.mal_id}
            className="wrapper mt-5 lg:mt-0"
          >
            <div className="card">
              <img src={item.images.webp.image_url} alt="" />
              <div className="info mx-10">
                <h1 className="text-center text-lg font-bold text-color-white">
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
        ))
      )}
    </div>

    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-white text-2xl">
        {page <= 1 ? null :
          <button onClick={handlePrevPage} className="transition-all hover:text-color-Zaffre">Prev</button>
        }
        <p>{page} of {LastPage}</p>
  
        {page >= {LastPage} ? null :
          <button  onClick={handleNextPage} className="transition-all hover:text-color-Zaffre">Next</button>
        }
      </div>
    </>
  );
};

export default TopManga;
