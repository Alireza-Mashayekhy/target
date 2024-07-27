import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from 'react-native-svg';
import { ThemedText } from '../ThemedText';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet } from 'react-native';
import { ThemedView } from '../ThemedView';

export default function Level() {
    return (
        <LinearGradient
            colors={['#2E70F2', '#7AA7FF']}
            start={[0, 0.1]}
            style={styles.background}
        >
            <ThemedView
                style={{
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <ThemedView style={{ backgroundColor: 'transparent' }}>
                    <ThemedText
                        style={{
                            textAlign: 'center',
                            color: 'white',
                            marginBottom: 10,
                        }}
                    >
                        موفقیت بهترین انتقام است!
                    </ThemedText>
                    <ThemedView
                        style={{
                            backgroundColor: '#FFFFFF33',
                            padding: 12,
                            borderRadius: 10,
                            gap: 8,
                        }}
                    >
                        <ThemedView
                            style={{
                                backgroundColor: 'transparent',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                            }}
                        >
                            <ThemedText
                                size="sm"
                                font="PoetsenOne"
                                style={{
                                    color: '#FFE600',
                                }}
                            >
                                Level 2
                            </ThemedText>
                            <ThemedText
                                size="sm"
                                font="PoetsenOne"
                                style={{
                                    color: '#FFE600',
                                }}
                            >
                                Level 3
                            </ThemedText>
                        </ThemedView>
                        <ThemedView style={styles.bar}>
                            <ThemedView
                                style={[styles.fillBar, { width: '20%' }]}
                            ></ThemedView>
                        </ThemedView>
                        <ThemedView
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                backgroundColor: 'transparent',
                            }}
                        >
                            <ThemedView
                                style={{
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                }}
                            >
                                <ThemedText
                                    size="xs"
                                    style={{ color: 'white' }}
                                >
                                    ۳۰۰
                                </ThemedText>
                                <ThemedText
                                    size="xs"
                                    style={{ color: 'white' }}
                                >
                                    امتیاز عملکرد
                                </ThemedText>
                            </ThemedView>
                            <ThemedView
                                style={{
                                    backgroundColor: 'transparent',
                                    alignItems: 'center',
                                }}
                            >
                                <ThemedText
                                    size="xs"
                                    style={{ color: 'white' }}
                                >
                                    ۵۰۰
                                </ThemedText>
                                <ThemedText
                                    size="xs"
                                    style={{ color: 'white' }}
                                >
                                    امتیاز باقی‌مانده
                                </ThemedText>
                            </ThemedView>
                        </ThemedView>
                    </ThemedView>
                </ThemedView>
                <ThemedView style={{ backgroundColor: 'transparent' }}>
                    <ThemedView
                        style={{
                            backgroundColor: 'transparent',
                            alignItems: 'center',
                        }}
                    >
                        <AnimatedCircularProgress
                            size={80}
                            width={6}
                            fill={60}
                            backgroundColor="#2E70F2"
                            tintColor="#FFFFFF"
                            rotation={210}
                            arcSweepAngle={300}
                            renderCap={({ center }) => (
                                <Circle
                                    cx={center.x}
                                    cy={center.y}
                                    r="3"
                                    fill="#FFFFFF"
                                />
                            )}
                            lineCap="round"
                        >
                            {(fill) => (
                                <ThemedView
                                    style={{
                                        backgroundColor: 'transparent',
                                        alignItems: 'center',
                                        overflow: 'visible',
                                    }}
                                >
                                    <ThemedText
                                        weight="bold"
                                        font="PoetsenOne"
                                        style={{
                                            color: '#FFE600',
                                            fontSize: 50,
                                            textShadowColor: '#002A99',
                                            bottom: 5,
                                            textShadowRadius: 6,
                                            textShadowOffset: {
                                                width: -2,
                                                height: 2,
                                            },
                                        }}
                                    >
                                        2
                                    </ThemedText>
                                </ThemedView>
                            )}
                        </AnimatedCircularProgress>
                        <ThemedText
                            size="sm"
                            style={{
                                color: 'white',
                                position: 'absolute',
                                bottom: -5,
                                left: '38%',
                            }}
                        >
                            level
                        </ThemedText>
                    </ThemedView>
                    <ThemedView
                        style={{
                            backgroundColor: 'transparent',
                            borderBottomWidth: 1,
                            borderColor: 'white',
                            marginTop: 10,
                        }}
                    >
                        <ThemedText size="xs">
                            همنیجوری ادامه بده! 👌
                        </ThemedText>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
            <ThemedView style={styles.line} />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        padding: 10,
        paddingBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    bar: {
        height: 4,
        backgroundColor: '#FFFFFF80',
        borderRadius: 100,
    },
    fillBar: {
        height: 4,
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
    },
    line: {
        width: 100,
        position: 'absolute',
        bottom: -4,
        backgroundColor: 'white',
        borderRadius: 99,
        height: 8,
        left: '38%',
    },
});
