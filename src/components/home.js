import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import {addToDo} from '../actions/addTodoAction';
import TodoItem from './todoitem';
import {useSelector, useDispatch} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 40,
    height: 550,
  },
  titleContainer: {
    marginTop: 60,
    flexDirection: 'row',
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: Colors.black,
    paddingHorizontal: 80,
  },
  titlePart2: {
    fontWeight: '300',
    color: 'coral',
  },
  divider: {
    backgroundColor: 'coral',
    height: 1,
    flex: 1,
    alignSelf: 'center',
  },
  addComponent: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 40,
  },
  addButton: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: 'coral',
    borderRadius: 4,
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addItemText: {
    color: 'coral',
    marginTop: 0,
    fontSize: 18,
  },
});

const HomeScreen = props => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.divider} />
        <Text style={styles.title}>
          Todo<Text style={styles.titlePart2}>List</Text>
        </Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.content}>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <TodoItem
              itemID={item.key}
              navigation={props.navigation}></TodoItem>
          )}
        />
      </View>
      <View style={styles.addComponent}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            props.navigation.navigate('AddTodo', {
              submitHandler: (text, description) =>
                dispatch(addToDo(text, description)),
            })
          }>
          <FontAwesomeIcon icon={faPlus} color={'coral'} size={22} />
        </TouchableOpacity>
        <Text style={styles.addItemText}>Add item</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
