import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: 'white',
  },
  headerContainer: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  locationsTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f44336',
  },
  locationText: {
    color: 'black',
  },
  LevelTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#f44336',
  },
  LevelText: {
    color: 'black',
  },
  content: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: '#dedede',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  p: {
    color: 'black',
    fontSize: 17,
  },
  button: {
    backgroundColor: '#f44336',
    minWidth: 50,
    height: 40,
    borderRadius: 7,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginEnd: 5,
  },
  icons: {
    color: 'white',
    alignSelf: 'center',
    paddingRight: 7,
    textAlign: 'center',
    fontSize: 20,
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
