import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Ike's task manager</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#ffc312',
        borderBottomColor: '#ffd966',
        borderBottomWidth: 4
    },
    text: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'fantasy'

    }
})

export default Header