import { Image, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function PlanDiscount() {
    return (
        <ThemedView
            style={[
                styles.box,
                {
                    backgroundColor: useThemeColor({
                        light: 'white',
                        dark: '#FFFFFF07',
                    }),
                },
            ]}
        >
            <Image
                source={require('@/assets/images/discount.png')}
                style={styles.image}
            />
            <View style={{ flex: 1 }}>
                <ThemedText size="sm">خرید اشتراک با کد تخفیف</ThemedText>
                <View style={styles.form}>
                    <Pressable style={styles.button}>
                        <ThemedText size="sm" style={{ color: 'white' }}>
                            تایید
                        </ThemedText>
                    </Pressable>
                    <TextInput style={styles.input} />
                </View>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 132,
        height: 132,
        position: 'absolute',
        top: -30,
        left: 0,
    },
    box: {
        elevation: 20,
        shadowColor: '#00000040',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 80,
        flexDirection: 'row',
        borderRadius: 20,
        padding: 15,
        paddingLeft: 120,
        justifyContent: 'flex-end',
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'white',
    },
    form: {
        flexDirection: 'row',
        marginTop: 10,
        gap: 7,
    },
    input: {
        borderWidth: 1,
        flex: 1,
        borderColor: '#E6E6E6',
        borderRadius: 6,
        paddingVertical: 3,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: Colors.blue1,
        paddingHorizontal: 15,
        justifyContent: 'center',
        paddingBottom: 3,
        borderRadius: 6,
    },
});
