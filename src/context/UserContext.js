import React, { createContext, useState } from "react";

const UserContext = createContext();


const initialUser = {
    name: 'judith',
    id: 1,
    favoriteMovies: [1,2],
}

const UserProvider = ({children}) => {
    const [user, setUser] = useState(initialUser) 

    const login = ()=>{
        setUser(initialUser);
    }

    const logout = ()=>{
        setUser(null);
    }

    const toggleFavoriteMovieToUser = (movieID)=>{
        const isFavorite = user.favoriteMovies.includes(movieID);

        const favoriteMovies = isFavorite
            ? user.favoriteMovies.filter(favMovId => favMovId !== movieID)
            : [...user.favoriteMovies, movieID]

        setUser({
            ...user,
            favoriteMovies
        })
    }

    const data = { user, login, logout, toggleFavoriteMovieToUser }

    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider };
export default UserContext;