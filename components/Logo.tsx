import { Image, StyleSheet } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

export default function Logo() {
    return (
        <ThemedView style={styles.logo}>
            <Image
                style={styles.logoImage}
                source={require('../assets/images/logo.png')}
            />
            <ThemedText size="2xl" weight="bold">
                تارگت اپ
            </ThemedText>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    logoImage: {
        width: 80,
        height: 80,
    },
    logo: {
        alignItems: 'center',
    },
});
