import CompleteRecipe from "@/components/globals/RecipeViews/CompleteRecipe";
import { useLocalSearchParams } from "expo-router";

    
export default function Recipe() {

    const params = useLocalSearchParams();
    const recipeInfo = params.recipeInfo || '{}'; // Asegúrate de que nunca sea `undefined`
    const recipe = JSON.parse(recipeInfo);

    return (
        <CompleteRecipe recipe={recipe} />
    )
}


