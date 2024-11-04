import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const ButtonProf = ({ className, children, onPress }) => (
    <TouchableOpacity className={className} onPress={onPress}>
        <Text>{children}</Text>
    </TouchableOpacity>
);

