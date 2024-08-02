import { Image, Pressable, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

interface PropsType {
    link: string;
}
export const Back = (props: PropsType) => {
    const backBoxColor = useThemeColor({
        light: Colors.purple,
        dark: '#FFFFFF10',
    });
    return (
        <Pressable
            onPress={() => router.push(props.link)}
            style={[style.box, { backgroundColor: backBoxColor }]}
        >
            <Image
                source={require('@/assets/images/icons/back.png')}
                style={{ width: 20, height: 12 }}
            />
        </Pressable>
    );
};

const style = StyleSheet.create({
    box: {
        // transform: [{ rotate: '-15deg' }],
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        position: 'absolute',
        right: 15,
        top: 20,
        zIndex: 10,
    },
});
