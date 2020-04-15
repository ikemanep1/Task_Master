import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <Image style={styles.img} source={require('../assets/butter.png')} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        padding: 15,
        backgroundColor: '#ffc312',
        borderBottomColor: '#ffd966',
        borderBottomWidth: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'fantasy',
        paddingTop: 60

    },
    img: {
        height: 200,
        width: 200,
    }
})

export default Header