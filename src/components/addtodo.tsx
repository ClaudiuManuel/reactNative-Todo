import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../types/rootStackParams';
import {useSelector, useDispatch} from 'react-redux';
import {addToDo} from '../reducers/todoSlice';
import {Todo} from '../types/todo';

const styles = StyleSheet.create({
  textField: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: 'coral',
    width: 300,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
});

type NavProp = StackNavigationProp<RootStackParams, 'AddTodo'>;
type Prop = {
  navigation: NavProp;
};

const AddToDo = ({navigation}: Prop) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const changeHandler = (val: string) => {
    setText(val);
  };

  const changeDescrHandler = (val: string) => {
    setDescription(val);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textField}
        placeholder="add a new todo item"
        onChangeText={changeHandler}
      />
      <TextInput
        style={styles.textField}
        placeholder="add a description"
        onChangeText={changeDescrHandler}
      />
      <Button
        onPress={() => {
          const newItem = {
            text: text,
            description: description,
            key: (Math.random()*100).toString()
          }
          dispatch(addToDo(newItem));
          return navigation.goBack();
        }}
        title="Add"
        color="coral"
      />
    </View>
  );
};

export default AddToDo;
