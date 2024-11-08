import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

const ToggleSwitch = ({isEnabled, setIsEnabled}) => {
  

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    // <View className='bg-black' style={styles.container}>
      <Switch
          trackColor={{false: '#767577', true: Colors['light'].primary }}
          thumbColor={'#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ToggleSwitch;
