import React, { useState } from 'react';
import { Button, View, Text, Image } from 'react-native';
import * as Speech from 'expo-speech';
import {TTSText, Say} from "../Components/TTS.js";
import { TouchableOpacity } from 'react-native-gesture-handler';

//debugging array
const Animals = ["Apple", "Banana", "Coconut", "Grapes", "Pineapple",
"Lemon", "Avacado", "Blueberries", "Oranges", "Mango",
"Strawberries", "Cherries", "Olives", "Watermelon", "Kiwi",
"Peach", "Guava", "Grapefruit", "Lime", "Pumpkin"];



export default function HomeScreen({ navigation }) {
	const questions = [
		{
			questionText: Animals[0],
			
			answerOptions: [
				{ answerText: Animals[0], isCorrect: true },
				{ answerText: Animals[1], isCorrect: false },
				{ answerText: Animals[2], isCorrect: false },
				{ answerText: Animals[3], isCorrect: false },
			],
		},
		{
			questionText: Animals[4],
			answerOptions: [
				{ answerText: Animals[4], isCorrect: true },
				{ answerText: Animals[5], isCorrect: false },
				{ answerText: Animals[6], isCorrect: false },
				{ answerText: Animals[7], isCorrect: false },
			],
		},
		{
			questionText: Animals[8],
			answerOptions: [
				{ answerText: Animals[8], isCorrect: true },
				{ answerText: Animals[9], isCorrect: false },
				{ answerText: Animals[10], isCorrect: false },
				{ answerText: Animals[11], isCorrect: false },
			],
		},
		{
			questionText: Animals[12],
			answerOptions: [
				{ answerText: Animals[12], isCorrect: true },
				{ answerText: Animals[13], isCorrect: false },
				{ answerText: Animals[14], isCorrect: false },
				{ answerText: Animals[15], isCorrect: false },
			],
			
		},
		{
			questionText: Animals[16],
			answerOptions: [
				{ answerText: Animals[16], isCorrect: false },
				{ answerText: Animals[17], isCorrect: false },
				{ answerText: Animals[18], isCorrect: true },
				{ answerText: Animals[19], isCorrect: false },
			],		
		},
	];
	const [currentQuestion, setCurentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect === true){

			setScore(score +1);
		}
		else{

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
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#58508d'}}>
        {}
					{showScore ? (
						<View style={{backgroundColor: 'white', width:'80%',height:'30%', borderRadius: 10, alignItems:'center'}}>
					<Text style={{fontWeight:'bold', textAlign:'center', fontSize: '40', color: 'gold'}}>Congratulations!</Text>
					<Text style={{fontWeight:'bold', textAlign:'center', fontSize: '30', color:'black', marginBottom:10}}>You scored {score} out of {questions.length}</Text>
					
					<TouchableOpacity style={{backgroundColor: 'lightblue', width: '50%', borderRadius: 10, marginBottom:15}} onPress={() => navigation.navigate('Categories')}>
					<Button color={'white'} title="Try Again?"/>
					</TouchableOpacity>
				
					<TouchableOpacity style={{backgroundColor: 'lightgreen', width: '50%', borderRadius: 10}} onPress={() => navigation.navigate('Home')}>
					<Button color={'white'} title="Home" />
					</TouchableOpacity>
					</View>
        ) : (
					<View style={{ flex: 1, width: '90%'}} >
						<View style={{ flex: 0.6, width: '100%', alignItems: 'center', justifyContent: 'center', borderBottomColor:'white', borderBottomWidth:1.5,marginBottom: 10}} >
							<View>
								<Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold', backgroundColor:'#46C8C3', alignSelf:'center', borderRadius:10, overflow:'hidden', paddingRight:10, paddingLeft:10, width:'50%', height:'15%'}} >{currentQuestion+1} / {questions.length}{"\n"}</Text>
								<Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold', textAlign: 'center'}} >What is this?</Text>
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
											<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:40}}>
												<TTSText style={{ color: 'white', fontSize: 20, fontWeight: 'bold'}} text={answerOption.answerText} phrase={answerOption.answerText}/>
												<TouchableOpacity style={{backgroundColor:'white', width:100, alignItems:'center', alignContent:'center', flex:1, borderRadius:10, marginLeft: 10}} onPress={()=>{Speech.stop(); Speech.speak(answerOption.answerText); handleAnswerButtonClick(answerOption.isCorrect);}}>
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
