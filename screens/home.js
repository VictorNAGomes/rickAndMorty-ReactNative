import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList, View, Image, TouchableOpacity} from 'react-native';

export default function Home ({ navigation }) {
  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character', {
      method: 'GET',  
      headers: {
        'Accept': 'application/json'
      },
    })
    .then(res => res.json())
    .then(data => {
      setCharacters(data.results);
    })
  }, []);

  
  return(
    <SafeAreaView>
      <FlatList style={{
          width: 300,
          background: '#424242',
      }} data={characters} keyExtractor={(character) => character.name} contentContainerStyle={{flexGrow: 1}} renderItem={CharacterShow} />
    </SafeAreaView>
  );
  function CharacterShow (item) {
    const {name, image, gender, status, url} = item.item;
    return (
    <TouchableOpacity onPress={() => navigation.navigate('Character', item.item)}>
      <View>
        <Image style={{width: 100, height: 100}} source={{ uri: image }} />
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
    )
  }
}