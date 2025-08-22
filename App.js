import react from 'react';
import AppNavigation from './navigation/AppNavigator.js';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
  return (
    <View style={styles.container}>
      <Text>Sua HQ aqui!</Text>
      <StatusBar style="auto" />
      <FlatList
        data={hqs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.img} style={styles.img} />
            <View style={styles.titulo}>
              <View style={styles.titulo}>
                <Text style={styles.titulo}>{item.titulo}</Text>
              </View>
              <View style={styles.titulo}>
                <Text style={styles.titulo}>{item.ano}</Text>
              </View>
              <View style={styles.titulo}>
                <Text style={styles.titulo}>{item.editora}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    flexDirection: 'column',
    fontFamily: 'Arial',
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'center',
    color: '#ffffff',
    marginLeft: 10,
    padding: 5,
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    padding: 5,
    margin: 5,
    backgroundColor: '#000000',
    borderRadius: 5,
    alignItems: 'center',
  },
});

const hqs = [
  {
    id: 1,
    titulo: 'Homem - Aranha',
    ano: 2015,
    editora: 'Marvel Comics',
    img: require('./assets/homemAranha.png'),
  },
  {
    id: 2,
    titulo: "Hulk \nContra o Mundo!",
    ano: 2012,
    editora: "Marvel Comics",
    img: require('./assets/hulk.png'),
  },
  {
    id: 3,
    titulo: "Vingadores \nAvante!",
    ano: 2005,
    editora: "Marvel Comics",
    img: require('./assets/vingadores.png'),
  },
  {
    id: 4,
    titulo: "Homem de Ferro",
    ano: 2018,
    editora: "Marvel Comics",
    img: require('./assets/homemDeFerro.png'),
  },
  {
    id: 5,
    titulo: "Capitão América \nHydra",
    ano: 1985,
    editora: "Marvel Comics",
    img: require('./assets/capitaoAmerica.png'),
  },
  {
    id: 6,
    titulo: "Batman \nGothan City",
    ano: 2009,
    editora: "DC Comics",
    img: require('./assets/batman.png'),
  },
  {
    id: 7,
    titulo: "Superman!",
    ano: 2012,
    editora: "DC Comics",
    img: require('./assets/superman.png'),
  },
  {
    id: 8,
    titulo: "Liga da Justiça",
    ano: 2015,
    editora: "DC Comics",
    img: require('./assets/ligaDaJustica.png'),
  },
  {
    id: 9,
    titulo: "Flash",
    ano: 2010,
    editora: "DC Comics",
    img: require('./assets/flash.png'),
  },
  {
    id: 10,
    titulo: "Lanterna Verde",
    ano: 2001,
    editora: "DC Comics",
    img: require('./assets/lanternaVerde.png'),
  },
]