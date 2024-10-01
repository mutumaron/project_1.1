import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {BarChart} from 'react-native-gifted-charts';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/outline';

const SummaryChart = () => {
  return (
    <View className="mx-3 bg-white mt-4 p-3 rounded-xl shadow-lg mb-4">
        <Text className="font-semibold text-lg">Mar 24 - Mar 30</Text>
        <Text className="text-gray-500 text-sm">Total Expense</Text>
        <Text className="text-2xl font-bold mb-3">KES 3709.89</Text>

      <BarChart 
        data={[
            {value: 100,label:"Sun"},
            {value:200,label:"Mon"},
            {value:0,label:"Tue"},
            {value:0,label:"Wed"},
            {value:90,label:"Thur"},
            {value:20,label:"Fri"},
            {value:150,label:"Sat"},

        ]}
        height={200}
        width={290}
        barWidth={18}
        minHeight={3}
        barBorderRadius={3}
        spacing={23}
        noOfSections={4}
        yAxisThickness={0}
        xAxisThickness={0}
        xAxisLabelTextStyle={{color:"gray"}}
        yAxisTextStyle={{color:"gray"}}
        isAnimated
        animationDuration={300}
        frontColor={"#064477"}
        gradientColor={"#2196F3"}
        showGradient
        />
        <View className="flex-row justify-between items-center mt-5 px-4">
        <TouchableOpacity className="bg-gray-300 w-7 h-7 rounded-lg items-center justify-center">
          <ChevronLeftIcon color={"#fff"} size={25}/>

        </TouchableOpacity>
        <SegmentedControl
          values={["Income","Expense"]}
          style={{width:200}}
          />
           <TouchableOpacity className="bg-gray-300 w-7 h-7 rounded-lg items-center justify-center">
          <ChevronRightIcon color={"#fff"} size={25}/>
        </TouchableOpacity>
        </View>
      
    </View>
  )
}

export default SummaryChart