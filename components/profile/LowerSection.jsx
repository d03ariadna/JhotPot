import { View, Text, TouchableOpacity, ScrollView, Animated, Dimensions } from 'react-native'
import {useState, useEffect, useRef} from 'react'
import RecipeSection from './RecipeSection'
import ReviewSection from './ReviewSection'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useUserStore } from '@/hooks/store/useUserStore';
import { useUserRecipesStore } from '@/hooks/store/useUserRecipesStore';


export default function LowerSection({ currentUser, userInfo, userRecipes }) {
    
    // const {userRecipes, isLoading} = useUserRecipesStore();
    const [recipes, setRecipes] = useState(true);

    // Estado animado para la posición horizontal de la barra
    const position = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Calcula el desplazamiento: 0 para "Recipes" y la mitad del ancho de la pantalla para "Reviews"
        const toValue = recipes ? 0 : 170;

        // Inicia la animación al cambiar el valor de `recipes`
        Animated.timing(position, {
            toValue,
            duration: 300, // Duración de la animación en milisegundos
            useNativeDriver: false,
        }).start();
    }, [recipes]);

    return (
        <>
            <View
                style={{paddingHorizontal: hp(4)}}
                className="mt-7">
                <View className="flex-row justify-between ">
                    <TouchableOpacity
                        onPress={() => setRecipes(true)}
                        className='w-1/2 py-2'>
                        <Text
                            className={`${recipes ? 'text-primary' : 'text-text'} mx-auto pb-1`}>
                            Recipies (240)
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setRecipes(false)}
                        className='w-1/2 py-2'>
                        <Text
                            className={`${recipes ? 'text-text' : 'text-primary'} mx-auto pb-1`}>
                            Reviews
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* <View className='w-1/2 bg-primary rounded-xl h-[2px]' /> */}
                <Animated.View
                    className="bg-primary rounded-xl h-[2px] w-1/2"
                    style={{
                        transform: [{ translateX: position }],
                    }}
                />
            </View>

            {/* Lista de Reviews */}
            <View className="mt-7 flex-1">
                {
                    recipes ? (
                        <RecipeSection recipes={ userRecipes} />
                    ) : (
                        <ReviewSection currentUser={currentUser} chefId={userInfo.id} reviews={[...userInfo.reviews].reverse()} />
                    )
                }
                
            </View>
        </>
    )
}