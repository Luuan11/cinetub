import { createContext, useContext, useCallback } from "react";
import PropTypes from "prop-types";
import { useLocalStorage } from "hooks/useLocalStorage";
import { STORAGE_KEYS } from "utils/constants";

export const FavoritesContext = createContext();

FavoritesContext.displayName = "Favorites";

export default function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage(STORAGE_KEYS.FAVORITES, []);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
}

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useFavoriteContext() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavoriteContext must be used within FavoritesProvider");
  }

  const { favorites, setFavorites } = context;

  const toggleFavorite = useCallback((video) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === video.id);

      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.id !== video.id);
      }

      return [...prevFavorites, video];
    });
  }, [setFavorites]);

  const isFavorite = useCallback((videoId) => {
    return favorites.some((fav) => fav.id === videoId);
  }, [favorites]);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}