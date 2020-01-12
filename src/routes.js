import React, { useState, useEffect } from 'react'
import { AsyncStorage } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './components/Login'

import Home from './pages/Home'

export default function Routes() {
    const [token, setToken] = useState('');

    useEffect(() => {
        async function verifyToken() {
            const falseToken = await AsyncStorage.getItem('token')
            setToken(falseToken)
        }
        verifyToken()
    })
    
    const RootNav = createStackNavigator({
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => {
                return {
                    headerTitle: (
                        <Icon name="qrcode" size={24} color="#354894" />
                    )
                }
            }
        }
    })


    const BottomNav = createAppContainer(
        createBottomTabNavigator({
            Home: {
                screen: RootNav,
            }
        })
    )

    const AuthRoute = createAppContainer(
        createStackNavigator({
            Login: {
                screen: Login,
                navigationOptions: ({ navigation }) => {
                    return {
                        headerShown: true,
                        headerTitle: ''
                    }
                }
            },
            BottomNav: {
               screen: BottomNav,
               navigationOptions: ({ navigation }) => {
                return {
                    headerShown: false,
                }
            }
            }
        })
    )

    return (
        <>
            {token == null ? (
                <AuthRoute />
            ): (
                <BottomNav />
            )}
            
        </>
    )
}