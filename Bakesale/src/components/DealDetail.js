import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import ajax from '../ajax';

const DealDetail = ({deal}) => {
  const [data, setData] = useState(deal);

  useEffect(() => {
    async function fetchData() {
      const res = await ajax.fetchDealDetail(deal.key);
      setData(res);
    }
    fetchData();
  }, [deal.key]);

  return (
    <View style={styles.deal}>
      <TouchableOpacity>
        <Text>Back</Text>
      </TouchableOpacity>
      <Image source={{uri: data.media[0]}} style={styles.image} />
      <View style={styles.detail}>
        <View>
          <Text style={styles.title}>{data.title}</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.info}>
            <Text style={styles.cause}>{data.cause.name}</Text>
            <Text style={styles.price}>${data.price / 100}</Text>
          </View>
          {data.user && (
            <View>
              <Image source={{uri: data.user.avatar}} style={styles.avatar} />
              <Text>{data.user.name}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.description}>
        <Text>{data.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginTop: 50,
    borderColor: '#bbb',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  info: {
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderTopWidth: 0,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(237, 149, 45, 0.4)',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
  avatar: {
    width: 60,
    height: 60,
  },
  description: {
    padding: 10,
  },
});

export default DealDetail;
