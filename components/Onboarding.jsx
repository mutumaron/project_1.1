import { View, Text, FlatList, StyleSheet, Animated } from 'react-native'
import React, { useRef,useState } from 'react'
import slides from '../slides';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import { useNavigation } from '@react-navigation/native';
import AuthButton from './AuthButton';

const Onboarding = () => {
  const navigation = useNavigation();
  const [currentIndex,setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const  viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;
  return (
    <View style={styles.container} className="pb-12 justify-evenly">
      <Text className="pt-9 font-bold text-lg">Welcome to Jamii Mobile</Text>
      <View style={{flex:3}}>
      <FlatList 
        data={slides} 
        renderItem={({item}) => <OnboardingItem item={item}/>}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],{
          useNativeDriver:false,
        })}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
        />
      </View>
      
        {currentIndex === slides.length - 1 ? (
          <View className="w-3/4">
            <AuthButton title={"Get Started"} route={"Intro"}/>
          </View>
        ) : (
          <Paginator data={slides} scrollX={scrollX}/>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-around'
  }
})

export default Onboarding
