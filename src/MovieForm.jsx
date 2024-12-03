import { useState } from "react";

export default ({ setMovies }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
   image: "",
    rating: null,
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

 
  const addMovie = (e) => {
    e.preventDefault();


    if (!newMovie.title || !newMovie.description || !newMovie.image || !newMovie.rating) {
      alert("Please fill all the fields.");
      return;
    }


    setMovies((prevMovies) => [...prevMovies, { ...newMovie, rating: parseFloat(newMovie.rating) }]);


    setNewMovie({ title: "", description: "",image: "", rating: "" });
  };

  return (
    <div>
      <form
        className="flex flex-col gap-3 justify-center m-40 border p-4 shadow-xl border-black max-w-screen-md mx-auto"
        onSubmit={addMovie}
      >
        <h1 className="text-center text-3xl font-bold">Add a movie</h1>

        <label className="font-bold text-xl" htmlFor="title">
          Movie title
        </label>
        <input
          className="border px-2 py-1 border-black"
          id="title"
          name="title"
          type="text"
          placeholder="Movie title"
          onChange={handleChange}
          value={newMovie.title}
        />

        <label className="font-bold text-xl" htmlFor="description">
          Movie Description
        </label>
        <input
          className="border px-2 py-1 border-black"
          id="description"
          name="description"
          type="text"
          placeholder="Movie description"
          onChange={handleChange}
          value={newMovie.description}
        />

        <label className="font-bold text-xl" htmlFor="url">
          Movie Image
        </label>
        <input
          className="border px-2 py-1 border-black"
          id="url"
          name="image"
          type="text"
          placeholder="Movie Image"
          onChange={handleChange}
          value={newMovie.image}
        />

        <label className="font-bold text-xl" htmlFor="rating">
          Rating
        </label>
        <input
          className="border px-2 py-1 border-black"
          id="rating"
          name="rating"
          type="number"
          placeholder="Movie rating"
          onChange={handleChange}
          value={newMovie.rating}
        />

        <button className="border bg-black text-white font-bold p-2">
          Add a movie
        </button>
      </form>
    </div>
  );
};
