import React, { useEffect, useState } from 'react'
import { AsyncStorage } from 'react-native'
import {
    Container,
    Logo,
    Input,
    Button,
    TextButton,
} from './styles'

import logo from '../../assets/logo_athos.png'

export default function Login({ navigation }) {
    const [token, setToken] = useState('');
    
    async function handleLogin() {
        const falseToken = await AsyncStorage.setItem('token', '123456789')
        setToken(falseToken);
        navigation.replace('BottomNav');
    }
    return (
        <>
            <Container>
                <Logo resizeMode="contain" source={logo}/>
                <Input 
                    placeholder="Email"
                    placeholderTextColor="#354894"
                    keyboardType="email-address"
                />
                <Input 
                    placeholder="Senha de acesso"
                    placeholderTextColor="#354894"
                    keyboardType="default"
                />

                <Button onPress={handleLogin}>
                    <TextButton>
                        ACESSAR
                    </TextButton>
                </Button>
            </Container>
        </>
    )
}