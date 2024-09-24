import React from "react";

import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme
} from "react-native"

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark';
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={isDarkMode ? styles.whiteText : styles.darkText}>Hello World! 👋🏻</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#FFFFFF',
        fontSize: 24,
    },
    darkText: {
        color: '#000000',
        fontSize: 24,
    }
})

export default AppPro;