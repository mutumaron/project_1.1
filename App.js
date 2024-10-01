import react,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { HomeIcon as HomeIconSolid,WalletIcon as WalletIconSolid,Cog8ToothIcon as Cog8ToothIconSolid, AdjustmentsHorizontalIcon as CurrencyDollarIconSolid } from 'react-native-heroicons/solid';
import { HomeIcon  as HomeIconOutline, WalletIcon as WalletIconOutline,Cog8ToothIcon as Cog8ToothIconOutline,AdjustmentsHorizontalIcon as CurrencyDollarIconOutline} from 'react-native-heroicons/outline';
import MenuStackNavigator from './navigators/MenuStackNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationStackNav from './navigators/AuthenticationStackNav';
import { supabase } from './libs/supabase';
import { UserDataProvider } from './store/AppContext';
import TransactionHistoryScreen from './screens/TransactionHistoryScreen';
import WalletScreen from './screens/WalletScreen';
import WalletStackNavigator from './navigators/WalletStackNavigator';
import SplashScreen from './screens/SplashScreen';


const TabNav = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  tabBarActiveTintColor:"#2196F3",
  tabBarInactiveTintColor:"#1B1B3A",
  headerShown: false,
  tabBarLabelStyle: {
    fontSize:14,
    paddingBottom:5,
    fontWeight:400
    },
    tabBarStyle:{
      height:60,
      paddingTop:0,
      
    },
    tabBarHideOnKeyboard: true

}

const fetchUserDetails = async (userId) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  
  if (error) {
    console.error('Error fetching user details:', error);
    return null;
  }
  return data;
};

const MainApp = ({session,userDetails}) => {
  return(
    
    <TabNav.Navigator screenOptions={screenOptions} >
      <TabNav.Screen name='Home'
      options={{
        tabBarIcon:({focused}) => (
          focused ? (
            <HomeIconSolid size={25} color={"#2196F3"}/>
          ) : (
            <HomeIconOutline size={25} color={"#1B1B3A"}/>
          )
        ),
    
      }}>
        {props => <HomeScreen {...props} session={session} userDetails={userDetails}/>}
      </TabNav.Screen>
      <TabNav.Screen name='Wallet' component={WalletStackNavigator}
          options={{
            tabBarIcon:({focused}) => (
              focused ? (
                <WalletIconSolid size={25} color={"#2196F3"}/>
              ) : (
                <WalletIconOutline size={25} color={"#1B1B3A"}/>
              )
            ),
        
          }}/>
          <TabNav.Screen 
          name='TransactionHistory' 
          component={TransactionHistoryScreen} 
          options={{ tabBarButton: () => null }} // Hides the tab button
        />
    
      <TabNav.Screen name='Settings' component={SettingsScreen}
          options={{
            tabBarIcon:({focused}) => (
              focused ? (
                <Cog8ToothIconSolid size={25} color={"#2196F3"}/>
              ) : (
                <Cog8ToothIconOutline size={25} color={"#1B1B3A"}/>
              )
            ),
        
          }}/>

      <TabNav.Screen name='Menu' component={MenuStackNavigator}
          options={{
            tabBarIcon:({focused}) => (
              focused ? (
                <CurrencyDollarIconSolid size={25} color={"#2196F3"}/>
              ) : (
                <CurrencyDollarIconOutline size={25} color={"#1B1B3A"}/>
              )
            ),
            headerShown:false
            
          }}
          />

    </TabNav.Navigator>
  
  )
}


export default function App() {
  const [session,setSession] = useState(null);
  const [isShowSplash,setIsShowSplash] = useState(true); 
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
  },[])

  useEffect(() => {
    const initializeSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);

      if (session?.user?.id) {
        const details = await fetchUserDetails(session.user.id);
        setUserDetails(details);
      }
    };

    initializeSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session?.user?.id) {
        fetchUserDetails(session.user.id).then(details => setUserDetails(details));
      } else {
        setUserDetails(null);
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  },[]);

  return (
<UserDataProvider session={session} userDetails={userDetails}>
<NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} >
    {!isShowSplash ? (
          <>
           {session ? (
            <Stack.Screen name="MainApp">
              {props => <MainApp {...props} session={session} userDetails={userDetails}/>}
            </Stack.Screen>
          ) : (
            <Stack.Screen name='Authentication' component={AuthenticationStackNav}/>
  
          )}
          </>
    ) : (
      <Stack.Screen name='Splash' component={SplashScreen} />
    )}
      </Stack.Navigator>
    </NavigationContainer>
</UserDataProvider>
  
  );
}