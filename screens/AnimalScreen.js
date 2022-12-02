import React, { useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

var test = "test";
var test2 = 18+24;
var answer = 'this one';



export default function HomeScreen({ navigation }) {
	const questions = [
		{
			questionText: answer,
			
			answerOptions: [
				{ answerText: test, isCorrect: false },
				{ answerText: test2, isCorrect: false },
				{ answerText: answer, isCorrect: true },
				{ answerText: 'Pizza 🍕', isCorrect: false },
			],
		},
		{
			questionText: '🍑',
			answerOptions: [
				{ answerText: 'Apple 🍎', isCorrect: false },
				{ answerText: 'Peach 🍑', isCorrect: true },
				{ answerText: 'Dog 🐶', isCorrect: false },
				{ answerText: 'Carrot 🥕', isCorrect: false },
			],
		},
		{
			questionText: '🍌',
			answerOptions: [
				{ answerText: 'Banana 🍌', isCorrect: true },
				{ answerText: 'Noodles 🍜', isCorrect: false },
				{ answerText: 'Grapes 🍇', isCorrect: false },
				{ answerText: 'Blood 🩸', isCorrect: false },
			],
		},
		{
			questionText: '🍓',
			answerOptions: [
				{ answerText: 'Cherry 🍒', isCorrect: false },
				{ answerText: 'Apple 🍎', isCorrect: false },
				{ answerText: 'Bug 🐛', isCorrect: false },
				{ answerText: 'Strawberry 🍓', isCorrect: true },
			],
		},
	];
	const [currentQuestion, setCurentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect === true){
			// alert("RIGHT ANSWER!");
			setScore(score +1);
		}
		else{
			// alert("WRONG!")
		}


		const nextQuestion = currentQuestion + 1;
		if(nextQuestion <questions.length){
					setCurentQuestion(nextQuestion);

		}
		else{
			setShowScore(true);
		}
	};
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {}
        {showScore ? (
			<View>			
			<Text>You scored {score} out of {questions.length}</Text>
			<Button title="Try Again?" onPress={() => navigation.navigate('Categories')} />
			<Button title="Home" onPress={() => navigation.navigate('Home')} />
			</View>
			
        ) : (
            <>
                <Text>
                    <Text>What is this? {currentQuestion+1} / {questions.length}{"\n"}</Text>
                    <Text>{questions[currentQuestion].questionText}</Text>
                </Text>
                <Text>
                     {questions[currentQuestion].answerOptions.map((answerOption)=>
                     <Text key={answerOption.answerText} onPress={()=>handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}{"\n"}</Text>)}
                </Text>
            </>
        )}
    </View>
	
);

}