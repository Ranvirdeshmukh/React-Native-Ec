import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';

const Stack = createStackNavigator();

function SearchTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={VideoList}
        options={{
          title: 'Youtube Search',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={VideoDetail}
        options={{ headerTitleStyle: { display: 'none' } }}
      />
    </Stack.Navigator>
  );
}

export default SearchTab;
