import { View, Text, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import NavigationBar from '@/components/navigation/NavigationBar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AddManually from '@/components/food/AddManually';
import AddbyQR from '@/components/food/AddbyQR';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import { useLocalSearchParams, usePathname } from 'expo-router';


export default function AddFood() {

    const params = useLocalSearchParams();
    const deviceId = params.device || null; // Asegúrate de que nunca sea `undefined`
    // const deviceInfo = JSON.parse(deviceInfoString);

    // console.log('isInDevice: ', isInDevice)
    const [manuallyActive, setManuallyActive] = useState(true);


    const handleToggle = () => {
        setManuallyActive(!manuallyActive)
    }

    return (
        <View className='flex-1 bg-fourth' style={{ paddingBottom: hp(4) }}>
            <StatusBar backgroundColor={ Colors.light['fourth'] } style='inverted' />
            <NavigationBar title={'Add New Food'}/>
            <View style={{paddingHorizontal: hp(4)}} className='flex-1'>
                <View className='flex-row mb-6 border-2 border-primary rounded-md overflow-hidden'>
                    <TouchableOpacity onPress={handleToggle} className={`${manuallyActive ? 'bg-primary' : 'bg-white'} flex-grow p-3 text-white flex items-center`}>
                        <Text className={`${manuallyActive ? 'text-white' : 'text-primary'}  text-sm font-semibold`}>Add Manually</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleToggle} className={`${manuallyActive ? 'bg-white' : 'bg-primary text-white'} flex-grow  p-3  flex items-center`}>
                        <Text className={`${manuallyActive ? 'text-primary' : 'text-white'} text-sm font-semibold`}>Scan QR code</Text>
                    </TouchableOpacity>
                </View>

                {
                    manuallyActive 
                        ? <AddManually deviceId={deviceId} />
                        : <AddbyQR />
                }
            </View>
        </View>
    )
}