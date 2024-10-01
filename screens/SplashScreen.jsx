import { Image, StyleSheet } from "react-native";
import { View } from 'react-native';
import {icon} from '../assets/icon.png';


export default function SplashScreen(){
    return (
        <View style={styles.container}>
            <View>
                <Image source={icon} style={styles.image}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        width:100,
        height:100,
        resizeMode:'cover',
    }
})