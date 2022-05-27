import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Movie = ({movie}) => {
    const {toggleFavoriteMovieToUser, user} = useContext(UserContext)

    const imgStyle ={
        height: '400px',
        objectFit: 'cover',
        objectPosition: 'top',
    }

    const isFavorite = user?.favoriteMovies?.includes(movie.id);

    return (
        <div className='card img-top'>
            <img
                src={movie.imageUrl}
                alt={movie.title}
                style={imgStyle}
            />
            <div className='card-body'>
                <h4>{movie.title}</h4>
                {user?.id &&
                        <button 
                        className={`btn ${isFavorite ? 'btn-success' :'btn-outline-primary'}`}
                        onClick={()=> toggleFavoriteMovieToUser(movie.id)}>
                            favorito
                        </button>    
                }
            </div>
        </div>
    );
}

export default Movie;
