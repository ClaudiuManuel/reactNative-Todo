import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Header from './header';
import TodoItem from './todoitem'
import { useSelector, useDispatch } from 'react-redux';
import { addToDo } from '../actions/addTodoAction';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      padding: 40,
    },
});

const HomeScreenWithHooks = (props) => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return(
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem itemID={item.key} navigation={props.navigation}></TodoItem>
              )}
            />
            <Button color='coral' title='Add a new todo item' onPress={() => props.navigation.navigate('AddTodo', { submitHandler: (text, description) => 
                                                                                                                    dispatch(addToDo(text,description))})}/>
          </View>
        </View>
      </View>
    );
  }

  export default HomeScreenWithHooks