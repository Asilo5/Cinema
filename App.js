import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
   const apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=2adea2e47475ecbf6312f332fc8e9ee2';
   const [state, setState] = useState({
     s: 'Enter a movie...',
     results: [],
     selected: {}
   });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cinema</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202030',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    marginTop: 40
  }
});
