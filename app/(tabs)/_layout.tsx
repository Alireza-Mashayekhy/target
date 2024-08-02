import { Tabs } from 'expo-router';
import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { Image, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedView } from '@/components/ThemedView';

export default function TabLayout() {
    const tabColor = useThemeColor({
        light: '#ffffff',
        dark: '#2F2F2F',
    });

    const itemColor = useThemeColor({
        light: '#000000',
        dark: '#ffffff',
    });

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'current',
                tabBarInactiveTintColor: itemColor,
                headerTintColor: itemColor,
                headerShown: false,
                tabBarStyle: [styles.tabBar, { backgroundColor: tabColor }],
            }}
        >
            <Tabs.Screen
                name="plan"
                options={{
                    href: null,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'پروفایل',
                    tabBarIcon: ({ color, focused }) => (
                        <ThemedView style={{ backgroundColor: 'transparent' }}>
                            <Image
                                source={require('@/assets/images/user.png')}
                                style={{
                                    borderRadius: 99,
                                    width: 40,
                                    height: 40,
                                    bottom: 12,
                                }}
                            />
                            <Image
                                source={require('@/assets/images/icons/userIcon.png')}
                                style={{
                                    position: 'absolute',
                                    bottom: 4,
                                    left: -2,
                                }}
                            />
                        </ThemedView>
                    ),
                }}
            />
            <Tabs.Screen
                name="reports"
                options={{
                    title: 'گزارشات',
                    tabBarIcon: ({ color, focused }) => (
                        <ThemedView
                            style={[
                                {
                                    padding: 8,
                                    paddingBottom: 12,
                                    borderRadius: 10,
                                    height: 40,
                                },
                                focused
                                    ? {
                                          backgroundColor: Colors.purple,
                                          bottom: 10,
                                          borderWidth: 1,
                                          borderColor: '#ffffff50',
                                      }
                                    : { backgroundColor: 'transparent' },
                            ]}
                        >
                            <TabBarIcon
                                name={
                                    focused ? 'bar-chart' : 'bar-chart-outline'
                                }
                                color={focused ? 'white' : itemColor}
                            />
                        </ThemedView>
                    ),
                }}
            />
            <Tabs.Screen
                name="schedule"
                options={{
                    title: 'برنامه هفتگی',
                    tabBarIcon: ({ color, focused }) => (
                        <ThemedView
                            style={[
                                {
                                    padding: 8,
                                    paddingBottom: 12,
                                    borderRadius: 10,
                                    height: 40,
                                },
                                focused
                                    ? {
                                          backgroundColor: Colors.purple,
                                          bottom: 10,
                                          borderWidth: 1,
                                          borderColor: '#ffffff50',
                                      }
                                    : { backgroundColor: 'transparent' },
                            ]}
                        >
                            <TabBarIcon
                                name={focused ? 'folder' : 'folder-outline'}
                                color={focused ? 'white' : itemColor}
                            />
                        </ThemedView>
                    ),
                }}
            />
            <Tabs.Screen
                name="home"
                options={{
                    title: 'خانه',
                    tabBarIcon: ({ color, focused }) => (
                        <ThemedView
                            style={[
                                {
                                    padding: 8,
                                    paddingBottom: 12,
                                    borderRadius: 10,
                                    height: 40,
                                },
                                focused
                                    ? {
                                          backgroundColor: Colors.purple,
                                          bottom: 10,
                                          borderWidth: 1,
                                          borderColor: '#ffffff50',
                                      }
                                    : { backgroundColor: 'transparent' },
                            ]}
                        >
                            <TabBarIcon
                                name={focused ? 'home' : 'home-outline'}
                                color={focused ? 'white' : itemColor}
                            />
                        </ThemedView>
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        paddingVertical: 5,
        paddingBottom: 10,
        height: 60,
        elevation: 10,
        shadowColor: '#222222',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 80,
    },
});
