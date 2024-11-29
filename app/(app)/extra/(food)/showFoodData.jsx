import Back from '@/components/globals/Buttons/Back';
import Button from '@/components/globals/Buttons/Button';
import HorizontalIng from '@/components/globals/Ingredients/HorizontalIng';
import NavigationBar from '@/components/navigation/NavigationBar';
import { useAuth } from '@/hooks/store/useAuth';
import { useUserIngredientsStore } from '@/hooks/store/useUserIngredientsStore';
import formatDate from '@/utils/formateDate';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {useState } from 'react';
import ingredients from '@/data/Ingredients.json';
import { useDevicesStore } from '@/hooks/store/useDevicesStore';
import DropDown from '@/components/globals/Inputs/DropDown';
import formatDevices from '@/utils/formatDevices';


export default function ShowFoodData() {
  const router = useRouter();
  
  const { token } = useAuth();
  const { devices } = useDevicesStore();
  const { startAddingIngredient } = useUserIngredientsStore();

  const [device, setDevice] = useState('');
  
  const params = useLocalSearchParams();
  const { dataScanned = '{}' } = params; // Asegúrate de recibir una cadena JSON válida
  const parsedData = JSON.parse(dataScanned); 
  
  const handleAddIngredient = () => {
    // console.log(' data2: ', typeof parsedData)
    const newIngredient = {
      ...parsedData,
      userId: token,
      deviceId: device,
    };

    // console.log(' data3: ', newIngredient)
    if (device === '') {
      alert('Please select a device');
      return;
    }
        startAddingIngredient(newIngredient);
    router.replace('/(app)/extra/(food)/');
  };

  const name = ingredients[parsedData.ingredientId].name;
  const quantity = parsedData.quantity;
  const unit = parsedData.unit;
  const expDate = formatDate(parsedData.expirationDate);


  return (
    <View>
          <NavigationBar title={'Food Scanned'} />
        <View style={{ paddingHorizontal: hp(4), paddingBottom: hp(4) }}>
        <View className='flex-row items-center gap-4 border p-4 rounded-xl border-sixth mb-10'>
                    <View style={{ width: wp(30), height: wp(30) }} className="bg-fourth rounded-lg flex justify-center px-4">
                        <Image
                            source={{ uri: 'https://www.themealdb.com/images/ingredients/'+name+'.png' }}
                            className='w-28 h-28'
                        />
                    </View>
                    <View className='flex-grow gap-3'>
                        <Text className='font-semibold text-second text-2xl mt-1'>{name}</Text>
                            <Text className='font-medium text-third text-lg mt-1'>{ quantity + ' ' + unit }</Text>
                    <View className='flex-row justify-between items-center mb-2'>
                        {/* <Text className='font-medium text-slate-400 text-sm mt-1'>Added: {creationDate}</Text> */}
                        <Text className='font-medium text-slate-400 text-base mt-1'>Ex: {expDate}</Text>
                    </View>
                    </View>
        </View>
        <View style={{marginBottom: hp(4)}}>
            <Text className='text-text font-regular text-sm mb-2'>Device</Text>
            <View className='border rounded-xl p-1 border-sixth'>
              <DropDown data={formatDevices(devices)} title={'device'} setCuisine={setDevice} />
            </View>
        </View>
        {/* <HorizontalIng ingredient={parsedData} /> */}
        {/* <Text className='font-semibold text-primary' >{dataScanned}</Text> */}
        <Button title='Add Food' action={handleAddIngredient} />
        </View>
    </View>
  );
}
