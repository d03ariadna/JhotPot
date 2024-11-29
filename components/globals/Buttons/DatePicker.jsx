import React, { useState } from 'react';
import { View, Text, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome5 } from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Colors } from '@/constants/Colors';



const DatePickerComponent = ({date, setDate}) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); // Keep picker open on iOS after selection
    
    
    const normalizedDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate(),
        12, 0, 0
    );

    setDate(normalizedDate);
  };

  const formatDate = (date) => {
    // Format the date to string as DD-MM-YYYY
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
              onPress={() => setShow(true)}
              className='bg-white'
        style={{ maxHeight: hp(7), height: hp(7) }}
      >
        <View className='flex-1 flex-row items-center'>
          <Text style={{ flex: 1, paddingLeft: wp(4) }} className='text-third font-regular text-base'>
            {formatDate(date)} {/* Use formatDate to display the date */}
          </Text>
          <FontAwesome5 name="calendar-alt" size={20} color={Colors.light['sixth']} style={{ marginRight: wp(4) }} />
        </View>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};


export default DatePickerComponent;
