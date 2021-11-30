import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";


import React from 'react';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
    <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen 
            name="HomeScreen"
            component={HomeScreen} 
            options={{
                title: 'Calificaciones',
                headerStyle: {
                  backgroundColor: '#C4C4C4',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',    
              },
              }}
            />
    </Stack.Navigator>
         
    )

}
export default MainStackNavigator