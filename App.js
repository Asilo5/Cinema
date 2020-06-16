import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, ScrollView, Image } from 'react-native';

export default function App() {
   const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=2adea2e47475ecbf6312f332fc8e9ee2';
   const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=2adea2e47475ecbf6312f332fc8e9ee2'
   const [state, setState] = useState({
     searchedMovie: 'Enter a movie...',
     movies: [],
     selected: {}
   });

   const search = () => {
     axios(searchUrl + '&query=' + state.searchedMovie).then(({ data }) => {
  
      setState({ movies: data.results })
     });
   };

   console.log('Consoled results....', state.movies)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cinema</Text>
      <TextInput 
         style={styles.searchbox}
         value={state.searchedMovie}
         onChangeText={text => setState(prevState => {
           return {...prevState, searchedMovie: text}
         })}
         onSubmitEditing={search}
      />
      <ScrollView style={styles.results}>
          {state.movies.map((result) => (
            <View key={result.imdb_id} style={styles.result}>
                <Text style={styles.heading}>{result.original_title}</Text>
                <Image 
                   source={{ uri: `https://image.tmdb.org/t/p/original${result.poster_path}` }}
                   style={styles.movieImages}
                />
            </View>
          ))}
      </ScrollView>
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
  },
  results: {
    flex: 1
  },
  result: {
    flex: 1,
    width: '100%'
  },
  heading: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    padding: 20,
    backgroundColor: '#445565',
    marginBottom: 20
  },
  movieImages: {
    width: 300,
    height: 300
  }
});
