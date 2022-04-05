import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './reducer';

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

const FavoriteProvider = ({children}) => {
  const defaultFavoriteList = [];
  const [favoriteList, setFavoriteList] = useState(defaultFavoriteList);
  const [storageLoading, setStorageLoading] = useState(true);
  useEffect(() => {
    getData().then(r => r && setFavoriteList(r));
    setStorageLoading(false);
  }, []);

  const store = createStore(reducer, {favoriteList, storageLoading});

  return <Provider store={store}>{children}</Provider>;
};

export default FavoriteProvider;
