import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Jobs from './pages/Jobs';
import FavoriteJobs from './pages/FavoriteJobs';
import Detail from './pages/Detail';
import FavoriteProvider from './context/FavoriteProvider/FavoriteProvider';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const JobsDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="JobsPage"
      screenOptions={{
        drawerActiveTintColor: '#f44336',
        drawerInactiveTintColor: 'black',
        drawerStyle: {
          width: 240,
        },
      }}>
      <Drawer.Screen
        name="Jobs"
        component={Jobs}
        options={{headerTintColor: '#f44336'}}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteJobs}
        options={{headerTintColor: '#f44336'}}
      />
    </Drawer.Navigator>
  );
};

export default function Router() {
  return (
    <FavoriteProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Jobs"
            component={JobsDrawer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Details"
            component={Detail}
            options={{headerTintColor: '#f44336'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoriteProvider>
  );
}
