import type { PropsWithChildren } from 'react';
import { Appearance, Image, Pressable, StyleSheet } from 'react-native';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { ThemedView } from '@/components/ThemedView';
import { StatusBar } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';

type Props = PropsWithChildren;

export default function PagesView({ children }: Props) {
    const scrollRef = useAnimatedRef<Animated.ScrollView>();

    return (
        <ThemedView style={styles.container}>
            <StatusBar hidden />
            <ThemedView style={styles.header}>
                <ThemedView style={styles.headerButtons}>
                    <Link href="/" style={styles.icons}>
                        <Ionicons size={20} name="mail-outline" />
                    </Link>
                    <Pressable
                        onPress={() => {
                            Appearance.getColorScheme() === 'dark'
                                ? Appearance.setColorScheme('light')
                                : Appearance.setColorScheme('dark');
                        }}
                        style={styles.icons}
                    >
                        <Ionicons size={20} name="contrast-outline" />
                    </Pressable>
                    <Link
                        href="/"
                        style={{
                            backgroundColor: 'white',
                            paddingHorizontal: 12,
                            paddingVertical: 5,
                            borderRadius: 10,
                        }}
                    >
                        <ThemedView style={{ backgroundColor: 'transparent' }}>
                            <Image
                                source={require('@/assets/images/icons/gem.png')}
                                style={{ width: 15, height: 15 }}
                            />
                            <ThemedText
                                size="xs"
                                weight="bold"
                                style={{
                                    color: Colors.blue1,
                                    textAlign: 'center',
                                }}
                            >
                                1x
                            </ThemedText>
                        </ThemedView>
                    </Link>
                </ThemedView>
                <ThemedView
                    style={{
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                        gap: 6,
                        alignItems: 'center',
                    }}
                >
                    <ThemedView
                        style={{
                            backgroundColor: 'transparent',
                            alignItems: 'flex-end',
                        }}
                    >
                        <ThemedText
                            size="sm"
                            weight="bold"
                            style={{ color: 'white' }}
                        >
                            سلام، مهزیار رازه
                        </ThemedText>
                        <ThemedText
                            size="xs"
                            weight="bold"
                            style={{ color: 'white' }}
                        >
                            Mahziar_rz21
                        </ThemedText>
                    </ThemedView>
                    <Image
                        source={require('@/assets/images/logo.png')}
                        style={{ width: 50, height: 50 }}
                    />
                </ThemedView>
            </ThemedView>
            <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
                <ThemedView style={styles.content}>{children}</ThemedView>
            </Animated.ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: Colors.blue1,
        borderBottomEndRadius: 26,
        borderBottomStartRadius: 26,
        flexDirection: 'row',
        padding: 15,
        paddingVertical: 12,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 2,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    icons: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
    content: {
        flex: 1,
        padding: 32,
        gap: 16,
        overflow: 'hidden',
        paddingTop: 90,
        paddingHorizontal: 15,
    },
    headerButtons: {
        flexDirection: 'row',
        gap: 8,
        backgroundColor: 'transparent',
    },
});
