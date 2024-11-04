import React from 'react';
import { View, Text } from 'react-native';

export const Tabs = ({ className, children }) => (
    <View className={className}>
        {children}
    </View>
);

export const TabsContent = ({ className, children }) => (
    <View className={className}>
        {children}
    </View>
);

export const TabsList = ({ className, children }) => (
    <View className={className}>
        {children}
    </View>
);

// export const TabsTrigger = ({ className, children, onPress }) => (
//     <TouchableOpacity className={className} onPress={onPress}>
//         <Text>{children}</Text>
//     </TouchableOpacity>
// );
