import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DealList = ({deals}) => {
  return (
    <View style={styles.list}>
      <Text>Deals...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
  },
});

export default DealList;
