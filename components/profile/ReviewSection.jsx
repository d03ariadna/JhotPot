import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ReviewCard from './ReviewCard';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ReviewModal from '../forms/ReviewModal';
import { useUserStore } from '@/hooks/store/useUserStore';
import { useChefsStore } from '@/hooks/store/useChefsStore';


export default function ReviewSection({ currentUser, chefId, reviews }) {

    const [localReviews, setLocalReviews] = useState(reviews);

    useEffect(() => {
        setLocalReviews(reviews); // Sincroniza las reviews iniciales al montar el componente
    }, [reviews]);

    // Callback para añadir una nueva review
    const handleNewReview = (newReview) => {
        console.log('newReview', newReview);
        setLocalReviews((prevReviews) => [newReview, ...prevReviews]);
    };
    
    return (
        <View className='flex-1' style={{ paddingHorizontal: hp(4) }}>
            {
                !currentUser &&
                <View className="w-full mb-4">
                        <ReviewModal chefId={chefId} onNewReview={handleNewReview} />
                </View>
            }

            {
                localReviews.length === 0
                    ? <Text className='text-center text-sixth mt-24 font-medium text-lg'>No reviews yet</Text>
                    :
                    <FlatList
                        data={localReviews}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => <ReviewCard key={item._id} review={item} />}
                        showsVerticalScrollIndicator={false}
                    />
            }

        </View>
    );
}