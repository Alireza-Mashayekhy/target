import { ImageBackground, StyleSheet, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { Colors } from '@/constants/Colors';

export default function Gift() {
    return (
        <ThemedView style={styles.box}>
            <ImageBackground
                source={require('@/assets/images/polygon.png')}
                style={styles.freeBox}
            >
                <ThemedText
                    size="sm"
                    weight="bold"
                    font="default"
                    style={{ color: 'white' }}
                >
                    رایگان
                </ThemedText>
            </ImageBackground>
            <ThemedText style={{ color: 'white' }} weight="bold">
                ۷ روزه
            </ThemedText>
            <View style={styles.textBox}>
                <ThemedText size="sm" style={{ color: 'white' }}>
                    هدیه ببر!
                </ThemedText>
                <ThemedText size="sm" style={{ color: 'white' }}>
                    برای کاربران عادی
                </ThemedText>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    box: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 10,
        backgroundColor: Colors.purple,
        marginTop: 30,
        elevation: 20,
        shadowColor: Colors.purple,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 80,
        borderWidth: 2,
        borderColor: 'white',
    },
    freeBox: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        top: -20,
        left: 15,
    },
    textBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
});
