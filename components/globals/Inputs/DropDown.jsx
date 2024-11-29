import React from 'react';
import { View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const DropDown = ({ data, title, setCuisine }) => {
    return (
        <View className="p-1 bg-white">
            <RNPickerSelect
                onValueChange={(value) => setCuisine(value)}
                items={data}
                placeholder={{ label: `Choose a ${title}`, value: null }}
                // Icon={() => {
                //     return <Ionicons name="chevron-down" size={20} color="#999" />;
                // }}
                style={{
                    inputIOS: {
                        color: Colors.light['textc'],
                        fontSize: 14,
                        paddingVertical: 12,
                        paddingHorizontal: 10,
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 4,
                        backgroundColor: 'white',
                        paddingRight: 30, // to ensure the text is never behind the icon
                    },
                    inputAndroid: {
                        color: Colors.light['textc'],
                        paddingRight: 30, // to ensure the text is never behind the icon
                    },
                    iconContainer: {
                        top: 5,
                        right: 10,
                    },
                }}
            />
        </View>
    );
};

export default DropDown;
