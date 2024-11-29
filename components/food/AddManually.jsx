import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native'
import {useEffect, useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import Button from '../globals/Buttons/Button';
import TextInp from '../globals/Inputs/TextInp';
import TextIcon from '../globals/Inputs/TextIcon';
import DatePickerInput from '../globals/Buttons/DatePicker';
import SelectMeasure from './SelectMeasure';
import IngredientInput from './IngredientInput';
import { useUserStore } from '@/hooks/store/useUserStore';
import { useUserIngredientsStore } from '@/hooks/store/useUserIngredientsStore';
import { useAuth } from '@/hooks/store/useAuth';
import { useRouter } from 'expo-router';
import DropDown from '../globals/Inputs/DropDown';
import { useDevicesStore } from '@/hooks/store/useDevicesStore';
import formatDevices from '@/utils/formatDevices';

export default function AddManually({deviceId = null}) {

    const router = useRouter();

    const { token } = useAuth();
    const { startAddingIngredient } = useUserIngredientsStore();
    const { devices } = useDevicesStore();

    const [selectedIngredient, setSelectedIngredient] = useState({}); // Estado para el ingrediente seleccionado
    const [quantity, setQuantity] = useState(""); // Estado para la cantidad ingresada
    const [measure, setMeasure] = useState(""); // Estado para la medida seleccionada
    const [expiryDate, setExpiryDate] = useState(new Date()); // Estado para la fecha de vencimiento
    const [device, setDevice] = useState(!!deviceId ? deviceId : ""); // Estado para el dispositivo seleccionado

    const formattedDevices = formatDevices(devices);

    const handleIngredientSelect = (ingredient) => {
        setSelectedIngredient(ingredient); // Actualizar el estado con el ingrediente seleccionado
    };

    // console.log(devices);

    const handleAdd = () => {
        const newIngredient = {
            userId: token,
            ingredientId: selectedIngredient.id,
            quantity,
            unit: measure,
            expirationDate: expiryDate,
            deviceId: device
        }

        startAddingIngredient(newIngredient);

        router.back();

    }

    // useEffect(() => {
    //     const formattedDevices = formatDevices(devices);
    // }, [devices])

    return (
        <View className='flex-col flex-grow justify-between '>
      
            <View>
                <View style={{marginBottom: hp(4)}}>
                    <Text className='text-text font-regular text-sm mb-2'>Name</Text>
                    <IngredientInput selected={selectedIngredient} onSelectIngredient={handleIngredientSelect} />
                </View>

                <SelectMeasure quantity={quantity} activeMeasure={measure} setQuantity={setQuantity} setActiveMeasure={setMeasure} />

                <View style={{ marginVertical: hp(4), height: hp(11) }}>
                    <Text className='text-text font-regular text-sm mb-2'>Expiry Date</Text>
                    <DatePickerInput date={expiryDate} setDate={setExpiryDate} />
                </View>

                    {
                        deviceId == null && 
                        <View style={{marginBottom: hp(4)}}>
                            <Text className='text-text font-regular text-sm mb-2'>Device</Text>
                            <DropDown data={formattedDevices} title={'device'} setCuisine={setDevice} />
                        </View>
                        
                    }
                    {/* <TextInput
                        style={{ height: hp(7)}}
                        className="flex-grow text-base pl-4 bg-white text-third"
                        placeholder="Device"
                        editable={!!deviceId? false : true}
                        placeholderTextColor={Colors.light['sixth']} // Asegúrate de que 'third' exista en tus colores
                        value={device}
                        onChangeText={setDevice}
                        // Añade otros props necesarios aquí
                    /> */}
            </View>

            {
                devices.length === 0
                    ? <Text className='text-center text-primary mt-24 font-medium text-lg'>To add a new ingredient is necessary to at least have one device</Text>
                    :
                    <View>
                        <Button title='Add Food' action={handleAdd} />
                    </View>

            }
    </View>
    )
}