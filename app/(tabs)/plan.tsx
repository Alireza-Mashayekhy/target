import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { Back } from '@/components/Base/Back';
import Gift from '@/components/plan/Gift';
import PlanCard from '@/components/plan/Card';
import PlanDiscount from '@/components/plan/Discount';
import PlanInvite from '@/components/plan/Invite';

export default function plan() {
    const scrollRef = useAnimatedRef<Animated.ScrollView>();

    const plans = [
        {
            time: 'یک ماهه',
            days: 30,
            price: 60000,
            discountedPrice: 49000,
        },
        {
            time: 'سه ماهه',
            days: 90,
            price: 180000,
            discountedPrice: 139000,
        },
        {
            time: 'شش ماهه',
            days: 180,
            price: 360000,
            discountedPrice: 249000,
        },
        {
            time: 'یک ساله',
            days: 365,
            price: 720000,
            discountedPrice: 499000,
        },
    ];
    return (
        <ThemedView style={styles.container}>
            <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
                <ThemedView style={styles.content}>
                    <Back link="/profile" />
                    <ThemedText
                        weight="bold"
                        size="2xl"
                        style={{ marginTop: 5, textAlign: 'center' }}
                    >
                        انتخاب پلن
                    </ThemedText>
                    <Gift />
                    <View style={styles.cards}>
                        {plans.map((plan) => {
                            return (
                                <PlanCard
                                    key={plan.time}
                                    time={plan.time}
                                    days={plan.days}
                                    price={plan.price}
                                    discountedPrice={plan.discountedPrice}
                                />
                            );
                        })}
                    </View>
                    <PlanDiscount />
                    <PlanInvite />
                </ThemedView>
            </Animated.ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 32,
        gap: 16,
        overflow: 'hidden',
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginTop: 20,
    },
});
