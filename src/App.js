import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import FireBaseObj from './FirebaseObj'

export default class App extends Component {

    componentWillMount() {
        firebase.initializeApp(FireBaseObj)
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An App</Text>
            </View>
        );
    }
}
