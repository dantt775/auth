import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';


const Input = ({ label, value, onChangeText }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}

            />
        </View>
    );

};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 2,
        borderColor: 'purple',
        borderWidth: 2,
        height: 28,
        lineHeight: 30,
        paddingBottom:0,
        paddingTop:0
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        borderColor: 'red',
        borderWidth: 2,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }

}


export { Input };