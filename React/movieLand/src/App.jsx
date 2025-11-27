import { useState, useEffect } from 'react'

import MovieCard from './MovieCard'


const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=3f3dfb2d'

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState('')


  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`)
    const data = await response.json()
    setMovies(data.Search)

  }

  useEffect(() => {
    searchMovie('Batman')
  }, [])
  return (

    <>
      <h1>MovieLand</h1>

      <div>
        <input type="text" placeholder='Search for Movie' value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
        <button onClick={() => { searchMovie(searchTerm) }} >Search</button>
      </div>

      {movies?.length > 0 ? (
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie}></MovieCard>
          ))}
        </div>
      ) : (
        <div>No Movies Found</div>
      )}
      {/* <MovieCard /> */}
    </>
  )
}

export default App
