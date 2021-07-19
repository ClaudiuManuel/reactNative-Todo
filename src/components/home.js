import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { addToDo } from '../actions/addTodoAction';
import Header from './header';
import TodoItem from './todoitem'
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      padding: 40,
    },
});

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToDo: (text, description) => dispatch(addToDo(text,description))
  }
}

const HomeScreen = (props) => {
  
    return(
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={props.todos}
              renderItem={({ item }) => (
                <TodoItem item={item} navigation={props.navigation}></TodoItem>
              )}
            />
            <Button color='coral' title='Add a new todo item' onPress={() => props.navigation.navigate('AddTodo', { submitHandler: props.addToDo})}/>
          </View>
        </View>
      </View>
    );
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(HomeScreen);