import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { icons } from '../constants'
import CustomButton from './customButton'
import { useRouter } from 'expo-router'
const FormFiled = ({ title, value, placeholder, otherStyle, handleChangeText, keyboardType }) => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false)

    return (
        <View className={`space-y-2 ${otherStyle}`}>
            <Text className={"text-base text-gray-100 text-xl font-pmedium"}>{title}</Text>

            <View className={"w-full h-16 border-2 border-black-100 rounded-2xl bg-black-100 px-4 focus:border-secondary-100 flex-row items-center"}>
                <TextInput className={"flex-1 text-white font-psemibold text-base text-1xl "}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7B7B8B"
                    onChangeText={handleChangeText}
                    keyboardType={keyboardType}
                    secureTextEntry={title === "Password" && showPassword !== true}
                />
                {title === "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            resizeMode={"contain"}
                            className={"w-6 h-6"}
                        />
                    </TouchableOpacity>
                )}
            </View>


        </View>
    )
}

export default FormFiled