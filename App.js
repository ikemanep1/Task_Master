import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { uuid } from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'complete this task' },
    { id: uuid(), text: 'complete this task' },
    { id: uuid(), text: 'complete this task' },
    { id: uuid(), text: 'complete this task' },
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Task cannot be blank!', { text: 'Okay!' });
    } else {
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App