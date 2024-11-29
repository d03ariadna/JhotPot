import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import Back from '@/components/globals/Buttons/Back'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { getRandomColor } from '@/utils/getRandomColor';
import { ingredients, steps } from '@/data/Ingredients';
import { countries } from '@/data/Countries';
import RecipeIngredient from '../Ingredients/RecipeIngredient';
import { useRouter } from 'expo-router';
import ShareButton from '../Buttons/ShareButton';
import { RecipeExample } from '@/data/Recipes';
import SaveRecipeButton from '../Buttons/SaveRecipeButton';

    
export default function CompleteRecipe({recipe}) {

    const router = useRouter();

    const [liked, setLiked] = useState(false);

    const handleShare = () => {
        router.push('(app)/(tabs)/home/shareRecip');
    }
    // console.log(recipe);

    // console.log(recipe);

    return (
        <View style={{backgroundColor: getRandomColor(recipe.id)}} className='flex-1 relative'>
            <View className='pt-6 pl-5'>
                <Back />
            </View>
            <View style={{marginTop: hp(4), height: hp(83)}} className='bg-white w-full rounded-tl-[3rem] py-6 px-8'>
                
                {/* Share and Like */}
                <View className='flex-row items-center gap-4'>
                    {/* <TouchableOpacity onPress={handleShare}>
                        <Ionicons name="share-social-sharp" size={20} color={Colors.light['secondary']} />
                    </TouchableOpacity> */}
                    <ShareButton recipe={recipe} />
                    <SaveRecipeButton id={recipe.id} />
                </View>

                {/* Category and Title */}
                <View style={{width: wp(65), marginTop: hp(5)}}>
                    <Text className='text-xs text-orange-600 font-semibold'>| {recipe.category}</Text>
                    <Text className='text-4xl font-semibold tracking-wider mt-6'>{ recipe.name }</Text>
                </View>

                {/* Time, Ingredients and Calories */}
                <View className='flex-row justify-between' 
                    style={{marginVertical: hp(2)}}>
                    <View className='flex-row items-center gap-1'>
                        <MaterialCommunityIcons name="pot-steam-outline" size={17} color={Colors.light['textc']} />
                        <Text className='font-medium text-sm text-text'>{recipe.preparationTime} min</Text>
                    </View>
                    <View className='flex-row items-center gap-1'>
                        {/* <Ionicons name="time-outline" size={16} color={Colors.light['textc']} /> */}
                        <MaterialCommunityIcons name="food-steak" size={16} color={Colors.light['textc']} />
                        <Text className='font-medium text-sm text-text'>{recipe.ingredients.length} ing</Text>
                    </View>
                    <View className='flex-row items-center gap-1'>
                        <SimpleLineIcons name="fire" size={15} color={Colors.light['textc']} />
                        {/* <Ionicons name="time-outline" size={16} color={Colors.light['textc']} /> */}
                        <Text className='font-medium text-sm text-text'>{recipe.calories} cal</Text>
                    </View>
                </View>

                {/* Tags Scroll */}
                <View style={{height: hp(4)}}>
                    <FlatList
                        data={recipe.tags}
                        keyExtractor={(item) => item}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View className="bg-fourth rounded-lg h-8 flex justify-center px-4 mr-5">
                                <Text className='text-sm font-regular'>{item}</Text>
                            </View>
                        )}
                    />
                </View>

                {/* Description and Steps */}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{marginTop: hp(4)}}
                >
                    <Text className='text-text leading-8 font-regular text-sm mb-12'>
                        {recipe.description}
                    </Text>

                    <Text className='font-semibold text-base text-second mb-2'>
                        Ingredients
                        <Text className='text-sm font-regular'> ({recipe.ingredients.length})</Text>
                    </Text>

                    {/* Remover height en el contenedor de FlatList */}
                    <View>
                        <FlatList
                            data={recipe.ingredients}
                            keyExtractor={(item, index) => item.ingredientId + index}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <RecipeIngredient ingredient={ item } />
                            )}
                        />
                    </View>

                    <Text style={{ marginTop: hp(4) }} className='font-semibold text-base text-second mb-3'>
                        Let's make it step by step
                    </Text>

                    {/* Remover height en el contenedor de steps */}
                    <View>
                        <View>
                            {recipe.steps.map((item, index) => (
                                <View key={index} className='mb-8'>
                                    <Text className='font-semibold text-sm text-sixth'>Step {index+1}</Text>
                                    <View className='h-[2px] w-full bg-fourth my-1'></View>
                                    <Text className='font-regular text-sm'>{item}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>

            </View>

            {/* Dish */}
            <Image source={{uri: recipe.images[0]}}
                style={{ width: wp(60), height: wp(60) }}
                className='absolute -top-2 -right-10 rounded-full shadow-2xl'
            />
        </View>
    )
}


