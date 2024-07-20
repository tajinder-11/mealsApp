import { View, Text, StyleSheet } from 'react-native';
// import { useContext } from 'react';
// import { FavouritesContext } from '../store/context/favourites.context';
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealList/MealsList';
import { useSelector } from 'react-redux';

function FavouriteScreen() {
  //   const favouriteMealsCtx = useContext(FavouritesContext);
  const favouriteMealsIds = useSelector((state) => state.favouriteMeals.ids); // redux

  const favouritesMeals = MEALS.filter((meal) =>
    favouriteMealsIds.id.includes(meal.id)
  );

  if (favouritesMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You Have no Favourite Meals Yet.</Text>
      </View>
    );
  }

  return <MealsList items={favouritesMeals} />;
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 8,
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
