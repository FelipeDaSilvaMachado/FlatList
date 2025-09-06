import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';
import Home from '../screens/home';
import Marvel from '../screens/marvel';
import DcComics from '../screens/dcComics';
import Jogos from '../screens/jogos';

import iconeHome from '../assets/icones/homeGeek.png';
import iconeMarvel from '../assets/icones/iconeMarvel.png';
import iconeDcComics from '../assets/icones/dcComics.png';
import iconeJogos from '../assets/icones/jogos.png';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconSource;
                    if (route.name === 'Home') {
                        iconSource = iconeHome;
                    } else if (route.name === 'Marvel') {
                        iconSource = iconeMarvel;
                    } else if (route.name === 'DcComics') {
                        iconSource = iconeDcComics;
                    } else if (route.name === 'Jogos') {
                        iconSource = iconeJogos;
                    }
                    return (
                        <Image source={iconSource} style={[styles.icones,
                        {
                            tintColor: focused ? color : 'gray', width: size,
                            height: size
                        }]} />
                    );
                },
                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Marvel' component={Marvel} />
            <Tab.Screen name='DcComics' component={DcComics} />
            <Tab.Screen name='Jogos' component={Jogos} />
        </Tab.Navigator >
    );
};

const styles = StyleSheet.create({
    icones: {
        resizeMode: 'contain',
    },
});

export default AppNavigator;