// import a library to help create a component
import React from 'react';
import ReactNative, { Text } from 'react-native';

// create a component
const App = () => {
    return (
        <Text> Some content</Text>
    );
};

// render it to the device
ReactNative.AppRegistry.registerComponent('albums', () => App);
