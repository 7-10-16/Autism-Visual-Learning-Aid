import React, { useState } from 'react';
import { Button, View, Text, Image } from 'react-native';
import * as Speech from 'expo-speech';
import {TTSText, Say} from "../Components/TTS.js";
import { TouchableOpacity } from 'react-native-gesture-handler';




var test = "test";
var test2 = "test 2";
var answer = 'this one';



export default function HomeScreen({ navigation }) {
	const questions = [
		{
			questionText: answer,
			
			answerOptions: [
				{ answerText: test, isCorrect: false },
				{ answerText: test2, isCorrect: false },
				{ answerText: answer, isCorrect: true },
				{ answerText: 'Pizza', isCorrect: false },
			],
		},
		{
			questionText: '🍑',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: false },
				{ answerText: 'Peach', isCorrect: true },
				{ answerText: 'Dog', isCorrect: false },
				{ answerText: 'Carrot', isCorrect: false },
			],
		},
		{
			questionText: '🍌',
			answerOptions: [
				{ answerText: 'Banana', isCorrect: true },
				{ answerText: 'Noodles', isCorrect: false },
				{ answerText: 'Grapes', isCorrect: false },
				{ answerText: 'Blood', isCorrect: false },
			],
		},
		{
			questionText: '🍓',
			answerOptions: [
				{ answerText: 'Cherry', isCorrect: false },
				{ answerText: 'Apple', isCorrect: false },
				{ answerText: 'Bug', isCorrect: false },
				{ answerText: 'Strawberry', isCorrect: true },
			],
		},
	];
	const [currentQuestion, setCurentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect === true){
			alert("RIGHT ANSWER!");
			setScore(score +1);
		}
		else{
			alert("WRONG!")
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
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#ff6361'}}>
        {}
					{showScore ? (
					<View backgroundColor="blue">
						<Text>You scored {score} out of {questions.length}</Text>
						<Button title="Try Again?" onPress={() => navigation.navigate('Categories')} />
						<Button title="Home" onPress={() => navigation.navigate('Home')} />
					</View>
        ) : (
					<View style={{ flex: 1, width: '90%'}} >
						<View style={{ flex: 0.6, width: '100%', alignItems: 'center', justifyContent: 'center', borderBottomColor:'lightgrey', borderBottomWidth:1.5}} >
							<View>
								<Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold', backgroundColor:'#46C8C3', alignSelf:'center', borderRadius:10, overflow:'hidden', paddingRight:10, paddingLeft:10, width:'50%', height:'15%'}} >{currentQuestion+1} / {questions.length}{"\n"}</Text>
								<Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold'}} >What is this?</Text>
								<View style={{alignItems: 'center', justifyContent: 'center'}}>
									<Image style={{width: 250, height: 250}} source={require("../assets/splash.png")} />
								</View>
							</View>
						</View>
						<View style={{ flex: 0.4, width: '100%', alignItems: 'center', justifyContent: 'center'}} >
							<Text>
								<View style={{flexDirection: 'column'}}>
									{questions[currentQuestion].answerOptions.map((answerOption)=>
										<>
											<View style={{flexDirection: 'row', justifyContent: 'space-between', margin:26}}>
												<TTSText style={{ color: 'black', fontSize: 20, fontWeight: 'bold'}} text={answerOption.answerText} phrase={answerOption.answerText}/>
												<TouchableOpacity style={{backgroundColor:'#4BC846', width:100, alignItems:'center', alignContent:'center', flex:1, borderRadius:10}} onPress={()=>{Speech.stop(); Speech.speak(answerOption.answerText); handleAnswerButtonClick(answerOption.isCorrect);}}>
													<Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', textAlign:'center'}}>Select{"\n"}</Text>
												</TouchableOpacity>
											</View>
										</>
										)}
								</View>
							</Text>
						</View>
					</View>
        )}
    	</View>
	);
}