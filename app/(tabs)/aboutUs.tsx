import { StyleSheet, Image, View, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { Back } from '@/components/Base/Back';
import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function plan() {
    const scrollRef = useAnimatedRef<Animated.ScrollView>();

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.content}>
                <Back link="/profile" />
                <ThemedText
                    weight="bold"
                    size="2xl"
                    style={{ marginTop: 5, textAlign: 'center' }}
                >
                    درباره ما
                </ThemedText>
                <Image
                    source={require('@/assets/images/logo.png')}
                    style={{ width: 50, height: 50 }}
                />
                <View
                    style={[
                        styles.textBox,
                        {
                            backgroundColor: useThemeColor({
                                light: 'white',
                                dark: '#FFFFFF12',
                            }),
                        },
                    ]}
                >
                    <View style={styles.targetBox}>
                        <ThemedText style={{ color: 'white' }}>
                            تارگت اپ
                        </ThemedText>
                    </View>
                    <ScrollView
                        style={{ paddingRight: 15, paddingBottom: 15 }}
                        endFillColor={Colors.purple}
                    >
                        <ThemedText
                            size="xs"
                            style={{
                                color: useThemeColor({
                                    light: 'black',
                                    dark: 'white',
                                }),
                            }}
                        >
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ، با استفاده از طراحان گرافیک است، چاپگرها و
                            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                            است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                            باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا
                            با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                            علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
                            ایجاد کرد، در این صورت می توان امید داشت که تمام و
                            دشواری موجود در ارائه لورم ایپسوم متن ساختگی با
                            تولید سادگی نامفهوم از صنعت چاپ، با استفاده از
                            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                            مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                            فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                            بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
                            و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
                            را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
                            فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می
                            توان امید داشت که تمام و دشواری موجود در ارائه لورم
                            ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                            چاپ، با استفاده از طراحان گرافیک است، چاپگرها و متون
                            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
                            متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
                            فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
                            شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                            طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                            در این صورت می توان امید داشت که تمام و دشواری موجود
                            در ارائه
                        </ThemedText>
                    </ScrollView>
                </View>
                <Image
                    source={require('@/assets/images/aboutUs.png')}
                    style={{ width: 200, height: 170 }}
                />
            </ThemedView>
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
        alignItems: 'center',
    },
    cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        marginTop: 20,
    },
    textBox: {
        padding: 5,
        flex: 1,
        elevation: 10,
        shadowColor: '#222222',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 80,
        borderRadius: 7,
        alignItems: 'flex-end',
        paddingBottom: 20,
    },
    targetBox: {
        backgroundColor: Colors.blue1,
        borderRadius: 7,
        bottom: 20,
        width: 'auto',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
});
