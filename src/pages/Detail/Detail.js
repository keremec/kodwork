import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import Config from 'react-native-config';
import styles from './Detail.style';

import useFetch from '../../hooks/useFetch/useFetch';
import DetailCard from '../../components/cards/DetailCard';

const Detail = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(`${Config.JOBS_API_URL}/${id}`);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#f44336"
        style={{flex: 1, justifyContent: 'center'}}
      />
    );
  }

  if (error) {
    console.log(error);
  }

  return (
    <View style={styles.container}>
      <DetailCard data={data} />
    </View>
  );
};

export default Detail;
