import { Colors } from '@/constants/Colors';
import { Shadows } from '@/constants/Shadows';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import {useState} from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ShareButton from '../Buttons/ShareButton';
import SaveRecipeButton from '../Buttons/SaveRecipeButton';
import { RecipeExample } from '@/data/Recipes';

export default function HorizontalRecipe({recipe}) {

    const pathName = usePathname();
    const router = useRouter();

    console.log(pathName)
    const routeToOpen =
        pathName === '/home/searchList'
            ? '/(app)/(tabs)/home/recipe'
            : '/(app)/(tabs)/saved/savedRecipe';

    handleOpenRecipe = () => {
        router.push({
            pathname: routeToOpen,
            params: { recipeInfo: JSON.stringify(recipe) }
        });
    }

    return (
        <TouchableWithoutFeedback onPress={handleOpenRecipe}>
            <View
                
                style={{ width: wp(80), marginLeft: wp(10), marginTop: hp(3), marginBottom: hp(3) }} className='bg-white rounded-md border border-sixth p-5 relative'>
                <Image
                    style={[ Shadows.lg, { width: wp(30), height: wp(30), top: hp(-2.5), left: wp(-5) }]}
                    source={{uri: recipe.images[0]}} className='absolute rounded-full' />
                <View style={{ width: wp(45) }} className='self-end'>
                    {/* Category */}
                    <View className='flex-row items-center justify-between'>
                        <Text className='text-primary font-semibold text-xs'>| {recipe.category}</Text>
                        <View className='flex-row gap-3'>
                            <ShareButton recipe={recipe} />
                            <SaveRecipeButton id={recipe.id} />
                        </View>
                    </View>
                    {/* Title */}
                    <Text className='font-semibold text-second text-lg my-2'>{recipe.name}</Text>
            
                    {/* Time and Ingredients */}
                    <View
                    className='flex-row justify-between'
                    style={{marginTop: hp(1)}}>
                        <View className='flex-row items-center gap-1'>
                            <MaterialCommunityIcons name="pot-steam-outline" size={17} color={Colors.light['textc']} />
                        <Text className='font-medium text-sm text-text'>{ recipe.preparationTime } min</Text>
                        </View>
                        <View className='flex-row items-center gap-1'>
                            <MaterialCommunityIcons name="food-steak" size={16} color={Colors.light['textc']} />
                            <Text className='font-medium text-sm text-text'>{recipe.ingredients.length} ing</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}