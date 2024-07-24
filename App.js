import React, {useState} from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const [myName, setMynamer] = useState("Iwaju")

  const InhandlerChanges =() =>{
    setMynamer("Asiwaju")
  }

  return (
    <View style={styles.container}>
         <Text style={styles.text}>Your new name is {myName}</Text>
         <Button title='update data' onPress={InhandlerChanges}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
   fontSize : 20,
   fontStyle: 'normal'
  }
});
