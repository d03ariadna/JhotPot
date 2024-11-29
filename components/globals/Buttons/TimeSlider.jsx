import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import { Colors } from '@/constants/Colors';

export default function TimeSlider({time, setTime}) {
     // Tiempo inicial en minutos

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                <Text className='text-text font-regular text-sm'>Time to cook</Text>
              <Text className='text-third font-medium text-sm'>{time} min</Text>
            </View>
            <Slider
                style={{ width: '100%', height: 20 }}
                minimumValue={0}
                maximumValue={180}
                step={1}
                value={time}
                onValueChange={(value) => setTime(value)}
                minimumTrackTintColor={ Colors.light['primary']} // Color de la pista izquierda
                maximumTrackTintColor={ Colors.light['third']} // Color de la pista derecha
                thumbTintColor="#fff" // Color del círculo
                thumbStyle={{
                    height: 60,
                    width: 60,
                    borderRadius: 20,
                    borderColor: '#000',
                    borderWidth: 20,
                }}
            />
        </View>
    );
}
