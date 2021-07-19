import React from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const TodoItem = ({ item, navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', { text: item.text, description: item.description})}>
          <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  }
});