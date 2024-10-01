import { createContext, useContext, useState,useEffect } from "react";
import { supabase } from "../libs/supabase";
import transactions from "../transactions";

const UserDataContext = createContext();

export const useUserData = () => useContext(UserDataContext);

export const UserDataProvider = ({children,session,userDetails}) => {
    const [avatarUrl, setAvatarUrl] = useState(null);
    const [balance, setBalance] = useState(null);
    const [customPaybills,setPaybills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     // Fetch Avatar URL from Supabase
  const fetchAvatarUrl = async () => {
    try {
      if (userDetails?.avatar_url) {
        const { data, error } = await supabase.storage
          .from('avatars')
          .createSignedUrl(userDetails.avatar_url, 60); // Signed URL valid for 60 seconds

        if (error) throw error;
        setAvatarUrl(data?.signedUrl);
      }
    } catch (err) {
      console.error('Error fetching avatar URL:', err.message);
      setError('Failed to fetch avatar');
    }
  };

  const fetchCustomPaybills = async () => {
    try{
      const user_id = userDetails?.id;
      if(user_id){
        const {data,error} = await supabase
          .from('paybills')
          .select('*')
          .eq('user_id',user_id);
        if(data){
          setPaybills(data);
        }

      };

    }catch(error){
      console.error('Error fetching custom paybills:', error.message);
      setError('Failed to fetch custom paybills');
    }
  };


    // Fetch Balance from custom API
    const fetchBalance = async () => {  
        try {
          const user_id = userDetails?.id;
          if (user_id) {
            
    
            const {data:account,error} = await supabase
                .from('accounts')
                .select('balance')
                .eq('user_id',user_id)
                .single();
           if(account){
            setBalance(account.balance);
           }
          
          }
        } catch (err) {
          setBalance("5000")
          setError('Failed to fetch balance');
        }
      };




      useEffect(() => {
        if(userDetails){
            setLoading(true);
            fetchAvatarUrl();
           fetchBalance();
           fetchCustomPaybills()
          setLoading(false);
        }
      },[userDetails]);

      // useEffect(() => {
      //   const intervalId = setInterval(fetchBalance, 5000); // Poll every 5 seconds
      //   return () => clearInterval(intervalId); // Cleanup interval when component unmounts
      // }, [userDetails?.id])

        // Handle transaction success
         // Handle transaction polling (optional: if you want live updates for transactions)



     return (
        <UserDataContext.Provider 
            value={{
                avatarUrl,
                balance,
                loading,
                error,
                userDetails,
                customPaybills,
                transactions
            }}>
            {children}
        </UserDataContext.Provider>
     )
}