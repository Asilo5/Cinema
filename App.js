import React, { useState } from 'react';
import axios from 'axios';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  ScrollView, 
  Image,
  TouchableHighlight,
  Modal } 
  from 'react-native';

export default function App() {
   const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=2adea2e47475ecbf6312f332fc8e9ee2';
   const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=2adea2e47475ecbf6312f332fc8e9ee2';
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

   const openPopUp = (id) => {
     axios(`https://api.themoviedb.org/3/movie/${id}?api_key=2adea2e47475ecbf6312f332fc8e9ee2`).then(({data}) => {
       
       setState((prevState) => {
         return {...prevState, selected: data}
       }); 
     });
   };

  //  console.log('Selected',state.selected);
   console.log('Movies', state.movies);

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
            <TouchableHighlight 
                 key={result.id} 
                 onPress={() => openPopUp(result.id)}
            >
              <View style={styles.result}>
                  <Text style={styles.heading}>{result.original_title}</Text>
                  {result.poster_path ? 
                    <Image 
                      source={{ uri: `https://image.tmdb.org/t/p/original${result.poster_path}` }}
                      style={styles.movieImages}
                  /> : <Image 
                        source={{ uri: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAQlBMVEX///+8wsK2vb38/Py9w8P09vXDysm2vLz4+PjQ1NTBx8fHzMzg5OS2vr36+vrIzc3c39/W2dru7+/k5ufd3+HN0tFVwXgMAAADiUlEQVR4nO3b63aqPBCA4WQMhnAwgJv7v9UdsFqDRVnfp7bT/T4/emD1x0wnJ5JoDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO4qhy6MMcYx9Mdh993RPNtu6PfiRaxzzoqId2NTfndQT1T0VStu7I5FUSbF0IQ6ZRuPv6SSRbDi+uGQPdyVTS2+On5TTE/V25TIl8UqgrT18O54nm2ovF0vVDl6278xmhdobBvudrbBStQ85AS5U8CTXRRbvCWYVwi+2hB8J1ZrZxylPjz+q6kpi84Ug7iNza8Rq7EvHsXZbTU05o/Urw3mFQpr03y3NcUg4bXhvEAtaRQNbb1xYebUdcVG4vQt+I0pDr56aTxPd3Byap+h3Rh58N0L43m+/hJvmhM3VXFnVY2npXOXtFIVN6XYiaYiNtfRphF1S4oHu+0/8TPUct3i0oi6ZdIIiobTQsbs9zSi3qTYxeWzwet5kWqkyR/0t/NiE5avVbtKTzMNki1Ii7i3tqr216o61tU+H1uC1/IatSyGs2vynndclv7HKn3eDSXLqv1Izvv0JUtJT0ccFjPbdYah64K1bq5evciwdPGtcf53jeRbF58ZjnPrPcSpfe5Mtcgwte43Rvl/dIuJ7TPDOKTkYpGqN218L1tpeqxkMO3XMgxy+rEo/UdnXGQoWjL0X2c4pnZp3fxD/DLDqCbDlRp2Zv7mnJhed4bdSg3nDOfJcSVDNf1wbSyNZvzoj9NQc5uhnrF0bT70ZXnKqyzkqwz1zIelzzfOLmNpZQ7BVZWt9+cn+ZpGzYbbcl16ztDZ0yZ/vMyPeQ1vXkl+rjF/t7jUMC3W6hBqu5KhnncL0/gs8nzlfS3LUNP7YdFmQ0Ynt+y8bquuX/P1vFqY5T6NKYsboa2Gsshqpmmfxvx5vL17sxuua6/ter90zTLFrtW0X5qWpo/DDXK9hNlZp2nP+/Pc4p5swz+o2vI2l7On+1IVzymqO3tKw6nfcN/p83xR3/nhfAb8+K/Ou+Eaz4DNMZ/PV5wOwlWe4289/51Opo4672JsPXNKw43Ve2WorTbUZq/1wtBk4702vQnOF7p+993Ef+B+qXlwR1j03xE2K/e8zS+6523mu/o+v6vfV7/prv5kN0wfSDh/3qKdPpvQqNl22uz8mZkY+mPxi6oHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEn8BJmwb6FfNsqcAAAAASUVORK5CYII=` }}
                        style={styles.movieImages}
                  />}
              </View>
            </TouchableHighlight>
          ))}
      </ScrollView>

       {/* <Modal 
        animationType='fade'
        transparent={false}
        visible={(state.selected !== "undefined")}  
      >
        <View style={styles.popUp}>
           <Text>{state.selected.original_title}</Text>  
           <Text>{state.selected.vote_average}</Text>
            <Image 
              source={{ uri: `https://image.tmdb.org/t/p/original${state.selected.poster_path}` }}
              style={styles.movieImages}
            />
           <Text>{state.selected.overview}</Text>

        </View>
      </Modal> */}
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
    width: '100%',
    marginBottom: 20
  },
  heading: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    padding: 20,
    backgroundColor: '#445565',
    textAlign: 'center'
  },
  movieImages: {
    width: '100%',
    height: 300,
  },
  popUp: {

  },
  popTitle: {

  }
});
