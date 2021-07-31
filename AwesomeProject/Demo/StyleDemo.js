import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LotsOfStyles = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.red}>This line is red</Text> 
            <Text style={styles.bigBlue}>This line is blue</Text> 
            <Text style={[styles.bigBlue, styles.red]}>This line is Big Blue, then Red</Text> 
            <Text style={[styles.red, styles.green]}>This line is red, then Big Blue</Text> 
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop: 50,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    green: {
        color: 'green',
        fontSize: 20,
    },
    container2: { 
        flex: 1,
        marginTop: 8,
        backgroundColor: "aliceblue",
    },
    box: {
        width: 100,
        height: 100,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
    },
    selected: {
        backgroundColor: "coral",
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 16,
        fontWeight: "600",
        color: "coral",
        textAlign: 'center',
    },
    selectedLabel: {
        color: "white",
    },
    label: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,
    },
});

export {styles, LotsOfStyles};