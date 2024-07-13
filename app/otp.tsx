import Logo from '@/components/Logo';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Link, router } from 'expo-router';
import { useRef, useState } from 'react';
import { Image, Pressable, StyleSheet, TextInput } from 'react-native';

export default function forgot() {
    const [isFocus, setFocus] = useState(false);
    const secondInput = useRef<TextInput>(null);
    const thirdInput = useRef<TextInput>(null);
    const forthInput = useRef<TextInput>(null);

    return (
        <ThemedView style={styles.page}>
            <Logo />
            <ThemedText style={{ textAlign: 'center' }}>
                برای ثبت نام به اپلیکیشن اطلاعات خود را وارد کنید
            </ThemedText>
            <ThemedView style={styles.otpBox}>
                <TextInput
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    style={styles.otpInput}
                    onChange={(e) => {
                        secondInput.current?.focus();
                    }}
                    maxLength={1}
                />
                <TextInput
                    ref={secondInput}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    style={styles.otpInput}
                    onChange={(e) => {
                        thirdInput.current?.focus();
                    }}
                    maxLength={1}
                />
                <TextInput
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    style={styles.otpInput}
                    ref={thirdInput}
                    onChange={(e) => {
                        forthInput.current?.focus();
                    }}
                    maxLength={1}
                />
                <TextInput
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    style={styles.otpInput}
                    ref={forthInput}
                    maxLength={1}
                />
            </ThemedView>
            <Pressable
                onPress={() => router.push('/otp')}
                style={styles.button}
            >
                <ThemedText size="lg" style={{ color: 'white' }}>
                    ثبت نام
                </ThemedText>
            </Pressable>
            <Image
                source={require('@/assets/images/forgotBanner.png')}
                style={{ height: '30%', aspectRatio: 1 }}
            />
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
    },
    forgotBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        backgroundColor: Colors.blue1,
        width: '100%',
        borderRadius: 6,
        padding: 10,
        alignItems: 'center',
    },
    inputBox: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: Colors.blueGrey,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        width: '100%',
    },
    input: {
        width: '80%',
        fontSize: 14,
        height: '100%',
    },
    otpBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    otpInput: {
        width: 50,
        height: 50,
        backgroundColor: Colors.blueGrey,
        textAlign: 'center',
        borderRadius: 5,
        fontSize: 20,
    },
});
