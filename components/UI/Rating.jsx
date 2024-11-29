import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Rating = ({ value }) => {
  const totalStars = 5; // Siempre serán 5 estrellas

  return (
    <View style={{ flexDirection: 'row' }}>
      {/* Estrellas llenas */}
      {Array.from({ length: value }).map((_, index) => (
        <Ionicons key={`full-${index}`} name="star" size={12} color="orange" />
      ))}

      {/* Estrellas vacías */}
      {Array.from({ length: totalStars - value }).map((_, index) => (
        <Ionicons key={`empty-${index}`} name="star-outline" size={12} color="orange" />
      ))}
    </View>
  );
};

export default Rating;
