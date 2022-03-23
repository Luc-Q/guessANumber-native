import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <TitleText>The game is over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../assets/success.png")}
                    // source={{
                    //     uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fjordangrimmer%2Fart%2FWinter-Moutain-Video-Process-832633424&psig=AOvVaw3cgGKpcZ8PAtpNyt1unJ4L&ust=1648015406536000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICpqvuF2fYCFQAAAAAdAAAAABAJ",
                    // }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed{" "}
                    <Text style={styles.highlight}>{props.roundsNumber}</Text>{" "}
                    rounds to guess the number{" "}
                    <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
            <MainButton onPress={props.onRestart}>New Game</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: "black",
        overflow: "hidden",
        marginVertical: 30,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    highlight: {
        color: colors.primary,
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: 50,
    },
    resultText: {
        textAlign: "center",
        fontSize: 20,
    },
});

export default GameOverScreen;
