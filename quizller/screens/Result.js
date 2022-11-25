import React from "react";
import {Image, StyleSheet , Text , TouchableOpacity, View} from "react-native"
 const Result = ({navigation, route})=> {
    const {score }= route.params

    return(
        <View style ={style.container}>
            <Text style ={style.Result}>Result</Text> 
            <Text style ={style.score}>{score}</Text>
            <View style ={style.bannerContainer}>
                <Image source={{uri:"https://img.freepik.com/free-vector/balanced-business-scorecard-coherent-project-harmonious-company-development-optimized-workflow-skillful-business-management-expert-vector-isolated-concept-metaphor-illustration_335657-2821.jpg?w=740&t=st=1669024302~exp=1669024902~hmac=0f5bc9c9a10eeef04369575e0c6d627f703defbfa4bf8c6222703a1e1967f06c"}}
                style={style.banner} 
                resizeMode="contain"/>
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("Home")} style={style.button}>
                    <Text style={style.buttonText}> Go To Home</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
 }
  export default Result
  const style = StyleSheet.create({
    banner:{
        height:300,
        width:300,
    },
     bannerContainer:{
        justifyContent: "center",
        alignItems:"center",
        flex:1
     },
     container:{
        paddingTop:40,
        paddingVertical:20,
        height:"100%",
        justifyContent: "center",
        alignItems:"center"
     },
     button:{
        width:"100%",
        backgroundColor:"#184E77",
        padding:16,
        borderRadius:16,
        alignItems:"center",
        marginBottom:30,
     },
     buttonText:{
        fontSize:24,
        fontWeight:"600",
        color:"white"
     },
     Result:{
        fontSize:36,
        fontWeight:"600",
        
    },
    score:{
        fontSize:25,
        fontWeight:"800"
    }
  })