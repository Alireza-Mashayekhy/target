import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from 'react-native-svg';
import { ThemedText } from '../ThemedText';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet } from 'react-native';
import { ThemedView } from '../ThemedView';

export default function DailyTarget() {
    return (
        <LinearGradient
            colors={['#83028C', '#B52EBE']}
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
                <ThemedView
                    style={{
                        backgroundColor: '#FFFFFF33',
                        padding: 12,
                        borderRadius: 10,
                        gap: 8,
                    }}
                >
                    <ThemedText
                        size="xs"
                        style={{ color: 'white', paddingHorizontal: 20 }}
                    >
                        رکورد هدف روزانه: ۵ روز
                    </ThemedText>
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
                            <ThemedText size="xs" style={{ color: 'white' }}>
                                ۳۵ روز{' '}
                            </ThemedText>
                            <ThemedText size="xs" style={{ color: 'white' }}>
                                باقی مانده
                            </ThemedText>
                        </ThemedView>
                        <ThemedView
                            style={{
                                backgroundColor: 'transparent',
                                alignItems: 'center',
                            }}
                        >
                            <ThemedText size="xs" style={{ color: 'white' }}>
                                هدف
                            </ThemedText>
                            <ThemedText size="xs" style={{ color: 'white' }}>
                                ۴۰ روز
                            </ThemedText>
                        </ThemedView>
                    </ThemedView>
                </ThemedView>
                <AnimatedCircularProgress
                    size={80}
                    width={6}
                    fill={60}
                    backgroundColor="#74047C"
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
                    style={{ marginRight: 20 }}
                >
                    {(fill) => (
                        <ThemedView
                            style={{
                                backgroundColor: 'transparent',
                                alignItems: 'center',
                                marginTop: 10,
                            }}
                        >
                            <Image
                                style={{ width: 35, height: 35 }}
                                source={require('@/assets/images/icons/gem.png')}
                            />
                            <ThemedText size="sm" style={{ color: 'white' }}>
                                0x
                            </ThemedText>
                        </ThemedView>
                    )}
                </AnimatedCircularProgress>
            </ThemedView>
            <ThemedText
                size="xs"
                style={{
                    paddingHorizontal: 25,
                    textAlign: 'center',
                    color: 'white',
                    marginTop: 10,
                }}
            >
                هر روز واسه رسیدن به هدفت استمرار روزانه داشته باش و الماس ها رو
                به چنگ بزن
            </ThemedText>
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
