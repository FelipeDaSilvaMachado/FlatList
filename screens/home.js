import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';
import Header from '../components/header';

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <Header logo={require('../assets/logoTopGeek/geek.png')} />
            <View style={styles.content}>
                <Text style={styles.txtTeste}>
                    Vou testar para ver como ficara minha home.
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        width: '100%',
        height: 'viewPort',
        backgroundColor: '#E0FFFF',
    },
    content: {
        width: '100%',
        height: 'viewPort',
    },
    txtTeste: {
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 'viewPort',
        margin: 5,
        padding: 10,
    },
});