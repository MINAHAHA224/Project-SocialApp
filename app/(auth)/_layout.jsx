import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name={"sign-in"}
                options={{
                    headerShown: false,
                    headerTitle: ""
                }}
            />

            <Stack.Screen
                name={"sign-up"}
                options={{
                    headerShown: false,
                    headerTitle: ""
                }}
            />
        </Stack>
    )
}

export default AuthLayout