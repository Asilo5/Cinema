import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
   const apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=2adea2e47475ecbf6312f332fc8e9ee2';

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
