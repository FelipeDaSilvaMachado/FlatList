import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import Header from '../components/header';

export default function Jogos() {
    return (
        <View style={styles.container}>
            <FlatList
                data={jogos}
                keyExtractor={item => item.id}
                ListHeaderComponent={<Header logo={require('../assets/logoTopGeek/geek.png')} />}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={item.img} style={styles.img} />
                        <View style={styles.boxTitulo}>
                            <View style={styles.posTxt}>
                                <Text style={styles.titulo}>{item.titulo}</Text>
                                <Text style={styles.titulo}>{item.ano}</Text>
                                <Text style={styles.titulo}>{item.desenvolvedora}</Text>
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
        width: '100%',
        height: 'viewPort',
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

const jogos = [
    {
        id: 1,
        titulo: "FIFA25",
        ano: 2025,
        desenvolvedora: "EA Sports FC",
        img: require('../assets/jogos/fifa25.png'),
    },
    {
        id: 2,
        titulo: "Call of Dutty\nBlack Ops 6",
        ano: 2024,
        desenvolvedora: "Infinity Ward",
        img: require('../assets/jogos/callofdutty.png'),
    },
    {
        id: 3,
        titulo: "God of War\nRagnarok",
        ano: 2018,
        desenvolvedora: "Santa Monica Studio",
        img: require('../assets/jogos/godofwar.png'),
    },
    {
        id: 4,
        titulo: "Harry - Potter\nLegacy",
        ano: 2023,
        desenvolvedora: "Avalanche Software - W.Bros.",
        img: require('../assets/jogos/harrypotter.png'),
    },
    {
        id: 5,
        titulo: "GTA VI",
        ano: 2026,
        desenvolvedora: "Rock Star Games",
        img: require('../assets/jogos/gta6.png'),
    },
]