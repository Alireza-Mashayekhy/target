import Logo from '@/components/Logo';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, TextInput } from 'react-native';

export default function forgot() {
    const [isFocus, setFocus] = useState(false);

    return (
        <ThemedView style={styles.page}>
            <Logo />
            <ThemedText style={{ textAlign: 'center' }}>
                برای ثبت نام به اپلیکیشن اطلاعات خود را وارد کنید
            </ThemedText>
            <ThemedView
                style={[
                    styles.inputBox,
                    { borderColor: `${isFocus ? Colors.purple : '#00000015'}` },
                ]}
            >
                <ThemedView style={styles.phoneRegion}>
                    <Image source={require('@/assets/images/iranFlag.png')} />
                    <ThemedText size="xs" style={{ color: 'black', top: 2 }}>
                        +۹۸
                    </ThemedText>
                </ThemedView>
                <TextInput
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    style={styles.input}
                    placeholder="test"
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
    phoneRegion: {
        flexDirection: 'row',
        backgroundColor: 'inherit',
        alignItems: 'center',
        gap: 4,
    },
});
