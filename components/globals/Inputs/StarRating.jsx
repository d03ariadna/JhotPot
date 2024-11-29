import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0); // Estado para el rating seleccionado

  const handleRating = (newRating) => {
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating); // Callback para manejar cambios en el rating
    }
  };

  return (
      <View className="h-14 flex-row items-center space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => handleRating(star)}>
            <Ionicons
              name={star <= rating ? "star" : "star-outline"} // Estrella rellena o vacía
              size={20}
              color="#fbbf24" // Color dorado para las estrellas
              className="text-amber-400 mr-1" // Clase adicional para color amarillo
            />
          </TouchableOpacity>
        ))}
      </View>
  );
};

export default StarRating;
