import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {deleteToDo} from '../actions/deleteTodoAction';
import {Todo} from '../types/todo';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../types/rootStackParams';
import {RootState} from '../store';

type NavProp = StackNavigationProp<RootStackParams, 'Home'>;

type Prop = {
  itemID: string;
  navigation: NavProp;
};

const TodoItem = ({itemID, navigation}: Prop) => {
  const itemToShow: Todo = useSelector((state: RootState) =>
    state.todos.find(element => element.key === itemID),
  )!;

  const dispatch = useDispatch();

  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            text: itemToShow.text,
            description: itemToShow.description,
          })
        }>
        <View style={styles.inner}>
          <Text>{itemToShow.text}</Text>
          <TouchableOpacity onPress={() => dispatch(deleteToDo(itemID))}>
            <FontAwesomeIcon icon={faTrash} color={'coral'} size={19} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 1,
    // borderRadius: 10,
  },
  inner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
