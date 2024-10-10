import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from "expo-status-bar";
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/customButton';


export default function App() {
    const router = useRouter();
    const isloading = false;
    return (
        <>
            <SafeAreaView className={"h-full bg-primary"}>
                <ScrollView contentContainerStyle={{ height: "100%" }}>
                    <View className={" items-center justify-center w-full min-h-[85vh] px-4"}>
                        <Image
                            source={images.logo}
                            resizeMode={"contain"}
                            className={"w-[130px] h-[84px]"}

                        />
                        <Image
                            source={images.cards}
                            resizeMode={"contain"}
                            className={"max-w-[380px] w-full h-[300px]"}

                        />
                        <View className="relative mt-5">
                            <Text className="text-3xl text-white font-bold text-center">
                                Discover Endless{"\n"}
                                Possibilities with{" "}
                                <Text className="text-secondary-200">Aora</Text>
                            </Text>

                            <Image
                                source={images.path}
                                className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
                                resizeMode="contain"
                            />
                        </View>
                        <Text className={"text-sm font-pregular text-gray-100 text-white text-center py-5"}>
                            Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
                        </Text>
                        <CustomButton
                            title={"Continue with Email"}
                            containerStyle={"w-full mt-7"}
                            handlePress={() => router.push("/sign-in")}
                            isLoading={isloading}
                        />

                    </View>
                </ScrollView>

                <StatusBar backgroundColor={"#161622"} style={"light"} />
            </SafeAreaView>


        </>



    );

}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: '#fff',
//     },
//     link: {
//         color: "blue",
//     }
// })