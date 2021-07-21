import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MyImage = props => {
    return (
        <View style={styles.container}>
            <Image source={props.imageSource} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
});

export default MyImage;