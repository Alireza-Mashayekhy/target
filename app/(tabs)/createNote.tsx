import { StyleSheet, View, TextInput, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { Back } from '@/components/Base/Back';
import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import Checkbox from 'expo-checkbox';
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';

const colorsList = [
    '#321096',
    '#534FFD',
    '#706DF4',
    '#6D8BF4',
    '#4BA8FE',
    '#6DC4F4',
    '#6DE4F4',
    '#FFEA2C',
    '#FFAE34',
    '#F32518',
];

const fontSizeList = [8, 10, 12, 14, 16];

export default function notebook() {
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const [selectedBackground, setSelectedBackground] = useState(colorsList[0]);
    const [selectedHighlight, setSelectedHighlight] = useState(colorsList[0]);
    const [selectedFontSize, setSelectedFontSize] = useState(12);
    return (
        <ThemedView style={styles.container}>
            <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
                <ThemedView style={styles.content}>
                    <Back link="/notebook" />
                    <ThemedText
                        weight="bold"
                        size="2xl"
                        style={{ marginTop: 5, textAlign: 'center' }}
                    >
                        دفترچه یادداشت
                    </ThemedText>
                    <View style={styles.settingBox}>
                        <View style={styles.colorSection}>
                            {colorsList.map((e, index) => {
                                return (
                                    <Pressable
                                        onPress={() => setSelectedBackground(e)}
                                        style={[
                                            styles.color,
                                            {
                                                backgroundColor: e,
                                            },
                                        ]}
                                    ></Pressable>
                                );
                            })}
                        </View>
                        <ThemedText>پس زمینه:</ThemedText>
                    </View>
                    <View style={styles.settingBox}>
                        <RadioButtonGroup
                            containerStyle={{
                                marginBottom: 10,
                                flexDirection: 'row',
                                gap: 5,
                            }}
                            selected={selectedFontSize}
                            onSelected={(value: number) =>
                                setSelectedFontSize(value)
                            }
                            radioBackground={Colors.green}
                            radioStyle={{
                                width: 14,
                                height: 14,
                                borderRadius: 0,
                            }}
                        >
                            {fontSizeList.map((e) => {
                                return (
                                    <RadioButtonItem
                                        value={e}
                                        label={e.toString()}
                                    />
                                );
                            })}
                        </RadioButtonGroup>
                        <ThemedText>اندازه فونت:</ThemedText>
                    </View>
                    <View style={styles.settingBox}>
                        <View style={styles.colorSection}>
                            {colorsList.map((e, index) => {
                                return (
                                    <Pressable
                                        onPress={() => setSelectedHighlight(e)}
                                        style={[
                                            styles.color,
                                            {
                                                backgroundColor: e,
                                            },
                                        ]}
                                    ></Pressable>
                                );
                            })}
                        </View>
                        <ThemedText>هایلایت:</ThemedText>
                    </View>
                    <View
                        style={[
                            styles.titleBox,
                            { backgroundColor: selectedHighlight },
                        ]}
                    >
                        <TextInput
                            style={{
                                color: 'white',
                                textAlign: 'right',
                                width: '90%',
                            }}
                        />
                        <ThemedText style={{ color: 'white' }}>
                            موضوع:
                        </ThemedText>
                    </View>
                    <View
                        style={[
                            styles.textBox,
                            { backgroundColor: selectedBackground },
                        ]}
                    >
                        <TextInput
                            multiline
                            style={{
                                color: 'white',
                                fontSize: selectedFontSize,
                            }}
                            placeholder="یادداشت"
                            placeholderTextColor="#fff"
                        />
                    </View>
                </ThemedView>
            </Animated.ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 100,
    },
    content: {
        flex: 1,
        padding: 32,
        gap: 20,
        overflow: 'hidden',
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    settingBox: {
        borderRadius: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: Colors.purple,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    colorSection: {
        flexDirection: 'row-reverse',
    },
    color: {
        width: 20,
        height: 20,
    },
    titleBox: {
        paddingHorizontal: 20,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    textBox: {
        padding: 8,
        borderRadius: 10,
    },
});
