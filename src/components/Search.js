/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TextInput, View, Image, Text} from 'react-native';
import {Colors, Fonts} from '../consts';

const Search = ({onChangeText}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerSearch}>
        <Image style={styles.image} source={require('../images/search.png')} />
        <TextInput
          style={styles.input}
          placeholder="Cari nama, bank, atau nominal"
          onChangeText={onChangeText}
        />
      </View>
      <View style={[styles.containerSearch, {alignItems: 'center'}]}>
        <Text style={styles.sort}>URUTKAN</Text>
        <Image
          style={styles.imageSearch}
          source={require('../images/arrow-down.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderColor: 'rgba(85, 85, 85, 0.16)',
    borderWidth: 1,
    marginHorizontal: 16,
    marginVertical: 8,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 20,
    height: 20,
    tintColor: '#b3b3b3',
    alignSelf: 'center',
  },
  imageSearch: {
    width: 20,
    height: 20,
    tintColor: Colors.ORANGE,
    alignSelf: 'center',
  },
  containerSearch: {
    flexDirection: 'row',
  },
  input: {
    width: 200,
  },
  sort: {
    color: Colors.ORANGE,
    fontFamily: Fonts.BOLD,
    marginRight: 4,
  },
});

export default Search;
