import { NativeRouter } from 'react-router-native';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Homepage ({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <NativeRouter>
        <View style={styles.container}>
          <Image
            source={require('../assets/quiz-logo.png')}
            style={{ width: 400, height: 100, padding: 50, margin: 50 }}
          />
          <Text style={styles.welcome}>Maths Quiz</Text>
          <Text style={styles.paragraph}>
            Test your maths skills. Good luck!
          </Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Questions')}>
            <Text style={styles.buttonText}>Start</Text>
          </Pressable>
        </View>
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf9f6',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 34,
    fontWeight: 'bold',
    backgroundColor: '#76b5f5',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    overflow: 'hidden'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#76b5f5',
    borderRadius: 10,
    padding: 10,
    marginTop: 30
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 26 
  },
  paragraph: {
    fontSize: 22,
    color: '#777',
    textAlign: 'center',
    padding: 10,
    marginTop: 30,
    lineHeight: 25
  }
});