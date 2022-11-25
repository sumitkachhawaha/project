import React from "react";
import {Image, StyleSheet , Text , TouchableOpacity, View} from "react-native"
import Title from "../components/Title";
 const Home = ({navigation})=> {
    return(
        <View style ={style.container}>
            <Title/>
            <View style ={style.bannerContainer}>
            <Image source={{uri:"https://www.pngmart.com/files/19/Quiz-PNG-Clipart.png"}}
            style={style.banner}
            resizeMode="contain" />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={style.button}>
                <Text style={style.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )  
 }
  export default Home
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
        height:"100%"
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
     }
  }) 