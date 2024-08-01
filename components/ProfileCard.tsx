import { ReactElement } from 'react';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';
import {
    Image,
    ImageSourcePropType,
    Pressable,
    useColorScheme,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { useThemeColor } from '@/hooks/useThemeColor';

interface PropsType {
    icon: ImageSourcePropType;
    name: string;
    link: string;
    darkIcon: ImageSourcePropType;
}
export default function ProfileCard(props: PropsType) {
    return (
        <Pressable
            onPress={() => {
                router.push(props.link);
            }}
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 10,
                borderWidth: 1,
                borderColor: useThemeColor({
                    light: Colors.purple,
                    dark: '#FFFFFF26',
                }),
                borderRadius: 8,
            }}
        >
            <ThemedView
                style={{
                    padding: 5,
                    backgroundColor: Colors.purple,
                    borderRadius: 6,
                }}
            >
                <Ionicons
                    name="chevron-back-outline"
                    size={15}
                    style={{ color: 'white' }}
                ></Ionicons>
            </ThemedView>
            <ThemedView
                style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            >
                <ThemedText size="sm">{props.name}</ThemedText>
                <Image
                    source={
                        useColorScheme() === 'dark'
                            ? props.darkIcon
                            : props.icon
                    }
                    style={{ width: 18, height: 18 }}
                />
            </ThemedView>
        </Pressable>
    );
}
