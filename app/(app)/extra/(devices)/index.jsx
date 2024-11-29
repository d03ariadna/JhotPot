import { View, Text, FlatList } from 'react-native'
import {useEffect} from 'react'
import Back from '@/components/globals/Buttons/Back'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Button from '@/components/globals/Buttons/Button';
import ThirdButton from '@/components/globals/Buttons/ThirdButton';
import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import SecondaryButton from '@/components/globals/Buttons/SecondaryButton';
import DeviceCard from '@/components/extra/DeviceCard';
import { devices } from '@/data/Devices';
import { useRouter } from 'expo-router';
import NavigationBar from '@/components/navigation/NavigationBar';
import { useDevicesStore } from '@/hooks/store/useDevicesStore';
import { useAuth } from '@/hooks/store/useAuth';
import Loading from '@/components/globals/Loading';


export default function Devices() {

    const router = useRouter();
    const {token} = useAuth();
    const { devices, isLoading, startFetchDevices } = useDevicesStore();
    
    const handleAdd = () => {
        router.push('/(app)/extra/addDevice');
    }

    useEffect(() => {
        startFetchDevices(token);
    }, []);

    return (
        <View
            style={{ paddingBottom: hp(4) }}
            className='flex-1 '>
            <NavigationBar title={'Your Devices'} />


            {
                isLoading
                    ? <Loading />
                    : 
                    devices.length === 0
                    ? <View style={{paddingHorizontal: hp(4), paddingTop: hp(2)}}>
                        <Text className='text-center text-sixth font-medium text-lg'>Start adding your first device!</Text>
                    </View>
                    :
                    <FlatList
                        data={devices}
                        className='mb-1'
                        style={{paddingHorizontal: hp(4)}}
                        keyExtractor={(item) => item._id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <DeviceCard device={ item } />
                        )}
                    />

            }
            
            <View style={{paddingHorizontal: hp(4), paddingTop: hp(2)}}>
                <Button title={'Add New Device'} action={handleAdd} />
            </View>
        </View>
    )
}