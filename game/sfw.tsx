import React, { Component } from 'react'

import { Text, View, Button } from 'react-native';

export default class sfw extends Component {
    render() {
        return (
            <View>

<Text>Welcome to the SAFE FOR WORK VERSION OF THE GAME WANKERS</Text>

<Button
            title="Go to Home"
            onPress={() => this.props.navigation.goBack('Home')}
          />

            </View>
        )
    }
}