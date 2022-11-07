import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fullWidth, vh, vw } from '../utils/dimension'
import LinearGradient from 'react-native-linear-gradient'

const HomeBar = () => {
  return (
    <LinearGradient colors={["#ec008c","#fc6767"]} useAngle angle={180} style={styles.container}>
      <Text style={styles.NavTitle}>ChatApp</Text>
      <Text style={{fontSize:16,fontWeight:"400",color:"#FFFFFF",paddingRight:vw(12)}}>Logout</Text>
    </LinearGradient>
  )
}

export default HomeBar

const styles = StyleSheet.create({
    container:{
        width:fullWidth,
        height:vh(65),
        flexDirection:"row",
        alignItems:"center",justifyContent:"space-between"
    },
    NavTitle:{
        color:"#FFFFFF",
        fontSize:20,
        fontWeight:"500",
        paddingLeft:vw(20)
    }
})