import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, containerStyle, handlePress, isLoading, textStyles }) => {
    return (
        <TouchableOpacity className={`bg-secondary min-h-[62px] items-center justify-center rounded-xl ${containerStyle} ${isLoading ? 'opacity-50' : ''} `}
            onPress={handlePress}
            disabled={isLoading}
        >
            <Text className={`text-lg text-primary font-psemibold ${textStyles}`}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton