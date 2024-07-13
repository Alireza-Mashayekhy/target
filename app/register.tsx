import { Input } from '@/components/Base/Input';
import * as ImagePicker from 'expo-image-picker';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Image, Modal, Pressable, StyleSheet } from 'react-native';
import DatePicker from '@mohamadkh75/react-native-jalali-datepicker';
import { useState } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function register() {
    const [image, setImage] = useState<string>('');
    const [date, setDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const calendarBackground = useThemeColor({
        light: 'white',
        dark: 'black',
    });
    const calendarDayColor = useThemeColor({
        dark: 'white',
        light: 'black',
    });

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    return (
        <ThemedView style={styles.page}>
            <ThemedView style={{ alignItems: 'center' }}>
                <ThemedText
                    weight="extraBold"
                    size="xl"
                    style={{ textAlign: 'center' }}
                >
                    اطلاعات کاربری
                </ThemedText>
                <Pressable onPress={pickImage}>
                    {(image && (
                        <Image
                            source={{ uri: image }}
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 99,
                            }}
                        />
                    )) || (
                        <Image
                            source={require('@/assets/images/registerProfile.png')}
                            style={{ width: 100, height: 100 }}
                        />
                    )}
                </Pressable>
                <ThemedText weight="extraBold" style={{ textAlign: 'center' }}>
                    انتخاب عکس پروفایل
                </ThemedText>
            </ThemedView>

            <Input
                placeholder="*نام و نام خانوادگی"
                icon={
                    <Image
                        alt="user"
                        source={require('@/assets/images/icons/user.png')}
                    />
                }
            />
            <Input
                placeholder="*نام کاربری"
                icon={
                    <Image
                        alt="username"
                        source={require('@/assets/images/icons/username.png')}
                    />
                }
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <DatePicker
                    style={{
                        width: '95%',
                        height: '80%',
                        margin: 'auto',
                        alignSelf: 'center',
                        backgroundColor: calendarBackground,
                        borderWidth: 1,
                        borderColor: Colors.blue1,
                        borderRadius: 10,
                        elevation: 4,
                    }}
                    dateSeparator="/"
                    minDate="1300/1/1"
                    onDateChange={(date: any) => {
                        setDate(date);
                        setModalVisible(!modalVisible);
                    }}
                    yearMonthBoxStyle={{
                        width: '30%',
                        height: '75%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 10,
                    }}
                    headerContainerStyle={{ height: '15%' }}
                    yearMonthTextStyle={{
                        fontSize: 22,
                        color: Colors.blue1,
                    }}
                    iconContainerStyle={{ width: `${100 / 7}%` }}
                    backIconStyle={{
                        width: 20,
                        height: 20,
                        resizeMode: 'center',
                        tintColor: Colors.blue1,
                        transform: [{ rotate: '180deg' }],
                    }}
                    nextIconStyle={{
                        width: 20,
                        height: 20,
                        resizeMode: 'center',
                        tintColor: Colors.blue1,
                        transform: [{ rotate: '180deg' }],
                    }}
                    eachYearStyle={{
                        width: 110,
                        height: 82,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: Colors.blue1,
                        marginTop: '1.5%',
                        marginBottom: 5,
                        marginHorizontal: '1.5%',
                        borderRadius: 10,
                        elevation: 3,
                    }}
                    eachYearTextStyle={{
                        fontSize: 16,
                        color: 'white',
                    }}
                    eachMonthStyle={{
                        width: `${88 / 3}%`,
                        height: `${88 / 4}%`,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: Colors.blue1,
                        marginBottom: '3%',
                        borderRadius: 10,
                        elevation: 3,
                    }}
                    eachMonthTextStyle={{
                        fontSize: 16,
                        color: 'white',
                    }}
                    weekdaysContainerStyle={{ height: '10%' }}
                    weekdayStyle={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    weekdayTextStyle={{
                        fontSize: 16,
                        color: Colors.blue1,
                        marginBottom: 5,
                    }}
                    borderColor={Colors.blue1}
                    dayStyle={{
                        width: `${100 / 7}%`,
                        justifyContent: 'center',
                        alignItems: 'center',
                        aspectRatio: 1 / 1,
                    }}
                    selectedDayStyle={{
                        width: '70%',
                        aspectRatio: 1 / 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 100,
                    }}
                    selectedDayColor={Colors.blue1}
                    dayTextStyle={{ fontSize: 18 }}
                    selectedDayTextColor="white"
                    dayTextColor={calendarDayColor}
                    disabledTextColor="#dddddd"
                />
            </Modal>
            <Pressable
                style={styles.birthDate}
                onPress={() => setModalVisible(true)}
            >
                <ThemedText
                    size="sm"
                    style={{
                        color: `${date ? 'black' : '#888888'}`,
                        width: '90%',
                        textAlign: 'right',
                    }}
                >
                    {date || '*تاریخ تولد'}
                </ThemedText>
                <Image
                    alt="birth Date"
                    source={require('@/assets/images/icons/calendar.png')}
                />
            </Pressable>
            <Input
                placeholder="ایمیل (پست الکترونیک)"
                icon={
                    <Image
                        alt="email"
                        source={require('@/assets/images/icons/mail.png')}
                    />
                }
            />
            <Input
                placeholder="رمز عبور"
                password={true}
                icon={
                    <Image
                        alt="password"
                        source={require('@/assets/images/icons/password.png')}
                    />
                }
            />
            <Input
                placeholder="* تکرار رمز عبور"
                password={true}
                icon={
                    <Image
                        alt="password"
                        source={require('@/assets/images/icons/repeat.png')}
                    />
                }
            />
            <Pressable style={styles.button}>
                <ThemedText size="lg" style={{ color: 'white' }}>
                    ثبت اطلاعات
                </ThemedText>
            </Pressable>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
    },
    forgotBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        backgroundColor: Colors.blue1,
        width: '100%',
        borderRadius: 6,
        padding: 10,
        alignItems: 'center',
    },
    birthDate: {
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 13,
        backgroundColor: Colors.blueGrey,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        borderColor: '#00000015',
    },
});
