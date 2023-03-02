import { StyleSheet, Image } from 'react-native';
import { questions } from './Questions';

export default function ImageViewer({ questionNumber }: { questionNumber: number }) {
  const questionImage = questions[questionNumber]?.image;

  return (
    <Image source={questionImage} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 150,
    resizeMode: 'contain'
  }
})