import { View,Animated,useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'

const Paginator = ({data,scrollX}) => {
  const {width} = useWindowDimensions();
  return (
    <View className="flex-row h-40">
      {data.map((_,i) => {
        const inputRange = [(i-1) * width,i * width,(i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10,20,10],
          extrapolate:'clamp',
        })

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange:[0.3,1,0.3],
          extrapolate:'clamp',
        })

        return <Animated.View 
          style={[
            styles.dot,{
              width:dotWidth,
              opacity,
            }
          ]} key={i.toString()}/>
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    height:10,
    borderRadius:5,
    backgroundColor:'#2196F3',
    marginHorizontal:8,
  }
})

export default Paginator