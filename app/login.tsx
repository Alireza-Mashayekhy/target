import { Input } from '@/components/Base/Input';
import Logo from '@/components/Logo';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Link, router } from 'expo-router';
import { Image, Pressable, StyleSheet } from 'react-native';

export default function login() {
    return (
        <ThemedView style={styles.page}>
            <Logo />
            <ThemedText style={{ textAlign: 'center' }}>
                برای ورود به اپلیکیشن اطلاعات خود را وارد کنید
            </ThemedText>
            <Input
                placeholder="نام کاربری، ایمیل یا شماره همراه"
                icon={
                    <Image
                        alt="email"
                        source={require('@/assets/images/icons/mail.png')}
                    />
                }
            />
            <Input
                placeholder="رمزعبور"
                password={true}
                icon={
                    <Image
                        alt="password"
                        source={require('@/assets/images/icons/password.png')}
                    />
                }
            />
            <ThemedView style={styles.forgotBox}>
                <ThemedText
                    size="xs"
                    style={{ textDecorationLine: 'underline' }}
                >
                    تغییر رمز عبور
                </ThemedText>
                <Link href="/forgot">
                    <ThemedText size="xs" style={{ color: Colors.blue1 }}>
                        رمز عبور خود را فراموش کرده اید؟
                    </ThemedText>
                </Link>
            </ThemedView>
            <Pressable
                onPress={() => router.push('/home')}
                style={styles.button}
            >
                <ThemedText size="lg" style={{ color: 'white' }}>
                    ورود
                </ThemedText>
            </Pressable>
            <Image
                source={require('@/assets/images/login.png')}
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
});
