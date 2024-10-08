import PagesView from '@/components/PagesView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {
    Image,
    ImageSourcePropType,
    Pressable,
    useColorScheme,
} from 'react-native';
import { Circle } from 'react-native-svg';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Colors } from '@/constants/Colors';
import ProfileCard from '@/components/ProfileCard';
import { useThemeColor } from '@/hooks/useThemeColor';
import { router } from 'expo-router';

export default function Profile() {
    interface ListType {
        icon: ImageSourcePropType;
        darkIcon: ImageSourcePropType;
        name: string;
        link: string;
    }
    const list: ListType[] = [
        {
            darkIcon: require('@/assets/images/icons/white-user-edit.png'),
            icon: require('@/assets/images/icons/user-edit.png'),
            name: 'ویرایش پروفایل',
            link: '/edit-profile',
        },
        {
            darkIcon: require('@/assets/images/icons/white-podcast.png'),
            icon: require('@/assets/images/icons/podcast.png'),
            name: 'آموزشی',
            link: '/learn',
        },
        {
            darkIcon: require('@/assets/images/icons/white-laptop-warning.png'),
            icon: require('@/assets/images/icons/laptop-warning.png'),
            name: 'تمدید اشتراک',
            link: '/plan',
        },
        {
            darkIcon: require('@/assets/images/icons/white-database-backup.png'),
            icon: require('@/assets/images/icons/database-backup.png'),
            name: 'پشتیبان گیری از اطلاعات',
            link: '/backup',
        },
        {
            darkIcon: require('@/assets/images/icons/white-about.png'),
            icon: require('@/assets/images/icons/about.png'),
            name: 'درباره ما',
            link: '/aboutUs',
        },
    ];
    return (
        <PagesView>
            <ThemedView style={{ alignItems: 'center', gap: 10 }}>
                <ThemedView
                    style={{
                        padding: 4,
                        elevation: 10,
                        shadowColor: '#222222',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 80,
                        borderRadius: 99,
                        backgroundColor: useThemeColor({
                            light: 'white',
                            dark: '#FFFFFF12',
                        }),
                    }}
                >
                    <AnimatedCircularProgress
                        size={120}
                        width={5}
                        fill={62}
                        backgroundColor={useThemeColor({
                            light: '#F5F5F5',
                            dark: '#FFFFFF1A',
                        })}
                        tintColor={useThemeColor({
                            light: Colors.purple,
                            dark: 'white',
                        })}
                        rotation={90}
                        renderCap={
                            useColorScheme() === 'light'
                                ? ({ center }) => (
                                      <Circle
                                          cx={center.x}
                                          cy={center.y}
                                          r="2.5"
                                          fill="#74047C"
                                      />
                                  )
                                : ({ center }) => (
                                      <Circle
                                          cx={center.x}
                                          cy={center.y}
                                          r="2.5"
                                          fill="white"
                                      />
                                  )
                        }
                        lineCap="round"
                    >
                        {useColorScheme() === 'light'
                            ? (fill) => (
                                  <ThemedView
                                      style={{
                                          backgroundColor: 'transparent',
                                          alignItems: 'center',
                                      }}
                                  >
                                      <ThemedText
                                          size="sm"
                                          style={{ color: Colors.purple }}
                                      >
                                          {Math.ceil((fill * 24) / 100)} روز
                                      </ThemedText>
                                  </ThemedView>
                              )
                            : (fill) => (
                                  <ThemedView
                                      style={{
                                          backgroundColor: 'transparent',
                                          alignItems: 'center',
                                      }}
                                  >
                                      <ThemedText
                                          size="sm"
                                          style={{ color: 'white' }}
                                      >
                                          {Math.ceil((fill * 24) / 100)} روز
                                      </ThemedText>
                                  </ThemedView>
                              )}
                    </AnimatedCircularProgress>
                </ThemedView>
                <ThemedText
                    size="sm"
                    style={{
                        color: useThemeColor({
                            light: Colors.purple,
                            dark: 'white',
                        }),
                    }}
                >
                    اتمام پلن
                </ThemedText>
            </ThemedView>
            <ThemedView style={{ gap: 10, marginTop: 15 }}>
                {list.map((item) => {
                    return (
                        <ProfileCard
                            key={item.name}
                            icon={item.icon}
                            darkIcon={item.darkIcon}
                            name={item.name}
                            link={item.link}
                        />
                    );
                })}
            </ThemedView>
            <Pressable
                onPress={() => {
                    router.push('/');
                }}
                style={{
                    padding: 10,
                    borderWidth: 1,
                    borderColor: useThemeColor({
                        light: Colors.purple,
                        dark: '#FFFFFF26',
                    }),
                    borderRadius: 8,
                    marginTop: 30,
                }}
            >
                <ThemedView
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        gap: 10,
                    }}
                >
                    <ThemedText size="sm" style={{ color: 'red' }}>
                        خروج از حساب کاربری
                    </ThemedText>
                    <Image
                        source={require('@/assets/images/icons/logout.png')}
                        style={{ width: 18, height: 18 }}
                    />
                </ThemedView>
            </Pressable>
        </PagesView>
    );
}
