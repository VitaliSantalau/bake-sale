import React from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Deal from './Deal';

const DealList = ({deals, onItemPress}) => {
  return (
    <SafeAreaView style={styles.list}>
      <FlatList
        data={deals}
        renderItem={({item}) => <Deal deal={item} onPress={onItemPress} />}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    width: '100%',
    backgroundColor: '#eee',
  },
});

export default DealList;
