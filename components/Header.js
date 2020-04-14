import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
}

Header.defaultProps = {
    title: "Ike's task manager"
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        padding: 15,
        backgroundColor: '#ffc312',
        borderBottomColor: '#ffd966',
        borderBottomWidth: 4
    },
    text: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'fantasy',
        paddingTop: 60

    }
})

export default Header