import { Image, StyleSheet } from 'react-native';
import PagesView from '@/components/PagesView';
import DailyTarget from '@/components/Home/DailyTarget';
import Level from '@/components/Home/Level';
import { ThemedView } from '@/components/ThemedView';
import HomeCard from '@/components/Home/Card';

export default function HomeScreen() {
    return (
        <PagesView>
            <DailyTarget />
            <Level />
            <Image
                source={require('@/assets/images/home/banner_1.png')}
                style={{ width: '100%', height: 135, borderRadius: 10 }}
            />
            <Image
                source={require('@/assets/images/home/banner_2.png')}
                style={{ width: '100%', height: 135, borderRadius: 10 }}
            />
            <ThemedView style={{ flexDirection: 'row', gap: 25 }}>
                <HomeCard
                    title="مدیتیشن"
                    image={require('@/assets/images/home/meditation.png')}
                    link="/meditation"
                />
                <HomeCard
                    title="دفتر یادداشت"
                    image={require('@/assets/images/home/noteBook.png')}
                    link="/notebook"
                />
            </ThemedView>
        </PagesView>
    );
}

const styles = StyleSheet.create({});
