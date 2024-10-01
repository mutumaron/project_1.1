import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './../screens/HomeScreen';
import TransactionHistoryScreen from "../screens/TransactionHistoryScreen";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen}/>
    </Stack.Navigator>
}

export default HomeStackNavigator;