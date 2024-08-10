import { StyleSheet, View, ScrollView, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Back } from '@/components/Base/Back';
import { Colors } from '@/constants/Colors';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Ionicons } from '@expo/vector-icons';

export default function Backup() {
    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.content}>
                <Back link="/profile" />
                <ThemedText
                    weight="bold"
                    size="2xl"
                    style={{ marginTop: 5, textAlign: 'center' }}
                >
                    پشتیبان گیری از اطلاعات
                </ThemedText>
                <View style={{ width: '100%', alignItems: 'flex-end' }}>
                    <View style={styles.targetBox}>
                        <ThemedText style={{ color: 'white' }}>
                            پشتیان گیری
                        </ThemedText>
                        <Ionicons
                            name="cloud-download-outline"
                            color="white"
                            size={20}
                        />
                    </View>
                </View>
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
                <Pressable style={styles.button1}>
                    <ThemedText style={{ color: 'white' }}>
                        پشتیبان گیری از اطلاعات
                    </ThemedText>
                </Pressable>
                <Pressable
                    style={[
                        styles.button2,
                        {
                            backgroundColor: useThemeColor({
                                light: 'white',
                                dark: '#FFFFFF12',
                            }),
                        },
                    ]}
                >
                    <View>
                        <ThemedText
                            size="sm"
                            style={{
                                color: useThemeColor({
                                    light: 'black',
                                    dark: 'white',
                                }),
                            }}
                        >
                            خام کردن اطلاعات نرم افزار
                        </ThemedText>
                        <ThemedText
                            size="xs"
                            style={{
                                color: '#949494',
                            }}
                        >
                            پاک کردن تمامی اطلاعات نرم افزار
                        </ThemedText>
                    </View>
                    <View
                        style={{
                            backgroundColor: Colors.purple,
                            padding: 10,
                            borderRadius: 8,
                        }}
                    >
                        <Ionicons
                            name="server-outline"
                            color="white"
                            size={20}
                        />
                    </View>
                </Pressable>
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
        width: 'auto',
        paddingHorizontal: 20,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    button1: {
        backgroundColor: Colors.purple,
        width: '100%',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
    },
    button2: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'flex-end',
        gap: 5,
        elevation: 10,
        shadowColor: '#222222',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 80,
        padding: 5,
        borderRadius: 10,
    },
});
