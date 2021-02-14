import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OfflineMode from "./components/offline";
import OnlineMode from "./components/online";
import SFW from "./game/sfw";
import NSFW from "./game/nsfw";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>{
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='Offline Mode' component={OfflineMode} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='Online Mode' component={OnlineMode} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='questions_sfw' component={SFW} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='questions_nsfw' component={NSFW} options={{ headerShown: false }}></Stack.Screen>
          </Stack.Navigator>
        }</NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Choose your mode</Text>
      <Button
        title="Offline Mode"
        onPress={() => navigation.navigate('Offline Mode')}
      />
      <Button
        title="Online Mode"
        onPress={() => navigation.navigate('Online Mode')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});


