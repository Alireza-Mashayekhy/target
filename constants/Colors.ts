/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
    purple: '#83028C',
    green: '#10BD36',
    blue1: '#2E70F2',
    blue2: '#7AA7FF',
    blue3: '#75C7F5',
    yellow: '#FFBB00',
    blueGrey: '#EFF3FF',
    light: {
        text: '#000000',
        background: '#FFFFFF',
        tint: tintColorLight,
        icon: '#000000',
        tabIconDefault: '#000000',
        tabIconSelected: tintColorLight,
    },
    dark: {
        text: '#FFFFFF',
        background: '#181818',
        tint: tintColorDark,
        icon: '#FFFFFF',
        tabIconDefault: '#FFFFFF',
        tabIconSelected: tintColorDark,
    },
};
