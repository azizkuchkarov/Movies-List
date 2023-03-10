import "./movie-list.css";
import MovieListItem from "../movie-list-item/movie-list-item";
const MovieList = ({ data }) => {
  return (
    <div className="movie-list">
      {data.map((item) => (
        <MovieListItem name={item.name} number={item.viewers} />
      ))}
    </div>
  );
};
export default MovieList;
