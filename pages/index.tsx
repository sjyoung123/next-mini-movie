import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

interface IMovie {
  poster_path: string | null;
  overview: string;
  title: string;
  id: number;
  backdrop_path: string | null;
}

interface IMovies {
  results: IMovie[];
}

const Home: NextPage = () => {
  const [movies, setMovies] = useState<IMovies>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const data = await (await fetch("/api/movies")).json();
      setMovies(data);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      <div className="container">
        <Seo title="Home" />
        {loading ? (
          <span>Loading...</span>
        ) : (
          movies?.results.map((movie) => (
            <div className="movie" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <h4>{movie.title}</h4>
            </div>
          ))
        )}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie img {
            max-width: 100%;
            border-radius: 12px;
            transition: transform 0.2s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          }
          .movie:hover img {
            transform: scale(1.05) translateY(-10px);
          }
          .movie h4 {
            font-size: 18px;
            text-align: center;
          }
        `}</style>
      </div>
    </>
  );
};

export default Home;
