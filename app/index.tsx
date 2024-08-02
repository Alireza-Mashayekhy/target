import Logo from '@/components/Logo';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Link } from 'expo-router';
import { Image, StyleSheet } from 'react-native';

export default function startPage() {
    const boxColor = useThemeColor({ light: 'white', dark: '#FFFFFF12' });
    const loginBoxColor = useThemeColor({
        light: '#F1F4FF',
        dark: '#FFFFFF12',
    });

    return (
        <ThemedView style={styles.page}>
            <Logo />
            <ThemedView style={[styles.box, { backgroundColor: boxColor }]}>
                <ThemedText style={[styles.quotations, { bottom: 30 }]}>
                    "
                </ThemedText>
                <ThemedText font="Reyhaneh" size="xl" weight="thin">
                    تو
                </ThemedText>
                <ThemedText
                    font="Reyhaneh"
                    size="xl"
                    weight="thin"
                    style={{ color: Colors.purple }}
                >
                    یک
                </ThemedText>
                <ThemedText
                    font="Reyhaneh"
                    size="xl"
                    weight="thin"
                    style={{ color: Colors.blue1 }}
                >
                    قدم
                </ThemedText>
                <ThemedText font="Reyhaneh" size="xl" weight="thin">
                    از بقیه
                </ThemedText>
                <ThemedText
                    font="Reyhaneh"
                    size="xl"
                    weight="thin"
                    style={{ color: Colors.green }}
                >
                    جلوتر
                </ThemedText>
                <ThemedText font="Reyhaneh" size="xl" weight="thin">
                    هستی
                </ThemedText>
                <ThemedText style={styles.quotations}>"</ThemedText>
            </ThemedView>
            <ThemedView
                style={{
                    width: '90%',
                    backgroundColor: '#00000000',
                    elevation: 10,
                    shadowColor: '#222222',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 80,
                    // gap: 20,
                }}
            >
                <ThemedView
                    style={[
                        styles.loginBox,
                        { backgroundColor: loginBoxColor },
                    ]}
                >
                    <Link href={'login'} style={styles.link}>
                        <ThemedText
                            size="lg"
                            style={{ textAlign: 'center', color: 'white' }}
                        >
                            ورود
                        </ThemedText>
                    </Link>
                    <Link href={'forgot'} style={styles.link}>
                        <ThemedText
                            size="lg"
                            style={{ textAlign: 'center', color: 'white' }}
                        >
                            ثبت نام
                        </ThemedText>
                    </Link>
                </ThemedView>
                {/* <ThemedText style={}>اگر قبلا ثبت نام کردی وارد شو!</ThemedText> */}
            </ThemedView>
            <Image
                style={{ height: '40%', aspectRatio: 1 }}
                source={require('../assets/images/startImage.png')}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    logoImage: {
        width: 80,
        height: 80,
    },
    logo: {
        alignItems: 'center',
    },
    box: {
        paddingTop: 15,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderColor: '#ffffff50',
        borderRadius: 20,
        elevation: 30,
        shadowColor: '#222222',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 80,
        flexDirection: 'row-reverse',
        gap: 3,
    },
    quotations: {
        color: Colors.blue1,
        fontSize: 38,
        transform: [{ rotate: '183deg' }],
    },
    loginBox: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        width: '100%',
        borderRadius: 10,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#ffffff50',
    },
    link: {
        textAlign: 'center',
        backgroundColor: Colors.blue1,
        paddingHorizontal: 23,
        paddingVertical: 5,
        borderRadius: 5,
        elevation: 10,
    },
});
