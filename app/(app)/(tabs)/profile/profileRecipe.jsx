import { View, Text } from 'react-native'
import React from 'react'
import CompleteRecipe from '@/components/globals/RecipeViews/CompleteRecipe'
import { useLocalSearchParams } from 'expo-router';

export default function ProfileRecipe() {

    const params = useLocalSearchParams();
    const recipeInfo = params.recipeInfo || '{}'; // Asegúrate de que nunca sea `undefined`
    const recipe = JSON.parse(recipeInfo);
    // console.log(recipe

    return (
        <CompleteRecipe recipe={recipe} />
    )
}