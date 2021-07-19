import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Fonts} from '../consts';

const ListItem = ({
  sender,
  beneficiary,
  name,
  amount,
  date,
  status,
  color,
  fontColor,
  bgColor,
  borderWidth,
  borderColor,
  width,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[styles.containerStatusColor, {backgroundColor: color}]} />
      <View style={styles.containerAccount}>
        <View style={styles.containerBank}>
          <Text style={styles.textBank}>{sender}</Text>
          <Image
            style={styles.image}
            source={require('../images/right-arrow.png')}
          />
          <Text style={styles.textBank}>{beneficiary}</Text>
        </View>
        <Text style={styles.textName}>{name}</Text>
        <View style={styles.containerBank}>
          <Text style={[styles.textName, {width: 90}]}>{amount}</Text>
          <Image
            style={styles.imageDot}
            source={require('../images/dot.png')}
          />
          <Text style={styles.textName}>{date}</Text>
        </View>
      </View>
      <View style={styles.containerStatus}>
        <View
          style={[
            styles.containerType,
            {
              backgroundColor: bgColor,
              borderWidth: borderWidth,
              borderColor: borderColor,
              width: width,
            },
          ]}>
          <Text style={[styles.text, {color: fontColor}]}>{status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor: 'white',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'rgba(85, 85, 85, 0.16)',
    marginHorizontal: 16,
  },
  containerBank: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  containerStatusColor: {
    width: 8,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  containerStatus: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 110,
  },
  containerAccount: {
    width: '58%',
    marginLeft: 8,
  },
  textBank: {
    color: 'black',
    fontFamily: Fonts.BOLD,
  },
  image: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
  textName: {
    color: 'black',
    fontFamily: Fonts.MEDIUM,
  },
  imageDot: {
    marginLeft: 4,
    marginRight: 8,
    width: 8,
    height: 8,
    alignSelf: 'center',
  },
  containerType: {
    borderRadius: 6,
    paddingVertical: 8,
    alignItems: 'center',
  },
  text: {
    fontFamily: Fonts.BOLD,
  },
});

export default ListItem;
