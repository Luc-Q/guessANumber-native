import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
    return (
        <View style={styles.screen}>
            <View style={styles.inputContaioner}>
                <TextInput placeholder="Course Goal" style={styles.input} />
                <Button title="ADD" />
            </View>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
    inputContaioner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        width: 200,
        borderColor: "black",
        borderWidth: 1,
    },
});
