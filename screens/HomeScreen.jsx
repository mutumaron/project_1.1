import { View, Text, Image, ScrollView, Button, StatusBar, StyleSheet, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import React,{useEffect,useState,useRef} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BellIcon, ChevronRightIcon, ClockIcon, EyeSlashIcon, PlusIcon, QrCodeIcon, } from 'react-native-heroicons/outline';
import QuickActions from '../components/QuickActions';
import BalanceCard from '../components/BalanceCard';
import BankCard from '../components/BankCard';
import TransactionCard from '../components/TransactionCard';
import { BottomSheetModal,BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SendMoney from '../components/SendMoney';
import TransferMoney from '../components/TransferMoney';
import DepositMoney from '../components/DepositMoney';
import { supabase } from '../libs/supabase';
import DetailCard from '../components/DetailCard';
import QuickTransaction from '../components/QuickTransaction';
import Success from '../components/Success';
import paybills from '../paybills';
import { LinearGradient } from 'expo-linear-gradient';
import { useUserData } from '../store/AppContext';
import AddPaybill from '../components/AddPaybill';
import QuickPaybillTransaction from '../components/QuickPaybillTransaction';
  

const HomeScreen = ({session,userDetails}) => {

  const { avatarUrl,balance,customPaybills,transactions,loading, error } = useUserData();


    const navigation = useNavigation();
    const bottomSheetModalRef = useRef(null);
    const [transactionDetails, setTransactionDetails] = useState(null);
    const snapPoints = ["50%","75%"];
    const [isOpen,setIsOpen] = useState(false);
    const [selectedAction,setSelectedAction] = useState(null);
    const [paybillDetails,setPaybillDetails] = useState(null);



    const handlePresentModal = (actionType) => {
        setSelectedAction(actionType);
        bottomSheetModalRef.current?.present();
        setIsOpen(true);
    }

    const sortedTransactions = [...transactions]
    .sort((a, b) => new Date(b.transaction_date) - new Date(a.transaction_date))
    .slice(0, 3); // Get the first three transactions


    useEffect(() => {
        navigation.setOptions({
            headerShown:false,
        })
    }, []);

    const handleTransactionHistoryClick = (transaction) => {
      navigation.navigate('TransactionHistory',{transaction});
    }

    const handleTransactionSuccess = (details) => {
      setTransactionDetails(details);
      handlePresentModal('transactionSuccess');
    };

    const handleQuickTransactions = (item) => {
      setPaybillDetails(item);
      handlePresentModal('quickTransactions');
    }

    const handleAddPaybill = () => {
    handlePresentModal("AddPaybill");};

  return (
    <GestureHandlerRootView>
         <BottomSheetModalProvider>
         <View className={`flex-1 bg-blue-50 ${isOpen? "opacity-50" : ""}`}>
                <SafeAreaView className="pt-2 px-5 sticky top-0 z-50 pb-2 bg-[#2196F3]">
        <View className="flex-row justify-between items-center ">
         <View className="bg-blue-50 rounded-xl flex-row justify-center items-center ">
        <View className="bg-blue-200 rounded-xl p-1">
        {avatarUrl && (
                <Image 
                  source={{
                      uri: avatarUrl
                  }}
                  
                  className="h-10 w-10 bg-blue-200 p-4 rounded-xl "/>
            )}
            <View className="absolute right-0 bottom-0 w-3 h-3 bg-green-500 rounded-full"/>
        </View>
            <Text className="px-2 font-bold">{userDetails?.username}.</Text>
            <ChevronRightIcon size={15} color={"#2196F3"}/>
         </View>
            <View className="flex-row gap-2">
          
            <View className="bg-blue-50 rounded-xl p-1">
            <BellIcon size={30} color={"#000"}/>
            <View className="w-5 h-5 rounded-full absolute items-center justify-center bg-orange-400 right-[-10] top-[-8]">
              <Text className="text-white">4</Text>
            </View>
            </View>
            <View className="rounded-full p-1">
            <ClockIcon size={30} color={"#fff"}/>
            </View>
            <View className="bg-gray-200 rounded-xl p-1">
            <QrCodeIcon size={30} color={"#000"}/>
            </View>
            </View>
   
           
        </View>

   
    </SafeAreaView>
        <ScrollView contentContainerStyle={{ paddingBottom: 20 }} overScrollMode="never">

        <View className="gap-2 bg-[#2196F3]">
            <LinearGradient
              colors={['#2196F3','#064477']}
               style={styles.background}/>
              <View className="flex-row justify-between items-center pr-5">
              <Text className="px-5 py-4 w-1/2 text-gray-300 text-lg">Good Morning,<Text className="font-bold text-white text-xl"> {userDetails?.full_name}.</Text></Text>
              <Image source={require('../assets/images/coins-amico.png')} className="h-20 w-20"/>
              </View>

             <View className="py-3 px-4">
   
            <View className="px-2 justify-center items-center">
              <Text className="text-gray-400 font-semibold pb-2">Current balance</Text>
            <Text className=" text-4xl font-bold pb-2 text-white">KES <Text className="text-gray-200">{balance || "0.00"}</Text></Text>
            <View className="flex-row gap-2">
              <Text className="text-gray-300">Hide balance</Text>
              <EyeSlashIcon color={"#fff"}/>
            </View>
           </View>
    <View className="mb-4"/>
          <View className="flex-row justify-between mt-2 pb-2 rounded-xl">
              <QuickActions 
                    iconName="right"
                    text="Transfer"
                    background=""
                    onPress={() => handlePresentModal("transferMoney")}
                />
                  <QuickActions 
                    iconName="up"
                    text="Withdraw"
                    background={"bg-orange-100"}
                    onPress={() => handlePresentModal("sendMoney")}
                />
                <QuickActions 
                  iconName="down"
                  text="Topup"
                  background={"bg-gray-100"}
                  onPress={() => handlePresentModal("depositMoney")}
                />
                <QuickActions 
                iconName="bell"
                text="Deposit"
                background={"bg-purple-100"}
                onPress={() => handlePresentModal("depositMoney")}
            />
           
                </View>    
                
            </View>
         </View>
            <View>
              <Text className="font-bold px-5 pt-5">Quick Transactions</Text>
              <View className="flex-row justify-center items-center mx-4">
              <TouchableOpacity className="items-center" onPress={handleAddPaybill}>
                  <View className="w-12 h-12 items-center justify-center rounded-full bg-gray-500">
                    <PlusIcon color={"#fff"} size={30}/>
                  </View>
                  <Text className="mt-1 text-gray-500">New</Text>
                </TouchableOpacity>
              <ScrollView overScrollMode='never' horizontal={true}  showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 25,padding:25,justifyContent: 'space-between',}}>
                {customPaybills.map((item) => <QuickTransaction item={item} key={item.id} onPress={() => handleQuickTransactions(item)}/>)}
                {paybills.map((item) => <QuickTransaction item={item} key={item.id} onPress={() => handleQuickTransactions(item)}/>)}

              </ScrollView>
              </View>
           
            </View>


        
          
            <View>
            <View className="flex-row justify-between items-center px-6">
                <Text className="font-bold text-lg">My Cards</Text>
                <Text className="text-[#2196F3]">View All</Text>
            </View>
            <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 25,padding:25,justifyContent: 'space-around',}}>
               
                <BankCard/>
                <BankCard/>
                <BankCard/>
            </ScrollView>
            </View>
            <View>
            <View className=" mb-4 px-6 flex-row flex-wrap justify-between">
              <View className="w-[48%]">
              <DetailCard/>
              </View>
              <View className="w-[48%]">
              <DetailCard/>
              </View>
            </View>
            <View className="flex-row justify-between items-center px-6">
                <Text className="font-bold text-lg">Transactions</Text>
                <TouchableOpacity onPress={() => {navigation.navigate('Wallet')}}>
                  <Text className="text-[#01BAEF]">View All</Text>
                </TouchableOpacity>
            </View>
            <View className="mx-6 px-7 mt-5 py-3 rounded-xl bg-white">
                {sortedTransactions.map((item,index) => (
                  <TransactionCard key={index} item={item}  onclick={handleTransactionHistoryClick}/>
                ))}
               
            </View>
            </View>

            
            <BottomSheetModal ref={bottomSheetModalRef} index={1}
            snapPoints={snapPoints}
            backgroundStyle={{borderRadius:50}}
            onDismiss={() => setIsOpen(false)}>
                {selectedAction === "sendMoney" && (
                    <SendMoney/>
                )}
                {selectedAction === "transferMoney" && (
                    <TransferMoney />
                )}
                {selectedAction === "depositMoney" && (
                    <DepositMoney/>
                )}
                {selectedAction === 'transactionSuccess' && transactionDetails && (
                <Success transactionDetails={transactionDetails} />
              )}
                {selectedAction === "AddPaybill" && (
                  <AddPaybill/>
                )}
                {selectedAction === "quickTransactions" && (
                  <QuickPaybillTransaction item={paybillDetails}/>
                )}
            </BottomSheetModal>
        </ScrollView>
    </View>
    
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
   
   
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 360,
  },
})