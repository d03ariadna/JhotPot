import Back from '@/components/globals/Buttons/Back';
import NavigationBar from '@/components/navigation/NavigationBar';
import { useAuth } from '@/hooks/store/useAuth';
import { Link, useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Button from '@/components/globals/Buttons/Button';
import DeviceCard from '@/components/extra/DeviceCard';
import SecondaryButton from '@/components/globals/Buttons/SecondaryButton';
import { useDevicesStore } from '@/hooks/store/useDevicesStore';


export default function ShowDeviceData() {
  const router = useRouter();

  const { token } = useAuth();
  const { startAddDevice } = useDevicesStore();
    // const { scannedData } = router.query;
  const params = useLocalSearchParams();
  const { dataScanned = 'hi' } = params;
  const parsedData = JSON.parse(dataScanned); 
    
  // Asegúrate de que el parámetro existe antes de usarlo

  const handleAddDevice = () => {
    
    const newDevice = {
      name: parsedData.name,
      qrCode: parsedData.qrCode,
      userId: token,
      ingredients: parsedData.ingredients,
      img: parsedData.img
    }

    startAddDevice(newDevice);

    // setTimeout(() => {
    //   router.replace('/(app)/extra/(devices)/');
    // }, 1000);
    router.replace('/(app)/extra/(devices)/');
  };
  console.log(parsedData);

  return (
    <View className='flex-1'>
          <NavigationBar title={'Device Scanned'} />
        <View style={{ paddingHorizontal: hp(4), paddingBottom: hp(4) }} className='flex-1 justify-between'>
          {/* <Text>Scanned Device Data:</Text> */}
        {/* <Text className='font-semibold text-primary' >{dataScanned}</Text> */}
        <DeviceCard device={parsedData} preview/>
        <View className='flex-col gap-5'>
          <Button title='Add New Device' action={handleAddDevice} />
          <SecondaryButton title={'Cancel'} action={() => router.replace('/(app)/extra/(devices)/')} />
        </View>
        </View>
    </View>
  );
}
