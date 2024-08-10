import { StyleSheet, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { Colors } from '@/constants/Colors';

interface PropsType {
    time: string;
    days: number;
    price: number;
    discountedPrice: number;
}
export default function PlanCard(props: PropsType) {
    return (
        <View style={styles.card}>
            <View style={styles.time}>
                <ThemedText
                    size="xs"
                    style={{ color: 'white', textAlign: 'center' }}
                >
                    {props.time}
                </ThemedText>
            </View>
            <ThemedText
                size="xs"
                style={{ color: 'white', textAlign: 'center' }}
            >
                خرید اشتراک برای {props.days} روز
            </ThemedText>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <View style={styles.priceBox}>
                    <ThemedText
                        size="xs"
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            lineHeight: 15,
                            textDecorationLine: 'line-through',
                            fontSize: 11,
                        }}
                    >
                        {props.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </ThemedText>
                    <ThemedText
                        size="xs"
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            lineHeight: 15,
                            textDecorationLine: 'line-through',
                            fontSize: 11,
                        }}
                    >
                        تومان
                    </ThemedText>
                </View>
                <View style={styles.priceBox}>
                    <ThemedText
                        size="xs"
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            lineHeight: 15,
                        }}
                    >
                        {props.discountedPrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </ThemedText>
                    <ThemedText
                        size="xs"
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            lineHeight: 15,
                        }}
                    >
                        تومان
                    </ThemedText>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.purple,
        // flex: 1,
        width: '48%',
        alignItems: 'center',
        padding: 15,
        paddingTop: 30,
        borderRadius: 15,
        elevation: 20,
        shadowColor: Colors.purple,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 80,
        borderWidth: 1,
        borderColor: 'white',
    },
    priceBox: {
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'white',
        padding: 5,
        paddingTop: 8,
        width: '48%',
        borderRadius: 10,
    },
    time: {
        position: 'absolute',
        top: -10,
        borderRadius: 8,
        elevation: 20,
        shadowColor: Colors.purple,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 80,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: Colors.purple,
        paddingHorizontal: 8,
        paddingVertical: 3,
    },
});
