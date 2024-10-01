import { View, Text, useWindowDimensions, Image, StyleSheet } from 'react-native'
import React from 'react'

const OnboardingItem = ({item}) => {
    const {width} = useWindowDimensions();
  return (
    <View style={[styles.container,{width}]}>
        <Image source={item.image} style={[styles.image,{width,resizeMode:'contain'}]}/>
        <View style={{flex:0.3}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:30
    },
    image:{
        height:300,
        justifyContent:'center'
    },
    title:{
        fontWeight:'800',
        fontSize:28,
        marginBottom:10,
        color:'#2196F3',
        textAlign:'center'
    },
    description:{
        fontWeight:'300',
        color:'#62656b',
        textAlign:'center',
        paddingHorizontal:64
    }
})

export default OnboardingItem