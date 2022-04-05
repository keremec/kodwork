import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  RefreshControl,
  View,
} from 'react-native';
import Config from 'react-native-config';
import styles from './Jobs.style';
import useFetch from '../../hooks/useFetch';
import JobCard from '../../components/cards/JobCard';

export default function Jobs({navigation}) {
  const flatListRef = React.useRef();
  const [page, setPage] = useState(1);
  const handlePage = () => {
    setPage(page + 1);
  };
  const handlePageBottom = () => {
    setPage(page + 1);
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };

  const {data, loading, error} = useFetch(
    `${Config.JOBS_API_URL}?page=${page}`,
  );

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

  const handleJobSelect = (id, levels) => {
    navigation.navigate('Details', {id, levels});
  };

  function renderJobs({item}) {
    return (
      <JobCard
        job={item}
        onSelect={() => handleJobSelect(item.id, item.levels)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data.results}
        keyExtractor={item => item.id}
        renderItem={renderJobs}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={handlePage} />
        }
        ListFooterComponent={
          <Button
            color={'#f44336'}
            marginBottom
            title={'Refresh'}
            onPress={handlePageBottom}
          />
        }
        contentContainerStyle={{paddingBottom: 25}}
      />
    </View>
  );
}
