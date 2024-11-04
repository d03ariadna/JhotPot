import React from 'react';
import { View, Text } from 'react-native';

export const Card = ({ className, children }) => (
    <View className={className}>
        {children}
    </View>
);

export const CardContent = ({ className, content }) => (
    <View className={className}>
        <Text>{content}</Text>
    </View>
);
