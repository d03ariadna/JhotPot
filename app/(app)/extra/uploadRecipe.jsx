import { View, Text, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import {useState} from 'react'
import Back from '@/components/globals/Buttons/Back'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import NavigationBar from '@/components/navigation/NavigationBar';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import TimeSlider from '@/components/globals/Buttons/TimeSlider';
import DropDown from '@/components/globals/Inputs/DropDown';
import TextIcon from '@/components/globals/Inputs/TextIcon';
import SelectMeasure from '@/components/food/SelectMeasure';
import IngredientsCarrousel from '@/components/food/IngredientsCarrousel';
import Button from '@/components/globals/Buttons/Button';
import SecondaryButton from '@/components/globals/Buttons/SecondaryButton';
import IngredientDetailsInput from '@/components/extra/IngredientDetailsInput';
import { useAuth } from '@/hooks/store/useAuth';
import { useRecipesStore } from '@/hooks/store/useRecipesStore';
import { countries, countriesSimple } from '@/data/Countries';
import { categoriesData } from '@/data/Categories';
import { useRouter } from 'expo-router';


export default function UploadRecipe() {

    const { token } = useAuth();
    const { startAddRecipe } = useRecipesStore();

    const router = useRouter();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [time, setTime] = useState(30);
    const [cuisine, setCuisine] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');
    const [steps, setSteps] = useState([]);
    const [category, setCategory] = useState('');
    const [extraCategories, setExtraCategories] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleIngredientSelect = (ingredient) => {
    //Añadir ingrediente seleccionado al estado
        setIngredients(prev => {

        if (prev.some(existingIngredient => existingIngredient.id === ingredient.id)) {
                return prev; // Si ya existe, no añadirlo
            }

        //Añadir ingrediente al arreglo
        return [ingredient, ...prev];
        })
    }

    const deleteIngredient = (ingredient) => {
        setIngredients(prev => prev.filter(ing => ing.id !== ingredient.id));
    }

    const handleAddRecipe = () => {
        // Validations
        if (!name || !description || !time || !cuisine || !ingredients.length || !calories || !servings || !steps || !category || !imageUrl) {
            alert('Please fill all the fields');
            return;
        }

        const newCategories = extraCategories.split('-').map(cat => cat.trim()); 

        // Crear objeto con los datos del formulario
        const newRecipe = {
            name,
            description,
            preparationTime: parseInt(time),
            tags: [cuisine, ...newCategories],
            ingredients: ingredients.map(ingredient => ({ingredientId: ingredient.id, quantity: ingredient.quantity, unit: ingredient.measure})),
            calories: parseInt(calories),
            servings: parseInt(servings),
            steps: steps
                .split('-') // Split by "-"
                .map(step => step.trim()) // Trim leading/trailing spaces
                .filter(step => step.length > 0),
            images: [imageUrl],
            category: category,
            chefId: token
        }

        startAddRecipe(newRecipe);

        // Enviar los datos a la API
        console.log('new recipe: ', newRecipe);
    }


    return (
        <View className='bg-fourth flex-1' style={{ paddingBottom: hp(4) }}>
            <StatusBar style="inverted" backgroundColor={Colors.light['fourth']} />
            <NavigationBar title={'Upload new recipe'} />
            <ScrollView style={{paddingHorizontal: hp(4)}}>
                <View  className='bg-white py-8 rounded-2xl border border-dashed border-third flex items-center justify-center'>
                    <SimpleLineIcons name="cloud-upload" size={60} color={Colors.light['primary']} />
                    <Text className='font-semibold text-base text-second mt-4'>Upload Cover</Text>
                    <Text className='font-medium text-sm text-sixth mt-1'>Click here for upload cover photo</Text>
                </View>

                <View style={{marginVertical: hp(3)}}>
                    <Text className='text-text font-regular text-sm mb-2'>Name</Text>
                    <TextInput
                        style={{ height: hp(7)}}
                        className="flex-grow text-base pl-4 bg-white text-third"
                        placeholder="Recipe Name"
                        placeholderTextColor={Colors.light['sixth']} // Asegúrate de que 'third' exista en tus colores
                        // Añade otros props necesarios aquí
                        value={name}
                        onChangeText={setName}
                    />
                </View>

                {/* Description */}
                <View style={{marginBottom: hp(3)}}>
                    <Text className='text-text font-regular text-sm mb-2'>Description</Text>
                    <TextInput
                        style={{ height: hp(7)}}
                        className="flex-grow text-base pl-4 bg-white text-third"
                        placeholder="Recipe Description"
                        placeholderTextColor={Colors.light['sixth']} // Asegúrate de que 'third' exista en tus colores
                        // Añade otros props necesarios aquí
                        value={description}
                        onChangeText={setDescription}
                    />
                </View>

                {/* Preparation Time */}
                <View style={{marginBottom: hp(3)}}>
                    <TimeSlider time={time} setTime={setTime} />
                </View>

                {/* Cuisine */}
                <View style={{ marginBottom: hp(4) }}>
                    <Text className='text-text font-regular text-sm mb-2'>Select Cuisine</Text>
                    <DropDown data={countriesSimple} title={'cuisine'} setCuisine={setCuisine}/>
                </View>

                {/* Ingredients */}
                <View style={{marginBottom: hp(4)}} className='flex-grow'>
                    <Text className='text-text font-regular text-sm mb-2'>Ingredients</Text>
                    <IngredientDetailsInput selected={''} onSelectIngredient={handleIngredientSelect} />
                    {/* <TextIcon placehld={'Onion'} icon={<Ionicons name="add-circle-outline" size={20} color={Colors.light['primary']} />} />

                    <SelectMeasure /> */}

                    <View style={{marginTop: hp(2)}}>
                        <IngredientsCarrousel ingredientsSelected={ingredients} deleteIngredient={deleteIngredient} />
                    </View>
                </View>

                {/* Calories */}
                <View style={{marginBottom: hp(3)}}>
                    <Text className='text-text font-regular text-sm mb-2'>Calories</Text>
                    <TextInput
                        style={{ height: hp(7)}}
                        className="flex-grow text-base pl-4 bg-white text-third"
                        placeholder="Calories"
                        placeholderTextColor={Colors.light['sixth']} // Asegúrate de que 'third' exista en tus colores
                        // Añade otros props necesarios aquí
                        value={calories}
                        onChangeText={setCalories}
                    />
                </View>

                {/* Servings */}
                <View style={{marginBottom: hp(3)}}>
                    <Text className='text-text font-regular text-sm mb-2'>Servings</Text>
                    <TextInput
                        style={{ height: hp(7)}}
                        className="flex-grow text-base pl-4 bg-white text-third"
                        placeholder="Servings"
                        placeholderTextColor={Colors.light['sixth']} // Asegúrate de que 'third' exista en tus colores
                        // Añade otros props necesarios aquí
                        value={servings}
                        onChangeText={setServings}
                    />
                </View>

                {/* Steps */}
                <View style={{marginBottom: hp(3)}}>
                    <Text className='text-text font-regular text-sm mb-2'>Steps</Text>
                    <TextInput
                        // style={{ minHeight: hp(15)}}
                        className="flex-grow text-base pl-4 py-2 bg-white text-third"
                        placeholder="Separate each step using -"
                        placeholderTextColor={Colors.light['sixth']} // Asegúrate de que 'third' exista en tus colores
                        multiline
                        numberOfLines={4}
                        value={steps}
                        onChangeText={setSteps}
                    />
                </View>

                {/* Category */}
                <View style={{marginBottom: hp(3)}}>
                    <Text className='text-text font-regular text-sm mb-2'>Category</Text>
                    <DropDown data={categoriesData} title={'category'} setCuisine={setCategory} />
                </View>

                {/* Extra Categories */}
                <View style={{marginBottom: hp(3)}}>
                    <Text className='text-text font-regular text-sm mb-2'>Tags</Text>
                    <TextInput
                        style={{ height: hp(7)}}
                        className="flex-grow text-base pl-4 bg-white text-third"
                        placeholder="Separate your categories by -"
                        placeholderTextColor={Colors.light['sixth']} // Asegúrate de que 'third' exista en tus colores
                        // Añade otros props necesarios aquí
                        value={extraCategories}
                        onChangeText={setExtraCategories}
                    />
                </View>

                {/* Image Url */}
                <View style={{marginBottom: hp(3)}}>
                    <Text className='text-text font-regular text-sm mb-2'>Image URL</Text>
                    <TextInput
                        style={{ height: hp(7)}}
                        className="flex-grow text-base pl-4 bg-white text-third"
                        placeholder="Image URL"
                        placeholderTextColor={Colors.light['sixth']} // Asegúrate de que 'third' exista en tus colores
                        // Añade otros props necesarios aquí
                        value={imageUrl}
                        onChangeText={setImageUrl}
                    />
                </View>

                {/* <View style={{marginTop: hp(3)}} className='flex gap-5'> */}
                    <Button title={'Add New Recipe'} action={handleAddRecipe} />
                    {/* <SecondaryButton title={'Cancel'} action={() => router.back()} />
                </View> */}

            </ScrollView>

            
        </View>
    )
}