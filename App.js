import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./navigation/tabs";
import { SafeAreaView } from "react-native";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import store from "./stores/store";

const Stack = createStackNavigator();




const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"MainLayout"}
      >
        <Stack.Screen name="MainLayout" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
