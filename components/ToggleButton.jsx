import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import { styled } from 'nativewind';

const ToggleButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View className="justify-between">
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        className="ml-2"
      />
    </View>
  );
};

export default styled(ToggleButton);