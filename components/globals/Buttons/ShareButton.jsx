import { Colors } from '@/constants/Colors';
import { RecipeExample } from '@/data/Recipes';
import { useSaved_SharedStore } from '@/hooks/store/useSaved_SharedStore';
import formateRecipe from '@/utils/formateRecipe';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity, Share, Alert } from 'react-native';


export default function ShareButton({ recipe = RecipeExample }) {
  
  const { startSetShared } = useSaved_SharedStore();
  // Función para compartir la receta
  const shareRecipe = async () => {
    try {

      const message = await formateRecipe(recipe);

      const result = await Share.share({
          message: message
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Compartido en una actividad específica
          console.log('Compartido en:', result.activityType);
        } else {
          // Compartido genéricamente
          console.log('Receta compartida');
        }

        // Set recipe as shared
        startSetShared(recipe.id);


      } else if (result.action === Share.dismissedAction) {
        // Cuadro de compartir descartado
        console.log('Compartir cancelado');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo compartir la receta');
      console.error(error);
    }
  };

    return (
        // <View className=''>            
            <TouchableOpacity onPress={shareRecipe}>
                <Ionicons name="share-social-sharp" size={20} color={Colors.light['secondary']} />
            </TouchableOpacity>
        // </View>
    );
};


// export function ShareButton() {
//   return <RecipeDetails recipe={exampleRecipe} />;
// }
