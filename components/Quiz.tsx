import { useEffect, useState } from 'react';
import { NativeRouter } from 'react-router-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import ImageViewer from './ImageViewer';
import AnswerButton from './AnswerButton';
import Page from './Page';

import { questions } from './Questions'

export default function Quiz () {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [questionList, setQuestionList] = useState<number[]>([]);

  const generateQuestionList = (): number[] => {
    let nums = new Set<number>();
    while (nums.size < 5) {
      nums.add(Math.floor(Math.random() * (5)))
    }
    return [...nums];
  }

  const answerSubmitted = (answer: number) => {
    console.log('Submitted Answer: ', answer,);

    const questionIndex = questionList[currentQuestion];

    console.log('Mark Scheme Answer ', questions[questionIndex].answer);

    if (answer == questions[questionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  useEffect(() => {
    setQuestionList(generateQuestionList());
  }, [])

  // Display question with input field and submit button
  return (
    <View style={styles.quizContainer}>
      <NativeRouter>
        <Text style={styles.title}>
          Subitising
        </Text>
        {showResults ? (
          <View style={styles.container}>
            <Page 
              title={"Results"}
              text={`${score} out of ${questions.length} correct - (${(score/questions.length)*100}%)`}
            />
            <Pressable style={styles.restartButton} onPress={() => restartGame()}>
              <Text style={styles.restartButtonText}>Restart</Text>
            </Pressable>
          </View>
        ) : (
          <View style={styles.container}>
            <Page 
              title={`Question - ${currentQuestion+1}`}
              text={"Count the number of coloured circles and click on the correct answer!"}
            />
            <ImageViewer
              questionNumber={questionList[currentQuestion]}
            />
            <AnswerButton onPress={answerSubmitted} />
          </View>
        )}
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  quizContainer: {
    backgroundColor: '#faf9f6',
    alignItems: 'center'
  },
  container:{
    alignItems: 'center'
  },
  restartButton: {
    alignItems: 'center',
    backgroundColor: "#76b5f5",
    borderRadius: 10,
    padding: 10,
    marginTop: 20
  },
  restartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16 
  },
  title: { 
    fontSize: 26,
    fontWeight: 'bold',
    backgroundColor: '#ede8ba',
    color: 'black',
    padding: 15,
    borderRadius: 18,
    marginTop: 15,
    overflow: 'hidden'
  }
})
