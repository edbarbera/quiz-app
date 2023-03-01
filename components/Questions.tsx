import { StyleSheet, View } from 'react-native';
import { QuizInput } from 'react-native-quiz-input';

export default function Questions () {
  const onChange = ( data: any ) => {
    console.log(data);
    // your code goes here
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.questionContainer}>
        <QuizInput
          wordStructure={ [ true, true, true, false, true, true, true ] }
          onChange={ onChange } 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})