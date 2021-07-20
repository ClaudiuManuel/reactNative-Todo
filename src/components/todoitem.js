import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const TodoItem = ({itemID, navigation}) => {
  const itemToShow = useSelector(state =>
    state.todos.find(element => element.key === itemID),
  );

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          text: itemToShow.text,
          description: itemToShow.description,
        })
      }>
      <Text style={styles.item}>{itemToShow.text}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    borderRadius: 10,
  },
});
