import { Image, ImageSourcePropType, StyleSheet } from 'react-native';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';

interface PropsType {
    image: ImageSourcePropType;
    title: string;
    link: string;
}
export default function HomeCard({ image, title, link }: PropsType) {
    const boxColor = useThemeColor({ light: '#2E70F250', dark: '#FFFFFF15' });
    return (
        <ThemedView style={[styles.box, { backgroundColor: boxColor }]}>
            <Image
                source={image}
                style={{ width: 100, height: 100, resizeMode: 'center' }}
            />
            <Link href={link}>
                <ThemedText>{title}</ThemedText>
                <ThemedView style={{ backgroundColor: 'transparent' }}>
                    <Ionicons name="arrow-back" />
                </ThemedView>
            </Link>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        padding: 12,
        borderRadius: 20,
        flexGrow: 1,
        flexBasis: 1,
    },
});
