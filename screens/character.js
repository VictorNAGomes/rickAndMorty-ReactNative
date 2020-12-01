import React from 'react';
import {Text, View, Image} from 'react-native';

export default function Character ({navigation}) {
    var image = navigation.getParam('image');
    return (
    <View>
        <Image style={{width: 100, height: 100}} source={{ uri: image }} />
        <Text>{ navigation.getParam('name') }</Text>
        <Text>{ navigation.getParam('status') }</Text>
        <Text>{ navigation.getParam('species') }</Text>
        <Text>{ navigation.getParam('gender') }</Text>
      </View>
    );
}