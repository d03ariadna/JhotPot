import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import {useEffect} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';
import TextIcon from '@/components/globals/Inputs/TextIcon';
import { useChefsStore } from '@/hooks/store/useChefsStore';
import Loading from '@/components/globals/Loading';
import { useAuth } from '@/hooks/store/useAuth';
import ProfilePicture from '@/components/profile/ProfilePicture';

const chefss = [
    {
        name: 'Sergio Michel',
        role: 'Chef @GS',
        followers: '1.2k',
        recipes: '598',
        views: '2.9k',
        image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        name: 'Mia Johnson',
        role: 'Chef @GS',
        followers: '0.3k',
        recipes: '10',
        views: '0.7k',
        image: 'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        name: 'Sofia Lara',
        role: 'Chef @GS',
        followers: '5.2k',
        recipes: '50',
        views: '9.0k',
        image: 'https://images.pexels.com/photos/15317180/pexels-photo-15317180/free-photo-of-mujer-en-pie-de-pie-retrato.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        name: 'Sergio Michel',
        role: 'Chef @GS',
        followers: '200',
        recipes: '100',
        views: '3.2k',
        image: 'https://images.pexels.com/photos/11668001/pexels-photo-11668001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        name: 'Sergio Michel',
        role: 'Chef @GS',
        followers: '1.2k',
        recipes: '598',
        views: '2.9k',
        image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        name: 'Mia Johnson',
        role: 'Chef @GS',
        followers: '0.3k',
        recipes: '10',
        views: '0.7k',
        image: 'https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        name: 'Sofia Lara',
        role: 'Chef @GS',
        followers: '5.2k',
        recipes: '50',
        views: '9.0k',
        image: 'https://images.pexels.com/photos/15317180/pexels-photo-15317180/free-photo-of-mujer-en-pie-de-pie-retrato.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        name: 'Sergio Michel',
        role: 'Chef @GS',
        followers: '200',
        recipes: '100',
        views: '3.2k',
        image: 'https://images.pexels.com/photos/11668001/pexels-photo-11668001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
]

export default function Chefs() {

    const router = useRouter();
    const {token} = useAuth();
    const { chefs, startFetchChefs, isLoading } = useChefsStore();

    const handleOpenChef = (chef) => {
        router.push({
            pathname: '/(app)/(tabs)/chefs/chef',
            params: { chefInfo: JSON.stringify(chef) }
        });
    }

    useEffect(() => {
        startFetchChefs();
    }, []);

    return (
        <View className='flex-1 bg-fourth' style={{paddingHorizontal: hp(4), paddingTop: hp(8)}}>
            {/* <View className='bg-fourth flex-row justify-between items-center p-3 mb-5'>
                <Text>Search</Text>
                <Ionicons name="search" size={20} color={Colors.light['primary']} />
            </View> */}

            <View style={{height: hp(10)}}>
                <TextIcon placehld={'Search'} icon={<Ionicons name="search" size={20} color={Colors.light['primary']} />} />
            </View>

            {
                isLoading
                    ? <Loading />
                    
                    : <FlatList
                        data={chefs}
                        key={2} // Cambia este valor si necesitas cambiar el número de columnas dinámicamente
                        keyExtractor={(chef) => chef.id}
                        showsVerticalScrollIndicator={false}
                        numColumns={2} // Especifica el número de columnas aquí}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        renderItem={({item: chef}) => (
                            <TouchableOpacity
                                onPress={() => handleOpenChef(chef)}
                                style={{ height: hp(25), width: wp(38) }} className='bg-white rounded-xl justify-center items-center gap-4 mb-5 mx-2'
                                key={chef.id}>
                                <ProfilePicture pictureUrl={chef.profilePictureUrl} />
                                <View className='flex items-center'>
                                    <Text className='text-lg font-semibold'>{chef.name}</Text>
                                    <Text className='text-primary font-regular text-sm'>Chef @{ chef.location }</Text>
                                    <Text className='text-text font-regular text-sm'>{ chef.followers } Followers</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
            }

            {/* <Text>Chefs</Text> */}
        </View>
    )
}