import { useEffect, useState } from 'react';
//movies imports
import moviesData from '../../movies.json';
import MovieModel from '../../model/moviesClass.jsx';
import MovieCardComponent from '../../movieCard.jsx';

//This page renders when: http://localhost:3000/#/MoviesList


function MoviesList(){
//define the movies state 
const[movies, setMovies] = useState([]);

//get movies json on init 
 useEffect( ()=>{
   setMovies(moviesData.map(  
       (movie)=> 
         new MovieModel(movie.MovieName, 
             movie.LengthInMinutes,
             movie.PosterImage, 
             movie.Director, 
             movie.MainStars)))},[]);

//prepare the maping of data to card with class model (movies)            
 const moviesCards = movies.map(MovieModel => <MovieCardComponent  MovieModel={MovieModel} />)
 

return(
        <div  className="container">
        <h1>MOVIES</h1>
        {moviesCards}
        </div>
    )
}

export default MoviesList;