import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const shuffleArray = (array)=>{
    for (let i= array.length - 1; i>0; i--){
        const j =Math.floor(Math.random()*(i+1));
        [array[i],array[j] = [array[j]],array[i]];
    }
}

const Quiz = ({ navigation }) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0)
    const [options,setOptions] = useState([])
    const [score ,setScore] = useState(0)
    const getQuiz = async () => {
        const url = "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data.results[0]);
        setQuestions(data.results);
       setOptions(generateOptionsAndShuffle(data.results[0]))
    };
    useEffect(() => {
        getQuiz()
    }, [])
    const handleNextPress =()=>{
        setQues(ques+1)
        setOptions(generateOptionsAndShuffle(questions[ques+1]))
    }
    const generateOptionsAndShuffle=(_question)=>{
        const options =[..._question.incorrect_answers]
        options.push(_question.correct_answer)
        // console.log(options,"Before")
        shuffleArray(options)
        // console.log(options,"Afer")
        return options
    }
    const handlSelectedOption=(_option)=>{
        if(_option===questions[ques].correct_answer){
            setScore(score+10)
        }
        if(ques!==9)
        {
            setScore(score+1)
            setOptions(generateOptionsAndShuffle(questions[ques+1]))
        }
    }
    const handleShowResult=()=>{
        navigation.navigate("Result",{
            score:score
        })
    }
    return (
        <View style={style.Container}>
            {questions &&(
            <View style={style.parent}>
              <View style={style.top} onPress={()=>handlSelectedOption(options[0])}>
                <Text style={style.question}>Q.{decodeURIComponent(questions[ques].question)}</Text>
              </View>
              <View style={style.options}>
                <TouchableOpacity style={style.optionButton} onPress={()=>handlSelectedOption(options[0])}>
                    <Text style={style.option}>{decodeURIComponent(options[0])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.optionButton} onPress={()=>handlSelectedOption(options[1])}>
                    <Text style={style.option}>{decodeURIComponent(options[1])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.optionButton} onPress={()=>handlSelectedOption(options[2])}>
                    <Text style={style.option}>{decodeURIComponent(options[2])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.optionButton} onPress={()=>handlSelectedOption(options[3])}>
                    <Text style={style.option}>{decodeURIComponent(options[3])}</Text>
                </TouchableOpacity>
                </View>
                <View style={style.bottom}>
                {/* <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>PREV</Text>
                </TouchableOpacity> */}
                {ques!==9 && <TouchableOpacity style={style.button} onPress ={handleNextPress}>
                    <Text style={style.buttonText}>SKIP</Text>
                </TouchableOpacity>}
                { ques === 9 && <TouchableOpacity style={style.button} onPress={handleShowResult} >
                    <Text style={style.buttonText}>SHOW RESULTS</Text>
                </TouchableOpacity>}
                
              </View>
            </View>
        )}
        </View>
    )
}
export default Quiz
const style = StyleSheet.create({
    Container: {
        padding: 12,
        height: "100%"
    },
    top: {
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    button: {
        backgroundColor: "#184E77",
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: "center",
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "600",
        color: "white"
    },
    question: {
        fontSize: 28
    },
    option: {
        fontSize: 18,
        fontWeight: "500",
        color: "white"
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: "#34A0A4",
        paddingHorizontal: 12,
        borderRadius: 12,

    },
    parent:{
        height:'100%'
    }

})