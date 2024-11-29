import React, { useState } from 'react';
import { View, Text, Modal, TextInput, Platform, KeyboardAvoidingView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SecondaryButton from '../globals/Buttons/SecondaryButton';
import Button from '../globals/Buttons/Button';
import { FontAwesome6 } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import StarRating from '../globals/Inputs/StarRating';
import { useChefsStore } from '@/hooks/store/useChefsStore';
import { useRouter } from 'expo-router';
import { useUserStore } from '@/hooks/store/useUserStore';


const ReviewModal = ({ chefId, onNewReview }) => {
    const router = useRouter();

    const { userData } = useUserStore();
    const { isLoading, startAddReview } = useChefsStore();

    const [modalVisible, setModalVisible] = useState(false);
    const [comment, setComment] = useState('');
    const [emoji, setEmoji] = useState('');
    const [rating, setRating] = useState(0); // Estado para el rating seleccionado

    const handleSubmit = () => {
        
        startAddReview({ userId: chefId, content: comment, rating, emoji });

        // router.replace('/(app)/(tabs)/chefs/');
        const reviewer = { _id: userData.id, name: userData.name, profilePictureUrl: userData.profilePictureUrl };

        if (onNewReview) onNewReview({_id: Date.now().toString(), user: reviewer, content: comment, rating, emoji, timestamp: Date.now()});

        setRating(0); // Resetea el rating
        setComment(''); // Limpia el campo de texto
        setModalVisible(false); // Cierra el modal
    };

    return (
        <View className="flex-grow">
        {/* Botón para abrir el modal */}
        {/* <TouchableOpacity
            className="bg-fourth w-full  p-2 rounded "
            onPress={() => setModalVisible(true)}
        >
            <FontAwesome6 name="comments" size={20} color={Colors.light['primary']} />
            </TouchableOpacity> */}
            <SecondaryButton
                title={<FontAwesome6 name="comments" size={20} color={Colors.light['primary']} />}
                action={() => setModalVisible(true)} /> 
            

        {/* Modal */}
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                style={{ flex: 1 }}
            >
                <View className="flex-1 justify-center items-center bg-black/50">
                    <View style={{ padding: hp(3)}} className="bg-white flex justify-center rounded-xl w-4/5">
                        <Text className="text-2xl text-primary font-semibold mb-8">New Review</Text>
                            <View className='flex-row items-center justify-between mb-4'>
                                <TextInput
                                    style={{ width: wp(14) }}
                                    className="border border-sixth rounded-xl p-3 font-regular text-xl text-center text-text"
                                    placeholder="😍"
                                    value={emoji}
                                    onChangeText={setEmoji}
                                />
                                <StarRating onRatingChange={(newRating) => setRating(newRating)}/>
                            </View>
                        <TextInput
                            style={{ height: hp(10) }}
                            className="border border-sixth rounded-xl p-3 mb-8 font-regular text-sm text-text text-left"
                            placeholder="Write your review..."
                            value={comment}
                            onChangeText={setComment}
                            multiline={true}
                            numberOfLines={4}
                            textAlignVertical="top"
                            />
                        <View className="w-full flex-row gap-8 justify-between">
                            <SecondaryButton title={'Cancel'} action={() => setModalVisible(false)} />
                            <Button title={'Save'} action={handleSubmit} />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
        </View>
    );
};

export default ReviewModal;
