import React, {useState} from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const [myName, setMynamer] = useState("Iwaju")
  const [Items, setItems] =useState([
    {key: 1, item: 'Items 1'},
    {key: 2, item: 'Items 2'},
    {key: 3, item: 'Items 3'},
    {key: 4, item: 'Items 4'},
    {key: 5, item: 'Items 5'},
    {key: 6, item: 'Items 6'},
    {key: 7, item: 'Items 7'},
    {key: 8, item: 'Items 8'},
    {key: 9, item: 'Items 9'},
  ]);

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
