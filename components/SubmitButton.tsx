import { Pressable, StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function SubmitButton({ onPress }: { onPress: any }) {
  return (
    <Pressable style={styles.submitButton} onPress={onPress}>
      <Entypo name="check" size={24} color="white" />
      <Text style={styles.submitButtonLabel}>Submit</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: '#098f23',
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitButtonLabel: {
    color: '#fff',
    marginTop: 12
  }
})
