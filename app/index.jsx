import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router';
export default function App() {

    return (
        <>
            <View className="flex-1 items-center justify-center bg-white">
                <Text className="text-2xl">Open up App.js to start working on your app!</Text>
                <StatusBar style="auto" />
            </View>

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