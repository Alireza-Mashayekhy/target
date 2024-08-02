import { Text, type TextProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useFonts } from 'expo-font';

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    size?: 'default' | 'sm' | 'xs' | 'lg' | 'xl' | '2xl';
    weight?: 'default' | 'bold' | 'extraBold' | 'dark' | 'thin';
    font?: 'default' | 'Reyhaneh' | 'Morabba' | 'PoetsenOne';
};

export function ThemedText({
    style,
    lightColor,
    darkColor,
    size = 'default',
    weight = 'default',
    font = 'default',
    ...rest
}: ThemedTextProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    const [fontsLoaded, fontError] = useFonts({
        Reyhaneh: require('../assets/fonts/Reyhaneh.ttf'),
        Morabba: require('../assets/fonts/Morabba/Morabba-Bold.ttf'),
        Dana: require('../assets/fonts/Dana/Dana-Regular.ttf'),
        DanaBold: require('../assets/fonts/Dana/Dana-Bold.ttf'),
        PoetsenOne: require('../assets/fonts/PoetsenOne-Regular.ttf'),
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <Text
            style={[
                { color },
                size === 'default' ? styles.defaultSize : undefined,
                size === 'sm' ? styles.sm : undefined,
                size === 'xs' ? styles.xs : undefined,
                size === 'lg' ? styles.lg : undefined,
                size === 'xl' ? styles.xl : undefined,
                size === '2xl' ? styles.xl2 : undefined,
                font === 'default'
                    ? weight === 'bold'
                        ? styles.DanaBold
                        : styles.Dana
                    : undefined,
                font === 'Reyhaneh' ? styles.Reyhaneh : undefined,
                font === 'Morabba' ? styles.Morabba : undefined,
                font === 'PoetsenOne' ? styles.PoetsenOne : undefined,
                weight === 'default' ? styles.defaultWeight : undefined,
                weight === 'bold' ? styles.bold : undefined,
                weight === 'extraBold' ? styles.extraBold : undefined,
                weight === 'dark' ? styles.dark : undefined,
                weight === 'thin' ? styles.thin : undefined,
                style,
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    xs: { fontSize: 12 },
    sm: { fontSize: 14 },
    defaultSize: { fontSize: 16 },
    lg: { fontSize: 18 },
    xl: { fontSize: 20 },
    xl2: { fontSize: 24 },
    thin: { fontWeight: 400 },
    defaultWeight: { fontWeight: 600 },
    bold: { fontWeight: 700 },
    extraBold: { fontWeight: 800 },
    dark: { fontWeight: 900 },
    Reyhaneh: { fontFamily: 'Reyhaneh' },
    Morabba: { fontFamily: 'Morabba' },
    Dana: { fontFamily: 'Dana' },
    DanaBold: { fontFamily: 'DanaBold' },
    PoetsenOne: { fontFamily: 'PoetsenOne' },
});
