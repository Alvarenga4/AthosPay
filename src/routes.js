import React, { useState, useEffect } from 'react'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Login from './components/Login'

export default function Routes() {

    const AuthRoute = createAppContainer(
        createStackNavigator({
            Login: {
                screen: Login,
                title: 'Login',
                navigationOptions: ({ navigation }) => {
                }
            }
        })
    )

    return (
        <>
            <AuthRoute />
        </>
    )
}