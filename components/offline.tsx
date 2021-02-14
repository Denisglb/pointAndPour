import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';

export default class offline extends Component {

    
    render() {
        return (
            <View>
                <Text>Choose package</Text>

                <Button
            title="SFW QUESTIONS"
            onPress={() => this.props.navigation.navigate('questions_sfw')}
          />
          
          <Button
          title="NSFW QUESTIONS"
          onPress={() => this.props.navigation.navigate('questions_nsfw')}
        />   

            <Button
            title="Go to Home"
            onPress={() => this.props.navigation.goBack('Home')}
          />
          </View>
        )
    }
}
