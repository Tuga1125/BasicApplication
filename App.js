import React, { useState } from 'react';
import { Button, Text, TextInput, StyleSheet, View } from 'react-native';


export default function BasicApp() {

  const [value, onChangeText] = useState('Placeholder');
  const [backgroundColor, setBackgroundColor] = useState('white');

  const isLightBackground = backgroundColor === 'white';

  const handleBackgroundChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <View style={{ ...styles.container, backgroundColor }}>

      <Text style={styles.header}>Tooga Basic App</Text>

      <TextInput style={styles.textinput}
        onChangeText={text => onChangeText(text)}
        value={value} clearTextonFocus='false'
      />

      <Button title='Clear' onPress={() => onChangeText('')} />

      <Button title={isLightBackground ? 'Change Background' : 'Change Background'} onPress={() => handleBackgroundChange(isLightBackground ? 'black' : 'white')} />

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
