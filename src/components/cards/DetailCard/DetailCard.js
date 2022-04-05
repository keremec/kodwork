import React from 'react';
import {Linking, ScrollView, Text, TouchableOpacity, View} from 'react-native';

import HTMLView from 'react-native-htmlview';

import styles from './DetailCard.style';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

let urlConst = 'https://www.themuse.com/job/redirect/';

const DetailCard = ({data}) => {
  const dispatch = useDispatch();

  const handleFavorite = job => {
    if (isFav) {
      dispatch({type: 'REMOVE_FAVORITE', payload: {id: job.id}});
    } else {
      dispatch({type: 'ADD_FAVORITE', payload: {job}});
    }
  };

  const favorites = useSelector(favorite => favorite.favoriteList);
  let isFav = !!favorites.find(item => item.id === data.id);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{data.name}</Text>
          <Text style={styles.locationsTitle}>
            Locations:{' '}
            <Text style={styles.locationText}>{data.locations[0].name}</Text>
          </Text>
          <Text style={styles.LevelTitle}>
            Job Level:{' '}
            <Text style={styles.LevelText}>{data.levels[0].name}</Text>
          </Text>
        </View>
        <View style={styles.content}>
          <HTMLView value={data.contents} stylesheet={styles} />
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(urlConst + data.id)}>
          <Icon name={'link-variant'} style={styles.icons} />
          <Text style={styles.text}>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleFavorite(data)}>
          <Icon
            name={isFav ? 'cards-heart' : 'cards-heart-outline'}
            style={styles.icons}
          />
          <Text style={styles.text}>Favorite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailCard;
