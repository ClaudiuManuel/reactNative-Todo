import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Header from './header';
import TodoItem from './todoitem'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      padding: 40,
    },
});

const HomeScreen = ({ navigation }) => {
    const [todos, setTodos] = useState([
      { text: 'buy coffee', description: 'lorem ipsum azelano', key: '1' },
      { text: 'create an app', description: 'lorem ipsum azelano', key: '2' },
      { text: 'play on the switch', description: 'do this and do that', key: '3' }
    ]);
  
    const submitHandler = (text, description) => {
      const newTodo = {
        text: text,
        description: description,
        key: (Math.random()*100).toString()
      };
      
      setTodos(todos.concat(newTodo));
      navigation.goBack();
    };
  
    return(
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} navigation={navigation}></TodoItem>
              )}
            />
            <Button color='coral' title='Add a new todo item' onPress={() => navigation.navigate('AddTodo', { submitHandler: submitHandler})}/>
          </View>
        </View>
      </View>
    );
  }

  export default HomeScreen;