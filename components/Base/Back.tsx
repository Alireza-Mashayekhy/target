import { Image, StyleSheet } from 'react-native';
import { ThemedView } from '../ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';

export const Back = () => {
    const backBoxColor = useThemeColor({
        light: Colors.purple,
        dark: '#FFFFFF10',
    });
    return (
        <ThemedView style={[style.box, { backgroundColor: backBoxColor }]}>
            <Image source={require('@/assets/images/icons/back.png')} />
        </ThemedView>
    );
};

const style = StyleSheet.create({
    box: {
        transform: [{ rotate: '-15deg' }],
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
