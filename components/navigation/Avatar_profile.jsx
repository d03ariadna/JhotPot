import React from 'react';
import { View, Text, Image } from 'react-native';

export const Avatar = ({ className, children }) => (
    <View className={className}>
        {children}
    </View>
);

export const AvatarImage = ({ image }) => (
    <Image source={{ uri: image }} style={{ width: '100%', height: '100%', borderRadius: 50 }} />
);

export const AvatarFallback = ({ children }) => (
    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>{children}</Text>
    </View>
);
