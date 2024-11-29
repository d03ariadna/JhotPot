import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import {useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import Button from '../globals/Buttons/Button';
import TimeSlider from '../globals/Buttons/TimeSlider';
import Slider from '../globals/Buttons/TimeSlider';
import TextIcon from '../globals/Inputs/TextIcon';
import DropDown from '../globals/Inputs/DropDown';
import IngredientInput from '../food/IngredientInput';
import Ingredients from '@/data/Ingredients.json';
import OutlineButton from '../globals/Buttons/OutlineButton';
import { countriesSimple } from '@/data/Countries';


export default function FilterOptions({ filters={}, applyFilters }) {
  
  const defaultFilters = {
    preparationTimeMax: 60,
    tags: ['All'],
    ingredients: [],
  };

  // Combinar filtros solo si están vacíos o faltan valores
  const mergedFilters = {
    preparationTimeMax: filters.preparationTimeMax ?? defaultFilters.preparationTimeMax,
    tags: filters.tags?.length > 0 ? filters.tags : defaultFilters.tags,
    ingredients: filters.ingredients?.length > 0 ? filters.ingredients : defaultFilters.ingredients,
  };


  const [time, setTime] = useState(mergedFilters.preparationTimeMax);
  const [cuisine, setCuisine] = useState(mergedFilters.tags[0]);
  const [selectedIngredients, setSelectedIngredients] = useState(mergedFilters.ingredients);


  const handleIngredientSelect = (ingredient) => {
    //Añadir ingrediente seleccionado al estado
    setSelectedIngredients(prev => {

      //Si el ingrediente ya está en el estado, no hacer nada
      if(prev.includes(ingredient)) return prev;

      //Añadir ingrediente al arreglo
      return [ingredient.id, ...prev];
    })
  }

  const handleUnselectIngredient = (ingredient) => {
    setSelectedIngredients(prev => {
      return prev.filter(ing => ing !== ingredient);
    })
  }

  const handleApplyFilter = () => {
    applyFilters({
      preparationTimeMax: time,
      tags: cuisine == 'All' ? [] : [cuisine],
      ingredients: selectedIngredients
    })
  }



  return (
    <View style={{ marginTop: hp(4), paddingHorizontal: hp(4) }} className='flex-col flex-1 justify-between '>
      
      <View>

        {/* Preparation Time */}
        <View style={{marginBottom: hp(4)}}>
          <TimeSlider time={time} setTime={setTime} />
        </View>
        
        {/* Cuisine */}
        <View style={{marginBottom: hp(4)}} >
          <Text className='text-text font-regular text-sm mb-2'>Select Cuisine</Text>
          <DropDown data={countriesSimple} title={'cuisine'} setCuisine={setCuisine} />
        </View>

        {/* Ingredients */}
        <View className='h-44'>
          <Text className='text-text font-regular text-sm mb-2'>Sub Ingredients</Text>
          <IngredientInput selected={''} onSelectIngredient={handleIngredientSelect}/>
          {/* <TextIcon placehld={'Onion'} icon={<Ionicons name="add-circle-outline" size={20} color={Colors.light['primary']} />} /> */}

          {/* Ingredients Added */}
          <View className='flex-row justify-start flex-wrap mt-3 gap-3'>

            {
              selectedIngredients.map((ingredient, index) => (
                // console.log(Ingredients[ingredient].name),
                <View key={index} className='flex-grow-0 p-[5px] bg-slate-200 flex-row items-center justify-between gap-2 rounded-md'>
                  <Text className='text-sm font-regular'>{Ingredients[ingredient].name}</Text>
                  <TouchableOpacity onPress={ () => handleUnselectIngredient(ingredient)}>
                    <Ionicons
                        name="close" size={16}
                        color={'red'}/>
                  </TouchableOpacity>
                </View>
              ))

            }
          </View>
        </View>
      </View>
      

      <View className='flex-col gap-5'>
        <OutlineButton title='Clear Filters' action={() => applyFilters({})} />
        <Button title='Apply Filter' action={handleApplyFilter} />
      </View>
    </View>
  )
}