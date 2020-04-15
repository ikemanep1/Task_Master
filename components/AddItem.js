import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

const AddItem = ({ addItem }) => {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);
    return (
        <View>
            <TextInput
                placeholder="Add Task..."
                style={styles.input}
                onChangeText={onChange}
                value={text} />
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn}
                    onPress={() => {
                        addItem(text);
                        setText('');
                    }}>
                    <Text style={styles.btnText}>Add!</Text>
                </TouchableOpacity>
            </View >
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 60,
        padding: 8,
        margin: 5,
    },
    btn: {
        backgroundColor: '#ffc312',
        borderColor: '#ffd966',
        borderWidth: 4,
        padding: 20,
        margin: 5,
        borderRadius: 25,
        width: 100,
    },
    btnText: {
        color: '#fff4cf',
        fontSize: 20,
        fontFamily: 'fantasy',
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
    },
});

export default AddItem