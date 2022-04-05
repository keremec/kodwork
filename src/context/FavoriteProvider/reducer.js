import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    // saving error
  }
};

export default (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const {job} = action.payload;
      const filtered = state.favoriteList.find(item => item.id === job.id);
      let newList = [];
      if (filtered) {
        return state;
      } else {
        newList = [...state.favoriteList, job];
        storeData(newList);
        return {...state, favoriteList: newList};
      }

    case 'REMOVE_FAVORITE':
      const {id} = action.payload;

      const list = state.favoriteList.filter(item => item.id !== id);
      storeData(list);
      return {...state, favoriteList: list};

    default:
      return state;
  }
};
