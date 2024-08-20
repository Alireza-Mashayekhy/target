import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, TextInput } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { Back } from '@/components/Base/Back';
import { Colors } from '@/constants/Colors';
import { WeekBox } from '@/components/Base/WeekBox';

export default function notebook() {
    const scrollRef = useAnimatedRef<Animated.ScrollView>();

    return (
        <ThemedView style={styles.container}>
            <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
                <ThemedView style={styles.content}>
                    <Back link="/" />
                    <ThemedText
                        weight="bold"
                        size="2xl"
                        style={{ marginTop: 5, textAlign: 'center' }}
                    >
                        دفترچه یادداشت
                    </ThemedText>
                    <View style={styles.searchBox}>
                        <TextInput
                            placeholder="جستجو در یادداشت‌ها"
                            placeholderTextColor="white"
                            style={{
                                color: 'white',
                                fontSize: 12,
                                flex: 1,
                                textAlign: 'right',
                            }}
                        />
                        <Ionicons name="search" color="white" size={16} />
                    </View>
                    <WeekBox />
                </ThemedView>
            </Animated.ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 32,
        gap: 20,
        overflow: 'hidden',
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    searchBox: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 10,
        padding: 15,
        paddingVertical: 8,
        backgroundColor: Colors.blue2,
        borderRadius: 6,
    },
});
