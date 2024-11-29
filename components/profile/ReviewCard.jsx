import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import {useState} from 'react'
import { EvilIcons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import timeAgo from '@/utils/timeAgo'
import Rating from '../UI/Rating'

export default function ReviewCard({review}) {

    const time = timeAgo(review.timestamp);

    return (
        <View className="bg-fourth p-4 rounded-lg shadow-sm mb-8">
            <View className="flex-row items-start">
                <Image
                source={{ uri: review.user.profilePictureUrl }} // Imagen de usuario
                className="w-12 h-12 rounded-full mr-4"
                />

                <View className='flex-1 flex-row justify-between'>
                    <View className="">
                        <Text className="font-semibold">{ review.user.name }</Text>
                        <Text className="text-text font-regular text-sm">{time}</Text>
                    </View>
                    <View className="">
                        <View className='flex-row items-center'>
                            <Rating value={review.rating} />
                            <Text className="ml-1 text-xl">{ review.emoji }</Text>
                        </View>

                        <View className='flex-row items-start self-end mt-1'>
                            <EvilIcons name="comment" size={17} color={Colors.light['textc']} />
                            <Text className="text-text ml-1">5</Text>
                        </View>
                    </View>
                </View>
            </View>

            <Text className="text-text font-regular text-sm leading-6 mt-3">
                {review.content}
            </Text>
        </View>
    )
}