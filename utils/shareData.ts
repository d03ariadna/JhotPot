import { Alert, Share } from "react-native";

export const shareRecipe = async (recipe : any) => {
    try {
      const result = await Share.share({
          message: `Look this incredible recipe!\n\n${recipe.name}\n\n${recipe.description}\n\nIngredients:\n${recipe.ingredients.map((ingredient:any) => `${ingredient.name} - ${ingredient.quantity} ${ingredient.unit}\n`
            )}\nSteps:\n${recipe.steps.join('\n')}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Compartido en una actividad específica
          console.log('Compartido en:', result.activityType);
        } else {
          // Compartido genéricamente
          console.log('Receta compartida');
        }
      } else if (result.action === Share.dismissedAction) {
        // Cuadro de compartir descartado
        console.log('Compartir cancelado');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo compartir la receta');
      console.error(error);
    }
};
  
export const shareQR = async (device : any) => {
    try {
      const result = await Share.share({
          message: `Look this incredible device!\n\n${device.name}\n\n${device.description}\n\nIngredients:\n${device.ingredients.map((ingredient:any) => `${ingredient.name} - ${ingredient.quantity} ${ingredient.unit}\n`
            )}\nSteps:\n${device.steps.join('\n')}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Compartido en una actividad específica
          console.log('Compartido en:', result.activityType);
        } else {
          // Compartido genéricamente
          console.log('Receta compartida');
        }
      } else if (result.action === Share.dismissedAction) {
        // Cuadro de compartir descartado
        console.log('Compartir cancelado');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo compartir la receta');
      console.error(error);
    }
  };