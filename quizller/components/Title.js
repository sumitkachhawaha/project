import React from "react";
import {StyleSheet , Text , View} from "react-native"
 const Title = ()=> {
    return(
        <View style={style.container}>
            <Text style={style.Title}>Quizzler</Text>
        </View>
    )
 }
  export default Title
  const style = StyleSheet.create({
    Title:{
        fontSize:36,
        fontWeight:"600"
    },
     container:{
        paddingVertical: 16,
        justifyContent: "center",
        alignItems:"center"
     }
  })  