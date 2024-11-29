import { View, FlatList } from 'react-native'
import {useEffect, useState} from 'react'
import { ingredients } from '@/data/Ingredients'
import RecipeIngredient from '../globals/Ingredients/RecipeIngredient'
import ToggleIngredient from '../globals/Ingredients/ToggleIngredients'

export default function IngredientsCarrousel({ingredientsSelected, deleteIngredient}) {

  const [activeIng, setActiveIng] = useState(ingredientsSelected);

  useEffect(() => {
    setActiveIng(ingredientsSelected);
  }, [ingredientsSelected])

  const deleteIng = (item) => {
    // Delete the ingredient
    // const newIngredients = ingredientsSelected.filter(ing => ing !== item);
    // setActiveIng(newIngredients);
    deleteIngredient(item);
  }

  return (
      <FlatList
          data={activeIng}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
              <ToggleIngredient item={ item } deleteIng={deleteIng}/>
          )}
      />
    )
}