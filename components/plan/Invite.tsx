import { Image, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { Colors } from '@/constants/Colors';

export default function PlanInvite() {
    return (
        <ThemedView style={styles.box}>
            <Image
                source={require('@/assets/images/invite.png')}
                style={styles.image}
            />
            <View style={{ flex: 1 }}>
                <ThemedText size="sm" style={{ color: 'white' }}>
                    دعوت از دوستان
                </ThemedText>
                <ThemedText style={{ color: 'white', fontSize: 10 }}>
                    شما میتوانید دوستان خود را به تارگت اپ دعوت کنید و از تارگت
                    اپ ۱ ماه شارژ رایگان دریافت کنید.
                </ThemedText>
                <View style={styles.form}>
                    <Pressable style={styles.button}>
                        <ThemedText style={{ color: 'white', fontSize: 10 }}>
                            اشتراک گذاری
                        </ThemedText>
                    </Pressable>
                    <TextInput style={styles.input} />
                </View>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 132,
        height: 132,
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    box: {
        flexDirection: 'row',
        borderRadius: 20,
        padding: 15,
        paddingLeft: 120,
        justifyContent: 'flex-end',
        marginTop: 20,
        backgroundColor: Colors.blue1,
    },
    form: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 7,
        borderWidth: 1,
        borderColor: '#E6E6E6',
        borderRadius: 6,
        backgroundColor: '#FFFFFF26',
        padding: 4,
    },
    input: {
        flex: 1,
        paddingVertical: 3,
        paddingHorizontal: 10,
        textAlign: 'right',
        color: 'white',
    },
    button: {
        backgroundColor: Colors.blue1,
        paddingHorizontal: 10,
        justifyContent: 'center',
        paddingBottom: 3,
        borderRadius: 6,
    },
});
