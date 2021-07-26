import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    textField: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: 'coral',
        width: 300
    }, 
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30
    },
});

type Prop = {
    route: {params: {text: string, description: string}}
}

const Details = ({ route }: Prop) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textField}>{route.params.text}</Text>
            <Text style={styles.textField}>{route.params.description}</Text>
        </View>
    );
};

export default Details;