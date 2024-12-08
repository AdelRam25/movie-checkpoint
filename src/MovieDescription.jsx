import { useParams, Link } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { title } = useParams(); 
  const decodedTitle = decodeURIComponent(title);
  const movie = movies.find((movie) => movie.title === decodedTitle);

  return (
    <div className="text-gray-100 shadow-lg rounded-lg max-w-screen-lg mx-auto border border-black m-10">
      <div className="mt-8">
          <h3 className="text-xl font-semibold">Trailer</h3>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${movie.embed}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      <div className="p-5">
        <h2 className="text-black text-3xl font-bold">{movie.title}</h2>
        <p className="text-gray-600 tracking-wide font-light">{movie.description}</p>
        <div className="text-center mt-7">
          <span className="px-3 py-1 rounded-full text-sm font-semibold text-red-400">
            Rating: {movie.rating} / 10
          </span>
        </div>

        


        <Link to="/">
          <button className="px-4 py-2 text-white rounded-md mt-4">
            Back to Movie List
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDescription;
