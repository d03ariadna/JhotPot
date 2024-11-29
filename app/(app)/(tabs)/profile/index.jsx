import LoadingScreen from '@/components/UI/LoadingScreen';
import Loading from '@/components/globals/Loading';
import UserView from '@/components/globals/UserView';
import { useAuth } from '@/hooks/store/useAuth';
import { useUserRecipesStore } from '@/hooks/store/useUserRecipesStore';
import { useUserStore } from '@/hooks/store/useUserStore';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Profile() {

    const router = useRouter();
    const { token } = useAuth();
    const { userData, isFetching, startFetchData } = useUserStore();
    const { userRecipes, isLoading, startFetchUserRecipes } = useUserRecipesStore();

    const handleEdit = () => {
        router.push('/(app)/(tabs)/profile/editProfile');
    }

    useEffect(() => {
        // Fetch User Data
        // startFetchData(token);
        startFetchUserRecipes(token);
    }, []);

    

    return (
        isFetching || userData.name === '' || isLoading
            ? <Loading />
            : <UserView currentUser={true} userInfo={userData} userRecipes={userRecipes} action={handleEdit} />
  );
}







