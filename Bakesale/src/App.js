import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ajax from './ajax';
import DealDetail from './components/DealDetail';
import DealList from './components/DealList';

const App = () => {
  const [deals, setDeals] = useState([]);
  const [currentDealId, setCurrentDealId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await ajax.fetchInitialDeals();
      setDeals(data);
    }
    fetchData();
  }, []);

  const getCurrentDeal = () => {
    return deals.find(deal => deal.key === currentDealId);
  };

  const setCurrentDeal = id => {
    setCurrentDealId(id);
  };

  if (currentDealId) {
    return <DealDetail deal={getCurrentDeal()} />;
  }

  if (deals.length) {
    return (
      <View style={styles.container}>
        <DealList deals={deals} onItemPress={setCurrentDeal} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bakesale...</Text>
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
