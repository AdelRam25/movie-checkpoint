import MovieCard from "./MovieCard";
export default ({ movies }) => {
    return (
      <div className="grid grid-cols-3 gap-6 max-w-screen-md mx-auto">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  };
  
