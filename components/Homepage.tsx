import { BrowserRouter } from 'react-router-dom';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function Homepage ({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <BrowserRouter>
        <View style={styles.container}>
          <Image
            source={require('../assets/logo.png')}
            style={{ width: 200, height: 85 }}
          />
          <Text style={styles.welcome}>TEST QUIZ APP</Text>
          <Text style={styles.paragraph}>
            This is a quiz that has really advanced questions to answer. Good luck!
          </Text>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Questions')}>
            <Text style={styles.buttonText}>Start Quiz</Text>
          </Pressable>
        </View>
        
      </BrowserRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: "#3498db",
    color: "white",
    padding: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#3498db",
    borderRadius: 10,
    padding: 10
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16 
  },
  paragraph: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    padding: 10,
    marginTop: 15,
    lineHeight: 25
  }
});