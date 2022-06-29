import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ajax from './ajax';
import DealList from './components/DealList';

const App = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await ajax.fetchInitialDeals();
      setDeals(data);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {deals.length ? (
        <DealList deals={deals} />
      ) : (
        <Text style={styles.header}>Bakesale...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  },
});

export default App;
