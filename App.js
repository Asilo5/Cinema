import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
   const apiUrl = 'http://www.omdbapi.com/?apikey=23998f3b';

  return (
    <View style={styles.container}>
      <Text>Turn up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
