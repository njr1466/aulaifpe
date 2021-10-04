import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar, Header } from 'react-native-elements'


function App() {
  return (
    <View style={styles.container}>
      <Text>App Inicial</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function App1() {

  const list = [
    {
      name: 'Gabriel',
      avatar_url: 'https://cdn.icon-icons.com/icons2/1097/PNG/512/1485477097-avatar_78580.png',
      subtitle: 'Desenvolvedor'
    },
    {
      name: 'Roberta',
      avatar_url: 'https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_960_720.png',
      subtitle: 'Analista de Sistemas'
    },
   
  ]

  return (
  
     <View>
<Header
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>

  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>
     
     
   
  );
}

export default App1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
