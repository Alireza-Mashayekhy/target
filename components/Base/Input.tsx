import { StyleSheet, TextInput } from 'react-native';
import { ThemedView } from '../ThemedView';
import { ReactNode, useState } from 'react';
import { Colors } from '@/constants/Colors';

type PropsType = {
    icon?: ReactNode;
    placeholder: string;
    password?: boolean;
};

export const Input = (props: PropsType) => {
    const [isFocus, setFocus] = useState(false);
    return (
        <ThemedView
            style={[
                style.inputBox,
                { borderColor: `${isFocus ? Colors.purple : '#00000015'}` },
            ]}
        >
            <TextInput
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                style={style.input}
                placeholder={props.placeholder}
                secureTextEntry={props.password}
            />
            {props.icon}
        </ThemedView>
    );
};

const style = StyleSheet.create({
    inputBox: {
        borderRadius: 10,
        padding: 10,
        backgroundColor: Colors.blueGrey,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        width: '100%',
    },
    input: {
        width: '90%',
        textAlign: 'right',
        fontSize: 14,
    },
});
