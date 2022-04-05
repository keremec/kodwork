import React from 'react';
import {useSelector} from 'react-redux';

import {FlatList, Text, View} from 'react-native';

import FavoriteJobCard from '../../components/cards/FavoriteJobCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './FavoriteJobs.style';

const FavoriteJobs = ({navigation}) => {
  const favorites = useSelector(favorite => favorite.favoriteList);

  const handleJobSelect = (id, levels) => {
    navigation.navigate('Details', {id, levels});
  };

  const renderFavorites = ({item}) => {
    return (
      <View style>
        <FavoriteJobCard
          job={item}
          onSelect={() => handleJobSelect(item.id, item.levels)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={renderFavorites}
          keyExtractor={item => item.id}
        />
      ) : (
        <View style={styles.emptyFav}>
          <Icon name={'cards-heart-outline'} style={styles.icons} />
          <Text style={styles.emptyText}>You Don't Have a Favorite Yet</Text>
        </View>
      )}
    </View>
  );
};

export default FavoriteJobs;
