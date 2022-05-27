import React, { useContext } from 'react';
import MoviesContext from '../context/MoviesContext';
import Movie from './Movie';


const Movielist = () => {
    const {movies} = useContext(MoviesContext);

    return (
        <div className='container mt-3'>
            <div className='row'>
            {movies.map(movie =>(
                <div className='col-md-4' key={movie.id}>
                    <Movie 
                        movie={movie}
                    />
                </div>
            ))}
            </div>
        </div>
    );
}

export default Movielist;
