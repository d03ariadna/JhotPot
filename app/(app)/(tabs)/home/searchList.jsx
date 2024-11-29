import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {useEffect, useState} from 'react'
import Back from '@/components/globals/Buttons/Back'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import Button from '@/components/globals/Buttons/Button';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Shadows } from '@/constants/Shadows';
import OutlineButton from '@/components/globals/Buttons/OutlineButton';
import FilterOptions from '@/components/home/FilterOptions';
import RecipesFiltered from '@/components/home/RecipesFiltered';
import TextIcon from '@/components/globals/Inputs/TextIcon';
import { StatusBar } from 'expo-status-bar';
import { useRecipesStore } from '@/hooks/store/useRecipesStore';
import Loading from '@/components/globals/Loading';


export default function SearchList() {

    const router = useRouter();

    const { recipes, isLoading, startFetchFilteredRecipes } = useRecipesStore();

    const [filtersActive, setFiltersActive] = useState(false);
    const [filters, setFilters] = useState({});

    const [searchWord, setSearchWord] = useState('');
    const [searchedRecipes, setSearchedRecipes] = useState([]);

    const handleToggle = () => {
        setFiltersActive(!filtersActive);
    }

    const handleApplyFilter = (filtersSelected) => {
        
        setFilters(filtersSelected);
        setFiltersActive(false);

        startFetchFilteredRecipes(filtersSelected);
    }

    useEffect(() => {
        const newRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchWord.toLowerCase()));
        setSearchedRecipes(newRecipes);
        console.log('searched recipes: ', newRecipes.length);
    }, [recipes, searchWord])


    return (
        <View style={{ paddingVertical: hp(4) }} className='flex-1 bg-fourth'>
            <StatusBar style="inverted" backgroundColor={Colors.light['fourth']} />
            <View style={{paddingHorizontal: hp(4)}} className='flex-row gap-3 items-center'>
                
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons
                        name="close" size={24}
                        color={Colors.light['third']}
                        className="mt-9" />
                </TouchableOpacity>

                <Text className='mt-9 font-medium text-second'>Search Filter</Text>
            </View>

            {/* Search bar adn Filter Button */}
            <View style={{paddingHorizontal: hp(4)}} className='flex-row gap-3 items-center mt-4'>
                {/* <View style={[ Shadows.lg, {width: wp(68)}]} className='bg-white flex-row justify-between items-center rounded-xl p-5 flex-grow'>
                    <Text>Search</Text>
                    <Ionicons name="search" size={20} color={Colors.light['primary']} />
                </View> */}
                <View style={{width: wp(70)}}>
                    <TextIcon
                        editable={!filtersActive}
                        placehld={'Search'}
                        value={searchWord} 
                        setValue={setSearchWord}
                        icon={<Ionicons name="search" size={20} color={Colors.light['primary']} className="mr-4" />}
                    />
                </View>

                {
                    filtersActive 
                        ?
                        <OutlineButton
                            title={<FontAwesome6 name="sliders" size={16} color={Colors.light['primary']} />}
                            action={handleToggle} />
                        :
                        <Button
                            title={<FontAwesome6 name="sliders" size={16} color="white" />}
                            action={handleToggle} />
                }
                
            </View>

            {/* Content */}
            {
                filtersActive 
                    ?
                    <FilterOptions filters={filters} applyFilters={handleApplyFilter} />

                    :
                    isLoading
                        ? <Loading/>
                        :
                        searchedRecipes.length > 0
                            ? <RecipesFiltered data={searchedRecipes} />
                            : <Text className='text-center font-medium text-lg text-sixth mt-10'>No recipes found with those filters</Text>
            }
        </View>
    )
}

