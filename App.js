import React, { useState } from 'react';
import { Button, Text, TextInput, StyleSheet, View } from 'react-native';


export default function BasicApp() {

  const [value, onChangeText] = useState('Placeholder');

  return (
    <View style={{ ...styles.container }}>

      <Text style={styles.header}>TOOGA Basic App</Text>


      <TextInput style={styles.textinput}
        onChangeText={text => onChangeText(text)}
        value={value} clearTextonFocus='false'
      />

      <Text style={styles.text}> {value} </Text>

    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 100
    },
    textinput: {
      color: 'grey',
      borderColor: 'grey',
      borderWidth: 1,
      width: '100%',
      padding: 5,
      margin: 10
    },
    text: {
      color: 'grey',
    }
  }
);