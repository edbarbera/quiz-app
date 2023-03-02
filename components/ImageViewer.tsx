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
    width: 440,
    height: 200,
    resizeMode: 'contain'
  }
})