import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput  } from 'react-native';

export default function App() {
   const apiUrl = 'https://api.themoviedb.org/3/movie/550?api_key=2adea2e47475ecbf6312f332fc8e9ee2';
   const [state, setState] = useState({
     searchedMovie: 'Enter a movie...',
     results: [],
     selected: {}
   });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cinema</Text>
      <TextInput 
         style={styles.searchbox}
         value={state.searchedMovie}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202030',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 42,
    textAlign: 'center',
    margin: 40
  },
  searchbox: {
    fontSize: 20,
    backgroundColor: 'white',
    fontWeight: '300',
    padding: 10,
    width: '100%',
    borderRadius: 8,
    marginBottom: 40
  } 
});
