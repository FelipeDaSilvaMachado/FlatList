import { Text, View, Image } from 'react-native';
import { styles } from './styles';

const Header = ({ logo }) => {
    return (
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
    );
}

export const styles = StyleSheet.create ({
    container: {
        backgroundColor: '000000',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    logo: {
        
    }
});

export default Header;