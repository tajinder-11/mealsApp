import { createContext, useState } from 'react';

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: () => {},
  removeFavourite: () => {},
});

function FavouritesContextProvider({ children }) {
  const [favouriteMealIds, setFavouritesMealIds] = useState([]);

  function addFavourite(id) {
    setFavouritesMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavourite(id) {
    setFavouritesMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId != id)
    );
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;
