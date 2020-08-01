import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";

function Login() {
    return (
        <View style={styles.container}>
                <Text>ini hal Login</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    }
})

export default Login;