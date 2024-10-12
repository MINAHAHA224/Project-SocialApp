import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormFiled from '../../components/formField'
import { useState } from 'react'
import CustomButton from '../../components/customButton'
import { Link, useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { signIn } from '../../lib/appwrite'

const SignIn = () => {

    const router = useRouter();
    // const { setUser, setIsLogged } = useGlobalContext();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const submit = async () => {
        if (!form.email || !form.password) {
            Alert.alert('Error', "please fill all fields");
        } else {
            setIsSubmitting(true);

            try {
                // await signIn(form.email, form.password);
                // const result = await getCurrentUser();
                // setUser(result);
                // setIsLogged(true);

                // set it to  global state...
                setIsSubmitting(false);
                Alert.alert("Success", "User signed in successfully");
                router.replace("/home");
            } catch (error) {
                Alert.alert(error);
            }
        }


    };
    return (
        <SafeAreaView className={"flex-1 bg-primary"}>
            <ScrollView>
                <View className={"w-full h-full py-6 px-4 mt-[75px]"}>
                    <Image
                        source={images.logo}
                        resizeMode={"contain"}
                        className={"w-[115px] h-[34px]"}
                    />
                    <Text className={"text-2xl text-white text-semibold font-psemibold mt-10 "}>Sign in</Text>

                    <FormFiled
                        title={"Email"}
                        placeholder={""}
                        value={form.email}
                        otherStyle={"mt-7"}
                        keyboardType={"email-address"}
                        handleChangeText={(e) =>
                            setForm({
                                ...form,
                                email: e
                            }
                            )
                        }
                    />

                    <FormFiled
                        title={"Password"}
                        placeholder={""}
                        value={form.password}
                        otherStyle={"mt-7"}
                        handleChangeText={(e) =>
                            setForm({
                                ...form,
                                password: e
                            }
                            )
                        }
                    />

                    <View className={"w-full mt-7 items-end"}>
                        <Text className={"text-gray-100 text-[16px]"}>Forgot password</Text>
                    </View>

                    <CustomButton
                        title={"Login"}
                        containerStyle={"mt-7"}
                        handlePress={submit}
                        isLoading={isSubmitting}
                    />

                    <View className={" pt-5 justify-center flex-row gap-2"}>
                        <Text className={"text-gray-100 text-lg font-pregular "} >
                            Don't have an account?
                        </Text>
                        <Link className={"text-lg text-secondary-100 font-pregular"} href={"/sign-up"}>
                            Register
                        </Link>
                    </View>

                </View>
            </ScrollView>

            <StatusBar backgroundColor={"#161622"} style='light' />
        </SafeAreaView>
    )
}

export default SignIn