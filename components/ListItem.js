import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ShadowPropTypesIOS } from 'react-native';

const ListItem = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText} onPress={() => deleteItem(item.id)}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#ffecb3',
        borderBottomWidth: 1,
        borderColor: '#fff2cc',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 15,
    }
});

export default ListItem