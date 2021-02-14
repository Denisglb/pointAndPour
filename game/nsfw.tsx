import React, { Component, useState, useEffect } from 'react'

// import { Text, View, Button, FlatList } from 'react-native';
import { Image } from 'react-native';

import { Container, Header, View, Card, CardItem, DeckSwiper, Text, Thumbnail, Button, Icon, Left, Body } from 'native-base';

export default class nsfw extends Component {
  render() {

    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.goBack('Home')}
        ></Button>
      </Container>

    )
  }
}

// var myArray = [
//   'Most likely to fuck a family member',
//   'Most Likely to do anal',
//   'Most likely to cheat',
//   'Most likely to x',
//   'Most likely to y',
//   'Most likely to x',
//   'Most likely to c',
//   'Most likely to a',
//   'Most likely to b',
//   'Most likely to d'
// ];

const cards = [
  {
    text: 'Most likely to fuck a family member',
    name: 'One',
    image: require('../images/cat.png'),
  }
];