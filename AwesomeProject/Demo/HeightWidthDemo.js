import React from 'react';
import { View, Text } from 'react-native';

const FixedDimensionsBasic = () => {
    return (
        <View>
            <View style={
                {
                    width:  50,
                    height: 50,
                    backgroundColor: 'powderblue'
                }}></View>

            <View style={
                {
                    width:  100,
                    height: 100,
                    backgroundColor: 'skyblue'
                }}></View>

            <View style={
                {
                    width:  150,
                    height: 150,
                    backgroundColor: 'steelblue'
                }}></View>
        </View>
    );
};

const FlexDimensionBasics = () => {
    return (
        <View style={{ flex: 1, flexDirectio: "column" }}>
            <View style={{ flex: 1, backgroundColor: 'powderblue' }} />
            <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
            <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
        </View>
    );
};


const PercentageDimensionsBasics = () => {
    // Try removing the `height: '100%'` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    return (
      <View style={{ height: '100%' }}>
        <View style={{
          height: '15%', backgroundColor: 'powderblue'
        }} />
        <View style={{
          width: '75%', height: '35%', backgroundColor: 'skyblue'
        }} />
        <View style={{
          width: '50%', height: '50%', backgroundColor: 'steelblue'
        }} />
      </View>
    );
  };

export {FixedDimensionsBasic, FlexDimensionBasics, PercentageDimensionsBasics};