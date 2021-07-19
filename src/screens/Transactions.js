/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem, Search } from '../components';
import { Colors } from '../consts';
import { getTransaction } from '../redux/actions';
import { capitalConvert, convertDate, convertRupiah } from '../utils';

const Transactions = () => {
  const [transaction, setTransaction] = useState({});
  const dispatch = useDispatch();
  const {transactionList} = useSelector(state => state.transactionReducer);

  useEffect(() => {
    dispatch(getTransaction());
  }, []);

  useEffect(() => {
    setTransaction(Object.keys(transactionList));
  }, []);

  console.log('transaction', transaction);

  const onTypeSearch = (text) => {
    const data = Object.keys(transactionList);
    console.log('data', data);
    const result = new RegExp(text, 'i');
    const dataFilter = data.filter(item => result.test(transactionList[item].beneficiary_name));
    console.log('dataFilter', dataFilter);
  };

  return (
    <View style={{backgroundColor: Colors.BG, flex: 1, paddingVertical: 8}}>
      <Search
        onChangeText={(text) => onTypeSearch(text)}
      />
      <FlatList
        data={Object.keys(transactionList)}
        renderItem={({item}) =>
        <ListItem
          sender={capitalConvert(transactionList[item].sender_bank)}
          beneficiary={capitalConvert(transactionList[item].beneficiary_bank)}
          name={transactionList[item].beneficiary_name}
          amount={convertRupiah(transactionList[item].amount)}
          date={transactionList[item].created_at === undefined ? '-' :
          convertDate(transactionList[item].created_at.substr(0,10))}
          status={transactionList[item].status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'}
          color={transactionList[item].status === 'SUCCESS' ? Colors.GREEN : Colors.ORANGE}
          fontColor={transactionList[item].status === 'SUCCESS' ? 'white' : 'black'}
          bgColor={transactionList[item].status === 'SUCCESS' ? Colors.GREEN : 'white'}
          borderWidth={transactionList[item].status === 'SUCCESS' ? 0 : 2}
          borderColor={transactionList[item].status === 'SUCCESS' ? 'white' : Colors.ORANGE}
          width={transactionList[item].status === 'SUCCESS' ? 80 : 110}
        />
        }
      />
    </View>
  );
};

export default Transactions;
