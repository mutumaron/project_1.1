import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WalletScreen from './../screens/WalletScreen';
import TransactionHistoryScreen from "../screens/TransactionHistoryScreen";

const Stack = createNativeStackNavigator();

const WalletStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="WalletHome" component={WalletScreen}/>
            <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen}/>
        </Stack.Navigator>
    );
};

export default WalletStackNavigator;