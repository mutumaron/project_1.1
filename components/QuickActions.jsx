import React from 'react';
import { TouchableOpacity, View,Text } from 'react-native';
import { ArrowDownIcon, ArrowRightIcon, ArrowsUpDownIcon, ArrowUpIcon, PaperAirplaneIcon } from 'react-native-heroicons/outline';

const iconMap = {
    bell: ArrowsUpDownIcon,
    right:ArrowRightIcon,
    up:ArrowUpIcon,
    down:ArrowDownIcon,
    airplane:PaperAirplaneIcon
  };

const QuickActions = ({iconName,onPress,text,background}) => {
    const Icon = iconMap[iconName]; // Get the appropriate icon component

    if (!Icon) {
      console.error(`Icon ${iconName} does not exist`);
      return null;
    }

    return (
      <View className="justify-center items-center">
        
        <TouchableOpacity onPress={onPress} className={`bg-[#064477] justify-center items-center py-4 px-4 rounded-xl`}>
                  <Icon size={35} color="#fff"/>
            </TouchableOpacity>
            {iconName && (
                  <Text className={" text-md font-bold pt-3 text-white"}>
                     {text}
                 </Text>
               )}
      </View>
        
    );
}



export default QuickActions;
