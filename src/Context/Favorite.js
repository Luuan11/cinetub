import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();

FavoritosContext.displayName = "Favorites";

export default function FavoritesProvider({ children }){
    const [favorite, setFavorite] = useState([]);

    return(
        <FavoritosContext.Provider
            value={{favorite, setFavorite}}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoriteContext() {
    const { favorite, setFavorite} = useContext(FavoritosContext);

    function addFav(newFavorite){
        const repeatFav = favorite.some(item => item.id === newFavorite)

        let newList = [...favorite];

        if(!repeatFav){
            newList.push(newFavorite);
            return setFavorite(newList);
        }

        newList = favorite.filter((fav) => fav.id !== newFavorite.id);

        return setFavorite(newList);
    }
    return{
        favorite, addFav
    }
}