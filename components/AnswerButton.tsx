import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text } from 'react-native';

export default function AnswerButton({ onPress }: { onPress: (answer: number) => void }) {
  const [answers] = useState([0,1,2,3,4,5,6,7,8,9,10]);

  return (
    <FlatList
      horizontal
      scrollEnabled={false}
      data={answers}
      renderItem={({ item }) => {
        return (
          <Pressable style={styles.numberInput} onPress={() => onPress(item)}>
            <Text style={styles.numberButtonLabel}>{item}</Text>    
          </Pressable>
        )
      }}
    />
  );
}

const styles = StyleSheet.create({
  numberInput: {
    flexShrink: 1,
    maxWidth: '100%',
    height: 52,
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 9,
    paddingTop: 7,
    margin: 2,
    alignItems: 'center'
  },
  numberButtonLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28
  }
})