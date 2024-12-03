export default ({ movie }) => {
    return (
      <div className=" text-gray-100 shadow-lg rounded-lg max-w-screen-lg mx-auto border border-black">
        <img
          src={movie.image}
          className=" w-auto h-auto object-cover rounded-t-lg"
        />
        <div className="p-5">
          <h2 className="text-black text-3xl font-bold">{movie.title}</h2>
          <p className="text-gray-600 tracking-wide font-light ">{movie.description}</p>
          <div className="text-center mt-7">
            <span className="px-3 py-1 rounded-full text-sm font-semibold text-red-400">
              Rating : {movie.rating} / 10
            </span>
            
          </div>
        </div>
      </div>
    );
  };
  