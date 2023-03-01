import React from 'react';
import { StyleSheet, View } from 'react-native';
import { QuizInput } from 'react-native-quiz-input';

export default class App extends React.Component {
  render() {
    const onChange = ( data: any ) => {
      console.log(data);
      // your code goes here
    };

    return (
      <View style={styles.container}>
        <QuizInput
          wordStructure={ [ true, true, true, false, true, true, true ] }
          onChange={ onChange } 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})