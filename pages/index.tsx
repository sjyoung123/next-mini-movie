import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const API_KEY = "97cedad43bd4ca832c9ecd9de8a27f3c";

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
      const data = await (
        await fetch(
          ` https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=1`
        )
      ).json();
      setMovies(data);
      setLoading(false);
    })();
  }, []);
  console.log(movies?.results);
  return (
    <>
      <Seo title="Home" />
      {loading ? (
        <span>Loading...</span>
      ) : (
        movies?.results.map((movie) => (
          <div key={movie.id}>
            <h4>{movie.title}</h4>
          </div>
        ))
      )}
    </>
  );
};

export default Home;
