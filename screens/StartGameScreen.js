import React from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a Game sreen</Text>
            <Card style={styles.inputContainer}>
                <Text>Selcet a number</Text>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="numeric"
                    maxLength={2}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="Reset"
                            onPress={() => {}}
                            color={colors.accent}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Confirm"
                            onPress={() => {}}
                            color={colors.primary}
                        />
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 15,
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
    button: {
        width: 100,
    },
    input: {
        width: 50,
        textAlign: "center",
    },
});
export default StartGameScreen;
