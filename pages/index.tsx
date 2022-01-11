import { useRouter } from "next/router";
import Seo from "../components/Seo";

interface IMovie {
  poster_path: string | null;
  overview: string;
  title: string;
  id: number;
  backdrop_path: string | null;
}

interface IMovies {
  data: {
    results: IMovie[];
  };
}

const Home = ({ data: movies }: IMovies) => {
  const router = useRouter();
  const onClick = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <>
      <div className="container">
        <Seo title="Home" />
        {movies?.results.map((movie) => (
          <div
            onClick={() => onClick(movie.id, movie.title)}
            className="movie"
            key={movie.id}
          >
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie.title}</h4>
          </div>
        ))}
        <style jsx>{`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: 20px;
            gap: 20px;
          }
          .movie {
            cursor: pointer;
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

//server-side
export async function getServerSideProps() {
  const data = await (await fetch("http://localhost:3000/api/movies")).json();
  return {
    props: {
      data,
    },
  };
}
