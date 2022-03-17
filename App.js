import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import Header from "./components/Header";

export default function App() {
    return (
        <View style={styles.screen}>
            <Header title="Guess a number" />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
