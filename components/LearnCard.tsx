import {
    Image,
    ImageSourcePropType,
    Pressable,
    StyleSheet,
    View,
} from 'react-native';
import { router } from 'expo-router';
import { ThemedText } from './ThemedText';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';

interface PropsType {
    image: ImageSourcePropType;
    title: string;
    time: number;
    watched: boolean;
    link: string;
}
export default function LearnCard(props: PropsType) {
    return (
        <Pressable
            onPress={() => {
                router.push(props.link);
            }}
            style={[
                styles.card,
                {
                    backgroundColor: useThemeColor({
                        light: 'white',
                        dark: '#FFFFFF12',
                    }),
                },
            ]}
        >
            {props.watched ? (
                <View
                    style={[styles.status, { backgroundColor: Colors.blue1 }]}
                >
                    <ThemedText size="xs" style={{ color: 'white' }}>
                        دیده شده
                    </ThemedText>
                    <Ionicons name="eye-outline" size={14} color="white" />
                </View>
            ) : (
                <View
                    style={[styles.status, { backgroundColor: Colors.yellow }]}
                >
                    <ThemedText size="xs" style={{ color: 'white' }}>
                        دیده نشده
                    </ThemedText>
                    <Ionicons name="eye-off-outline" size={14} color="white" />
                </View>
            )}
            <View style={styles.detailSection}>
                <View style={{ gap: 5 }}>
                    <ThemedText size="sm">{props.title}</ThemedText>
                    <ThemedText
                        size="xs"
                        style={{
                            color: useThemeColor({
                                light: Colors.purple,
                                dark: 'white',
                            }),
                        }}
                    >
                        {Math.floor(props.time / 60)}:
                        {Math.ceil(props.time % 60)} دقیقه
                    </ThemedText>
                </View>
                <View>
                    <View style={styles.playBox}>
                        <Ionicons
                            name="play-outline"
                            size={16}
                            color={Colors.purple}
                            style={{ left: 1 }}
                        />
                    </View>
                    <Image source={props.image} />
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        elevation: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 80,
        borderRadius: 10,
    },
    detailSection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    playBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: 2,
        transform: [{ translateX: -14 }, { translateY: -14 }],
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.purple,
        backgroundColor: '#FFFFFFbb',
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    status: {
        borderRadius: 6,
        paddingVertical: 6,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
});
