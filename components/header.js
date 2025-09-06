import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

const Header = ({ logo }) => {
    return (
        <SafeAreaView style={styles.headerContainer}>
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.logo}
                        source={logo}
                    />
                </View>
                <View style={styles.containerSlogan}>
                    <Text style={styles.slogan}>
                        Aqui o mundo geek ganha vida!
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 'viewPort',
    },
    container: {
        flex: 1,
        display: 'flex',
        width: '100%',
        height: 'viewPort',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        paddingTop: 35,
        backgroundColor: '#1c69c2ff',
    },
    logo: {
        width: 100,
        height: 100,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 50,
    },
    containerSlogan: {
        width: 'auto',
        height: 'auto',
        margin: 5,
        padding: 5,
    },
    slogan: {
        fontFamily: 'Arial',
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
});

export default Header;