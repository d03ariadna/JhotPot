import { View, Text, ScrollView, FlatList } from 'react-native';
import {useEffect, useState} from 'react';
import SmallRecipeCard from '../globals/RecipeViews/SmallRecipeCard';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { countries } from '@/data/Countries';
import { getRandomColor } from '@/utils/getRandomColor';
import CountriesScroll from '../globals/CountriesScroll';
import { useRecipesStore } from '@/hooks/store/useRecipesStore';
import Loading from '../globals/Loading';


export default function RecipeSection({ recipes = [] }) {  
    
    const { isLoading } = useRecipesStore();

    const [activeRecipes, setActiveRecipes] = useState(recipes);

    const [countrySelected, setCountrySelected] = useState('');

    useEffect(() => {
        const newRecipes = recipes.filter((recipe) => {
            if (countrySelected === '') return true;

            return recipe.tags.includes(countrySelected);
            
        });

        setActiveRecipes(newRecipes);
    }, [countrySelected]);

    // console.log('activeRecipes', countrySelected, activeRecipes.length);

    return (
        <View className='flex-1'>
            {
                
                isLoading && activeRecipes.length === 0
                    ?
                    <View className='flex-1 items-center justify-center'>
                        <Loading />
                    </View>
                    :
                        recipes.length === 0
                        ? <Text className='text-center text-sixth mt-24 font-medium text-lg'>No recipes yet</Text>
                        : 
                        <FlatList
                            data={activeRecipes}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            style={{ paddingLeft: hp(4)}}
                            showsVerticalScrollIndicator={false}
                            ListHeaderComponent={<CountriesScroll selected={countrySelected} setSelected={setCountrySelected} countries={countries} />}
                            renderItem={({ item }) => (
                                <SmallRecipeCard key={item.id} recipe={item} />
                            )}
                        />
            }
            
        </View>
    )
}