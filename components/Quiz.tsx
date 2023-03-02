import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

import ImageViewer from './ImageViewer';

import { questions } from './Questions'

export default function Quiz () {
  const [answers] = useState([0,1,2,3,4,5,6,7,8,9,10])
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
      <Text style={{ fontSize: 26, fontWeight: "bold", backgroundColor: "#3498db", color: "white", padding: 10, borderRadius: 18 }}>
        Subitising
      </Text>
      {showResults ? (
        <View style={styles.results}>
          <Text style={{ fontSize: 18, fontWeight: "bold", backgroundColor: "#3498db", color: "white", padding: 10, borderRadius: 18, margin: 20 }}>
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
          <FlatList
            horizontal
            data={answers}
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  style={styles.newNumberInput}
                  onPress={() => answerSubmitted(item)}
                >
                  <Text style={styles.newNumberButton}>{item}</Text>    
                </Pressable>
              )
            }}
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
  newNumberInput: {
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  newNumberButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16 
  }
})