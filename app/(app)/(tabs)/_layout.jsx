import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors, Styles } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors['light'].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors['light'].background,
          height: 80,
          shadowColor: 'rgba(0,0,0,0.15)',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.2,
          shadowRadius: 8,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          display: 'flex',
          justifyContent: 'center',
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '500',
        },
        tabBarItemStyle: {
          margin: 4,
          paddingVertical: 0,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View
              style={ focused ? Styles.tabActive : Styles.tabDefault }
            >
              <TabBarIcon
                name={'grid-outline'}
                size={22}
                color={focused ? Colors['light'].primary : Colors['light'].sixth} // Icon color changes when active
              />
              {focused && (
                <Text style={{ color: Colors['light'].primary, marginLeft: 6, fontWeight: '600' }}>Home</Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View
              style={ focused ? Styles.tabActive : Styles.tabDefault}
            >
              <TabBarIcon
                name={'person'}
                size={22}
                color={focused ? Colors['light'].primary : Colors['light'].sixth}
              />
              {focused && (
                <Text style={{ color: Colors['light'].primary, marginLeft: 6, fontWeight: '600' }}>Profile</Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View
              style={ focused ? Styles.tabActive : Styles.tabDefault}
            >
              <TabBarIcon
                name={'bookmark'}
                size={22}
                color={focused ? Colors['light'].primary : Colors['light'].sixth}
              />
              {focused && (
                <Text style={{ color: Colors['light'].primary, marginLeft: 6, fontWeight: '600' }}>Saved</Text>
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chefs"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View
              style={ focused ? Styles.tabActive : Styles.tabDefault}
            >
              <TabBarIcon
                name={'ice-cream'}
                size={22}
                color={focused ? Colors['light'].primary : Colors['light'].sixth}
              />
              {focused && (
                <Text style={{ color: Colors['light'].primary, marginLeft: 6, fontWeight: '600' }}>Chefs</Text>
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
