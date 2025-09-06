import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Header from '../components/header';

export default function Marvel() {
    return (
        < View style={styles.container} >
            <FlatList
                data={hqsMarvel}
                keyExtractor={item => item.id}
                ListHeaderComponent={<Header logo={require('../assets/logoTopGeek/geek.png')} />}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={item.img} style={styles.img} />
                        <View style={styles.boxTitulo}>
                            <View style={styles.posTxt}>
                                <Text style={styles.titulo}>{item.titulo}</Text>
                                <Text style={styles.titulo}>{item.ano}</Text>
                                <Text style={styles.titulo}>{item.editora}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0FFFF',
        flex: 1,
        display: 'flex',
    },
    content: {
        width: '100%',
        height: 'viewPort',
    },
    boxTitulo: {
        margin: 5,
        paddingLeft: 5,
        boxSizing: 'content-box',
        width: 'auto',
        height: 'auto',
    },
    posTitulo: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    titulo: {
        fontFamily: 'Arial',
        fontSize: 16,
        textAlign: 'center',
        color: '#ffffff',
        margin: 5,
        paddingLeft: 5,
    },
    img: {
        width: 180,
        height: 180,
        resizeMode: 'cover',
        borderRadius: 5,
        justifyContent: 'center',
        margin: 3,
    },
    item: {
        padding: 3,
        margin: 3,
        backgroundColor: '#000000',
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
    },
});

const hqsMarvel = [
    {
        id: 1,
        titulo: 'Homem - Aranha',
        ano: 2015,
        editora: 'Marvel Comics',
        img: require('../assets/marvel/homemAranha.png'),
    },
    {
        id: 2,
        titulo: "Hulk contra todos!",
        ano: 2012,
        editora: "Marvel Comics",
        img: require('../assets/marvel/hulk.png'),
    },
    {
        id: 3,
        titulo: "Vingadores Avante",
        ano: 2005,
        editora: "Marvel Comics",
        img: require('../assets/marvel/vingadores.png'),
    },
    {
        id: 4,
        titulo: "Homem de Ferro",
        ano: 2018,
        editora: "Marvel Comics",
        img: require('../assets/marvel/homemDeFerro.png'),
    },
    {
        id: 5,
        titulo: "Capitão\nAmérica - Hydra",
        ano: 1985,
        editora: "Marvel Comics",
        img: require('../assets/marvel/capitaoAmerica.png'),
    },
]