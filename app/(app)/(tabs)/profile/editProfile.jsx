import { View, Text, TextInput, Image } from 'react-native'
import {useState} from 'react'
import NavigationBar from '@/components/navigation/NavigationBar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Button from '@/components/globals/Buttons/Button';
import { useUserStore } from '@/hooks/store/useUserStore';
import { useAuth } from '@/hooks/store/useAuth';
import { useRouter } from 'expo-router';
import { useUserRecipesStore } from '@/hooks/store/useUserRecipesStore';
import { FontAwesome6 } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import ProfilePicture from '@/components/profile/ProfilePicture';


export default function EditProfile() {

    const router = useRouter();
    const {token} = useAuth();
    const { userData, startUpdatingData } = useUserStore();
    
    const [name, setName] = useState(userData.name);
    const [email, setEmail] = useState(userData.email);
    const [location, setLocation] = useState(userData.location);


    const handleSave = () => {
        // Guardar los cambios

        //Validations
        if (!name || !email || !location) {
            return alert('All fields are required');
        }

        // console.log(name, email, location);
        // Update user data
        startUpdatingData(token, {name, email, location});

        
    }

    return (
        <View style={{ paddingBottom: hp(4) }} className='flex-1'>
            <NavigationBar title={'Edit Profile'} />
            <View style={{paddingHorizontal: hp(4)}} className='flex-1 justify-between'>
                <View className='bg-'>
                    <View className="items-center mb-10">
                        <ProfilePicture pictureUrl={userData.profilePictureUrl} />
                        <Text className="text-xl font-semibold mt-4">{userData.name}</Text>
                        <Text className="text-slate-500 font-regular">Chef @{userData.location}</Text>
                    </View>
                    <TextInput style={{ marginBottom: hp(4) }} className='bg-fourth rounded-xl text-base p-4 placeholder:text-sixth' value={name} onChangeText={setName} placeholder='Name' />
                    <TextInput style={{ marginBottom: hp(4) }} className='bg-fourth rounded-xl text-base p-4 placeholder:text-sixth' value={email} onChangeText={setEmail} placeholder='Email' />
                    <TextInput className='bg-fourth rounded-xl text-base p-4 placeholder:text-sixth' value={location} onChangeText={setLocation} placeholder='Location' />
                </View>

                <View>
                    <Button title={'Save Changes'} action={handleSave} />
                </View>
                
            </View>
        </View>
    )
}