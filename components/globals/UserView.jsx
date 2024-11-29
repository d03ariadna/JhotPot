import Button from '@/components/globals/Buttons/Button';
import SecondaryButton from '@/components/globals/Buttons/SecondaryButton';
import LowerSection from '@/components/profile/LowerSection';
import StatisticCard from '@/components/profile/StatisticCard';
import { Colors } from '@/constants/Colors';
import { SimpleLineIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Back from './Buttons/Back';
import LogoutButton from './Buttons/LogoutButton';
import { useState } from 'react';
import ProfilePicture from '../profile/ProfilePicture';


export default function UserView({currentUser, userInfo, userRecipes, action}) {

    const router = useRouter();
    
    const handleUpload = () => {
        router.push('/(app)/extra/uploadRecipe');
    }

    const [follow, setFollow] = useState(false);

    
    
    return (
        <View className="flex-1" style={{paddingTop: hp(3)}}>
        {/* Header con icono de notificación */}
            <View style={{paddingHorizontal: hp(4)}}>
                <View className="flex-row justify-between items-center mb-6">
                    {!currentUser
                        ? <Back/>
                        :
                        // <LogoutButton/>
                        <Text className='text-white'>h</Text>
                    }
                <TouchableOpacity className='mt-9'>
                    <Ionicons name="notifications" size={24} color={Colors.light['third']} />
                </TouchableOpacity>
                </View>
                {/* Sección de perfil */}
                <View className="items-center">
                    <ProfilePicture pictureUrl={userInfo.profilePictureUrl} />
                    <Text className="text-xl font-semibold mt-4">{userInfo.name}</Text>
                    <Text className="text-slate-500 font-regular">Chef @{userInfo.location}</Text>
                </View>
                {/* Tarjetas de estadísticas */}
                <View className="flex-row my-8 gap-6 justify-center">
                <StatisticCard value={`${(userInfo.followers/1000)}k`} label={'Followers'} />
                <StatisticCard value={userRecipes.length} label={'Recipes'} />
                <StatisticCard value={`${(userInfo.views/1000)}k`} label={'Views'} />
                </View>
                
                {/* Botón de follow */}
                {
                currentUser
                    ? 
                    <View className="flex-row justify-center items-center gap-6">
                        <SecondaryButton title={'Edit Profile'} action={action} />
                        <View className='w-14'>
                        <SecondaryButton
                            title={<SimpleLineIcons name="cloud-upload" size={24} color={Colors.light['primary']} />}
                            action={handleUpload} />
                        </View>
                    </View>
                    :
                    // <View className="flex-row justify-center items-center gap-6">
                        follow
                        ? <SecondaryButton title={'Following'} action={() => setFollow(false)} />
                        : <Button title={'Follow'} action={() => setFollow(true)} />
                            // <View className='w-14'>
                                
                        //<SecondaryButton
                          //  title={<FontAwesome6 name="comments" size={20} color={Colors.light['primary']} />}
                            //action={handleUpload} /> 
                        //</View>
                    // </View>
                }
            </View>


        {/* Tabs de Recipes y Reviews */}
            <LowerSection currentUser={ currentUser} userInfo={userInfo} userRecipes={userRecipes} />
        
        </View>
    );
}







