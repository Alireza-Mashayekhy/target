import { StyleSheet, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { Back } from '@/components/Base/Back';
import { Colors } from '@/constants/Colors';
import LearnCard from '@/components/LearnCard';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function plan() {
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const learnList = [
        {
            image: require('@/assets/images/learnImage.png'),
            title: 'کار با نرم افزار',
            time: 150,
            watched: true,
            link: '',
        },
        {
            image: require('@/assets/images/learnImage.png'),
            title: 'نحوه کار',
            time: 150,
            watched: false,
            link: '',
        },
        {
            image: require('@/assets/images/learnImage.png'),
            title: 'دفترچه یادداشت',
            time: 150,
            watched: true,
            link: '',
        },
        {
            image: require('@/assets/images/learnImage.png'),
            title: 'کار با نرم افزار',
            time: 150,
            watched: true,
            link: '',
        },
        {
            image: require('@/assets/images/learnImage.png'),
            title: 'نحوه کار',
            time: 150,
            watched: false,
            link: '',
        },
        {
            image: require('@/assets/images/learnImage.png'),
            title: 'دفترچه یادداشت',
            time: 150,
            watched: true,
            link: '',
        },
    ];
    return (
        <ThemedView style={styles.container}>
            <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
                <ThemedView style={styles.content}>
                    <Back link="/profile" />
                    <ThemedText
                        weight="bold"
                        size="2xl"
                        style={{
                            marginTop: 5,
                            textAlign: 'center',
                            marginBottom: 30,
                        }}
                    >
                        آموزش ها
                    </ThemedText>
                    <View
                        style={[
                            styles.titleBox,
                            {
                                backgroundColor: useThemeColor({
                                    light: 'white',
                                    dark: '#FFFFFF12',
                                }),
                            },
                        ]}
                    >
                        <ThemedText
                            size="sm"
                            style={{
                                color: useThemeColor({
                                    light: Colors.purple,
                                    dark: 'white',
                                }),
                            }}
                        >
                            ۶ ویدئو
                        </ThemedText>
                        <ThemedText>لیست آموزش ها</ThemedText>
                    </View>
                    {learnList.map((item, index) => {
                        return (
                            <LearnCard
                                key={`learn-card-${index}`}
                                image={item.image}
                                title={item.title}
                                time={item.time}
                                watched={item.watched}
                                link={item.link}
                            />
                        );
                    })}
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
        gap: 10,
        paddingTop: 20,
        paddingHorizontal: 15,
    },

    titleBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        elevation: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 80,
        padding: 15,
        borderRadius: 10,
    },
});
