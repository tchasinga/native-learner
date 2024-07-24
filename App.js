import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
         <Text style={styles.text}>Please see my video</Text>
         <Button  title='Go there now' onPress={()=>{Linking.openURL('https://www.youtube.com/watch?v=kG68cdAC_Do&list=RDkG68cdAC_Do&start_radio=1')}}>
         </Button>
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
