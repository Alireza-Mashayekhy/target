import { Dimensions, StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';

interface PropsType {
    color: string;
    title: string;
    content: string;
    date: string;
}
const { width } = Dimensions.get('window');

export const NoteBookCard = (props: PropsType) => {
    return (
        <View style={style.card}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    gap: 5,
                }}
            >
                <ThemedText weight="bold">{props.title}</ThemedText>
                <View
                    style={[style.colorBox, { backgroundColor: props.color }]}
                ></View>
            </View>
            <ThemedText
                size="sm"
                style={{ textAlign: 'justify', marginTop: 5 }}
            >
                {props.content}
            </ThemedText>
            <ThemedText size="xs">
                {new Date(props.date).toLocaleDateString('Fa-Ir', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                })}
            </ThemedText>
        </View>
    );
};

const style = StyleSheet.create({
    card: {
        width: width / 2 - 25,
        backgroundColor: 'white',
        elevation: 10,
        shadowColor: '#222222',
        shadowOffset: { width: 0, height: 4 },
        padding: 9,
        borderRadius: 10,
    },
    colorBox: {
        width: 16,
        height: 16,
        borderRadius: 5,
    },
});
