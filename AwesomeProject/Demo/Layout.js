import { exp } from "prelude-ls";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {styles} from './StyleDemo'

const Flex = () => {
    return (
        <View style={{
            flex: 1,
            padding: 20,
            flexDirection: "column"
        }}>
            <View style={{ flex: 1, backgroundColor: "red"}} />
            <View style={{ flex: 1, backgroundColor: "darkorange"}} />
            <View style={{ flex: 3, backgroundColor: "green"}} />
        </View>
    );
};

const FlexDirectionBasics = () => {
    const [flexDirection, setflexDirection] = useState("column");

    return(
        <PreviewLayout
            label="flexDirection"
            values={["column", "row", "row-reverse", "column-reverse"]}
            selectedValue={flexDirection}
            setSelectedValue={setflexDirection} >

            <View style={[styles.box, {backgroundColor: 'red'}]}></View>
            <View style={[styles.box, {backgroundColor: 'green'}]}></View>
            <View style={[styles.box, {backgroundColor: 'blue'}]}></View>
        </PreviewLayout>
    );
};


const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
}) => (
    <View style={{ padding: 10, flex: 1 }} >
        <Text style={styles.label}> {label} </Text>
        <View style={styles.row}>
            {values.map((value) => (
                <TouchableOpacity 
                    key={value} 
                    onPress={() => setSelectedValue(value)} 
                    style={[styles.button, selectedValue === value && styles.selected,]}>
                        <Text style={[
                            styles.buttonLabel,
                            selectedValue === value && styles.selectedLabel,
                        ]}>
                            {value}
                        </Text>
                </TouchableOpacity>
            ))}
        </View>
        <View style={[styles.container2, {[label] : selectedValue}]}>
            {children}
        </View>
    </View>
);

export {Flex, FlexDirectionBasics};