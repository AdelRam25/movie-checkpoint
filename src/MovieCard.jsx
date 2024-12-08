import { Link} from "react-router-dom";

const MovieList = ({ movie }) => {
 
 
  return (
    <div className="grid grid-cols-3 gap-8 m-10">
      <div
        key={movie.id}
        className="text-gray-100 shadow-lg rounded-lg max-screen-md mx-auto border border-black"
      >
        <img
          src={movie.image}
          className="object-cover rounded-t-lg"

        />
        <div className="p-5">
          <h2 className="text-black text-3xl font-bold">{movie.title}</h2>
          <div className="text-center mt-7">
            <span className="px-3 py-1 rounded-full text-sm font-semibold text-red-400">
              Rating: {movie.rating} / 10
            </span>
          </div>

          <Link to={`/movies/${(movie.title)}`}>
            <button className="px-4 py-2 bg-black text-white rounded-md mt-4">
              View Description
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
