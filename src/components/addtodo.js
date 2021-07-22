import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

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

const AddToDo = ({navigation, route}) => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const {submitHandler} = route.params;

  const changeHandler = val => {
    setText(val);
  };

  const changeDescrHandler = val => {
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
          submitHandler(text, description);
          return navigation.goBack();
        }}
        title="Add"
        color="coral"
      />
    </View>
  );
};

export default AddToDo;
