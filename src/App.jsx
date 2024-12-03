import { useState } from "react";
import MovieList from "./MovieList"
import MovieForm from "./MovieForm"

export default () => {


  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Mr. Bean's Holiday",
      description: "Mr. Bean goes on a vacation to the South of France, but his time there turns into an adventure full of hilarious mishaps.",
      image: "https://upload.wikimedia.org/wikipedia/en/8/87/Mr_beans_holiday_ver7.jpg",
      rating: 6.3,
    },
    {
      id: 2,
      title: "Bean",
      description: "The bumbling Mr. Bean is assigned to be the British government's representative at the unveiling of a new painting at a Los Angeles art gallery.",
      image: "https://upload.wikimedia.org/wikipedia/en/3/37/Bean_movie_poster.jpg",
      rating: 6.5,
    },
    {
      id: 3,
      title: "Mr. Bean: The Animated Series",
      description: "The animated series based on the famous Mr. Bean character, where he embarks on a variety of comedic adventures.",
      image: "https://upload.wikimedia.org/wikipedia/en/5/5d/Mr-bean-animated-episode-opening-card.PNG",
      rating: 7.0,
    }
  ]);

  return (
  <div>
      <MovieForm movies={movies} setMovies={setMovies} />
      <MovieList movies={movies} />
     
     
  </div>

    
  )
}