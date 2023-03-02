import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import ImageViewer from './ImageViewer';

import { questions } from './Questions'

export default function Quiz () {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [questionList, setQuestionList] = useState<number[]>([]);
  const [answer, setAnswer] = useState(0);

  const generateQuestionList = (): number[] => {
    let nums = new Set<number>();
    while (nums.size < 5) {
      nums.add(Math.floor(Math.random() * (5)))
    }
    return [...nums];
  }

  const answerSubmitted = (isCorrect: boolean) => {
    if (isCorrect) {
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

  const onChangeText = (text: string) => {
    const numericRegex = /^([0-9]{1,2})+$/;
    if (numericRegex.test(text)) {
      console.log(Number(text));
      setAnswer(Number(text));
    } else {
      alert('Only numbers allowed');
    }
  };

  useEffect(() => {
    setQuestionList(generateQuestionList());
  }, [])

  // Display question with input field and submit button
  return (
    <View style={styles.quizContainer}>
      <Text style={{ fontSize: 26, fontWeight: "bold", backgroundColor: "#3498db", color: "white", padding: 10, borderRadius: 18 }}>
        Counting
      </Text>
      {showResults ? (
        <View style={styles.results}>
          <Text style={{ fontSize: 18, fontWeight: "bold", backgroundColor: "#3498db", color: "white", padding: 10 }}>
            Results
          </Text>
          <Text>
            {score} out of {questions.length} correct - ({(score/questions.length)* 100}%)
          </Text>
          <Pressable style={styles.restartButton} onPress={() => restartGame()}>
            <Text style={styles.restartButtonText}>Restart</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.questions}>
          <Text style={{ fontSize: 18, fontWeight: "bold", backgroundColor: "#3498db", color: "white", padding: 10, margin: 20, borderRadius: 18 }}>
            Question {currentQuestion+1}
          </Text>
          <Text style={{fontSize: 12, fontWeight: "bold", backgroundColor: "#3498db", color: "white", padding: 10, margin: 20, borderRadius: 18 }}>
            Count the number of coloured circles and submit your answer below!
          </Text>
          <ImageViewer
            questionNumber={questionList[currentQuestion]}
          />
          <TextInput
            placeholder='Count the circles'
            keyboardType={'numeric'}
            onChangeText={(text) => onChangeText(text)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  quizContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0
  },
  questions: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  results: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  restartButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#3498db",
    borderRadius: 10,
    padding: 10
  },
  restartButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16 
  },
})