import { View, Text, SafeAreaView, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '../../constants'
import FormFiled from '../../components/formField'
import CustomButton from '../../components/customButton'
import { Link, router, useRouter } from 'expo-router'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {
    const router = useRouter();
    // const { setUser, setIsLogged } = useGlobalContext();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""

    })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const submit = async () => {
        if (!form.username || !form.password || !form.password) {
            Alert.alert('Error', "please fill all fields");
        } else {
            setIsSubmitting(true);

            try {
                // const result = await createUser(form.email, form.password, form.username);
                // setUser (result);
                // setIsLogged(true);
                // set it to global state...
                setIsSubmitting(false);
                router.replace("/home");
            } catch (error) {
                Alert.alert(error);
            }
        }


    };

    return (
        <SafeAreaView className={"flex-1 bg-primary"}>
            <ScrollView>
                <View className={"w-full min-h-full mt-[120px] px-4 py-7"}>
                    <Image
                        source={images.logo}
                        resizeMode={"contain"}
                        className={"w-[115px] h-[34px]"}
                    />
                    <Text className={"text-2xl text-white text-semibold font-psemibold mt-7"}>Sign up</Text>

                    <FormFiled
                        title={"Username"}
                        placeholder={"Your unique username"}
                        otherStyle={"mt-7"}
                        value={form.username}
                        handleChangeText={(e) => setForm({
                            ...form,
                            username: e
                        })}
                    />

                    <FormFiled
                        title={"Email"}
                        placeholder={"Your unique email"}
                        otherStyle={"mt-7"}
                        value={form.email}
                        handleChangeText={(e) => setForm({
                            ...form,
                            email: e
                        })}
                    />

                    <FormFiled
                        title={"Password"}
                        placeholder={"Your password"}
                        otherStyle={"mt-7"}
                        value={form.password}
                        handleChangeText={(e) => setForm({
                            ...form,
                            password: e
                        })}
                    />

                    <CustomButton
                        title={"Register"}
                        containerStyle={"w-full mt-7"}
                        handlePress={submit}
                        isLoading={isSubmitting}

                    />

                    <View className={"w-full pt-5 justify-center flex-row gap-2 "}>
                        <Text className={"text-lg text-gray-100 font-pregular"}>
                            Already have an Account ?
                        </Text>
                        <Link href={"/sign-in"} className={"text-lg text-secondary-100 font-pregular"}>
                            Login
                        </Link>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default SignUp