import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '../ThemedText';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

export const WeekBox = () => {
    const backBoxColor = useThemeColor({
        light: Colors.blue1,
        dark: '#FFFFFF10',
    });

    return (
        <Swiper
            showsButtons
            loop={false}
            style={{
                overflow: 'visible',
                height: 100,
            }}
            showsPagination={false}
            nextButton={
                <Text
                    style={{
                        color: 'white',
                        fontSize: 50,
                        right: 30,
                        bottom: 5,
                    }}
                >
                    ›
                </Text>
            }
            prevButton={
                <Text
                    style={{
                        color: 'white',
                        fontSize: 50,
                        bottom: 5,
                    }}
                >
                    ‹
                </Text>
            }
            containerStyle={{ width: width }}
        >
            <View style={[style.card, { backgroundColor: backBoxColor }]}>
                <ThemedText size="xl" style={{ color: 'white' }}>
                    هفته 1
                </ThemedText>
            </View>
            <View style={[style.card, { backgroundColor: backBoxColor }]}>
                <ThemedText size="xl" style={{ color: 'white' }}>
                    هفته 2
                </ThemedText>
            </View>
            <View style={[style.card, { backgroundColor: backBoxColor }]}>
                <ThemedText size="xl" style={{ color: 'white' }}>
                    هفته 3
                </ThemedText>
            </View>
        </Swiper>
    );
};

const style = StyleSheet.create({
    card: {
        width: width - 30,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
        borderRadius: 10,
    },
});
