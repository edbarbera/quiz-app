import { StyleSheet, Text, View } from 'react-native';

export default function Page({ title, text }: { title: string, text: string }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.questionLabel}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22, 
    fontWeight: 'bold', 
    backgroundColor: '#76b5f5', 
    color: 'white', 
    padding: 10, 
    margin: 20,
    borderRadius: 18,
    textAlign: 'center',
    overflow: 'hidden'
  },
  questionLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
  }
})
