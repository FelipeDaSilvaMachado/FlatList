import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';
// import Home from './screens/home.js';

const Tab = createBottomTabNavigation();

const AppNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route })} => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } // else if (route.name === 'marvel') {
                    //     iconName = focused ? 'marvel' : 'spider';
                    // } else if (route.name === 'dc') {
                    //     iconName = focused ? 'dc' : '';
                    // }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}     
        >
            <Tab.Screen name='home' component={home}/>
            {/* <Tab.Screen name='home' component={home}/> */}
            {/* <Tab.Screen name='home' component={home}/> */}
        </Tab.Navigator >
    );
};
export default AppNavigation;