import { StyleSheet, Text, View } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';
import { ThemedText } from '../ThemedText';
import Swiper from 'react-native-swiper';

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
                flexDirection: 'row-reverse',
            }}
            showsPagination={false}
            nextButton={
                <Text style={{ color: 'white', fontSize: 50, bottom: 5 }}>
                    ›
                </Text>
            }
            prevButton={
                <Text style={{ color: 'white', fontSize: 50, bottom: 5 }}>
                    ‹
                </Text>
            }
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
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
});
