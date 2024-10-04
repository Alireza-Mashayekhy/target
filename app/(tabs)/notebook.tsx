import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, TextInput, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { Back } from '@/components/Base/Back';
import { Colors } from '@/constants/Colors';
import { WeekBox } from '@/components/Base/WeekBox';
import { NoteBookCard } from '@/components/NoteBookCard';
import { router } from 'expo-router';

interface CardType {
    color: string;
    title: string;
    content: string;
    date: string;
}

export default function notebook() {
    const scrollRef = useAnimatedRef<Animated.ScrollView>();

    const cards: CardType[] = [
        {
            title: 'سکه طلا',
            color: '#83028C',
            content:
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون ',
            date: new Date().toString(),
        },
        {
            title: 'سکه طلا',
            color: '#2E70F2',
            content:
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون ',
            date: new Date().toString(),
        },
        {
            title: 'سکه طلا',
            color: '#FFBB00',
            content:
                'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون ',
            date: new Date().toString(),
        },
    ];
    return (
        <ThemedView style={styles.container}>
            <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
                <ThemedView style={styles.content}>
                    <Back link="/home" />
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
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'flex-end',
                            gap: 20,
                        }}
                    >
                        {cards.map((card) => {
                            return (
                                <NoteBookCard
                                    title={card.title}
                                    color={card.color}
                                    content={card.content}
                                    date={card.date}
                                />
                            );
                        })}
                    </View>
                    <Pressable
                        style={styles.button}
                        onPress={() => router.push('/createNote')}
                    >
                        <ThemedText style={{ color: 'white' }}>
                            ایجاد یادداشت
                        </ThemedText>
                    </Pressable>
                </ThemedView>
            </Animated.ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 100,
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
    button: {
        backgroundColor: Colors.blue1,
        width: '100%',
        borderRadius: 6,
        padding: 10,
        alignItems: 'center',
    },
});
