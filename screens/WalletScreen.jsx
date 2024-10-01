import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState,useMemo  } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AdjustmentsHorizontalIcon, CurrencyDollarIcon } from 'react-native-heroicons/outline';
import BankCard from '../components/BankCard';
import TransactionCard from '../components/TransactionCard';
import SummaryChart from '../components/SummaryChart';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useUserData } from '../store/AppContext';

const WalletScreen = () => {
  const { transactions, balance } = useUserData();
  const [selectedSegment, setSelectedSegment] = useState('All'); // Default filter
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    // Set header options
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    const now = new Date();
    const filterTransactions = () => {
      let filtered = transactions;

      switch (selectedSegment) {
        case 'Received':
        filtered = transactions.filter(item => item.to_account === true);
        break;
      case 'Sent':
        filtered = transactions.filter(item => item.from_account === false);
        break;
      case 'Today':
        filtered = transactions.filter(item => {
          const transactionDate = new Date(item.transaction_date);
          return (
            transactionDate.getDate() === now.getDate() &&
            transactionDate.getMonth() === now.getMonth() &&
            transactionDate.getFullYear() === now.getFullYear()
          );
        });
        break;
      case 'Yesterday':
        const yesterday = new Date();
        yesterday.setDate(now.getDate() - 1);
        filtered = transactions.filter(item => {
          const transactionDate = new Date(item.transaction_date);
          return (
            transactionDate.getDate() === yesterday.getDate() &&
            transactionDate.getMonth() === yesterday.getMonth() &&
            transactionDate.getFullYear() === yesterday.getFullYear()
          );
        });
        break;
      case 'Last Week':
        const lastWeek = new Date();
        lastWeek.setDate(now.getDate() - 7);
        filtered = transactions.filter(item => {
          const transactionDate = new Date(item.transaction_date);
          return transactionDate >= lastWeek && transactionDate <= now;
        });
        break;
      case 'Last Month':
        const lastMonthStart = new Date();
        lastMonthStart.setDate(1); // First day of current month
        lastMonthStart.setMonth(lastMonthStart.getMonth() - 1); // Go back one month

        const lastMonthEnd = new Date();
        lastMonthEnd.setDate(0); // Last day of last month

        filtered = transactions.filter(item => {
          const transactionDate = new Date(item.transaction_date);
          return transactionDate >= lastMonthStart && transactionDate <= lastMonthEnd;
        });
        break;
      default:
        break;
      }

      setFilteredTransactions(filtered.reverse());
    };

    filterTransactions();
  }, [selectedSegment, transactions]);

  const handleSegmentChange = (index) => {
    const segments = ["All", "Received", "Sent", "Today", "Yesterday", "Last Week", "Last Month"];
    setSelectedSegment(segments[index]);
  };

  // Create a data array for bank cards
  const bankCardsData = [...Array(3)].map((_, index) => ({ balance }));

  const handleTransactionHistoryClick = (transaction) => {
    navigation.navigate('TransactionHistory', { transaction });
  };


    // Memoized transactions
    const memoizedTransactions = useMemo(() => {
      return filteredTransactions.map((item, index) => (
        <TransactionCard key={index} item={item} onclick={handleTransactionHistoryClick} />
      ));
    }, [filteredTransactions, navigation]);

  return (
    <View className="flex-1 bg-blue-50">
      <SafeAreaView className="pt-2 mx-7 sticky top-0 z-50 pb-5">
        <Text className="font-semibold text-xl text-center">Wallet</Text>
      </SafeAreaView>
      <ScrollView overScrollMode='never' showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
        <View className="items-center">
          <CurrencyDollarIcon color={"#1B1B3A"} size={40} />
        </View>

        <ScrollView horizontal={true} overScrollMode='never' showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 25, padding: 25, justifyContent: 'space-around' }}>
          {bankCardsData.map((item, index) => (
            <BankCard key={index} balance={item.balance} />
          ))}
        </ScrollView>

        <SummaryChart />
        <View className="px-7 bg-white mx-2 mt-3 rounded-lg">
          <View className="flex-row items-center gap-3 pt-7 pb-3">
            <View className="bg-gray-300 p-2 rounded-lg">
              <AdjustmentsHorizontalIcon size={20} color={"#000"} />
            </View>
            <ScrollView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <SegmentedControl
              values={["All", "Received", "Sent", "Today", "Yesterday", "Last Week", "Last Month"]}
              selectedIndex={["All", "Received", "Sent", "Today", "Yesterday", "Last Week", "Last Month"].indexOf(selectedSegment)}
              onChange={({ nativeEvent }) => handleSegmentChange(nativeEvent.selectedSegmentIndex)}
              style={{ width: 700, padding: 5, height: 40 }}
            />
            </ScrollView>
            </ScrollView>
      
          </View>

          <View>
          {memoizedTransactions.length > 0 ? memoizedTransactions : <Text className="text-center">No Transactions Found</Text>}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WalletScreen;
