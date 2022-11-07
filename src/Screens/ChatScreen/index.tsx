import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';


const Chat = (props:any) => {
    // const usersCollection = firestore().collection("");
    
    // console.log(usersCollection);
    const {uid}=props.route.params;
    console.log(uid);
    // React.useEffect(()=>{
    //     firestore()
    //     .collection("Users")
    //     .add({
    //         Name:"Roger",
    //         Age:19
    //     })
    //     .then(()=>{console.log("data added");})
    //     .catch((error)=>{console.log(error);})
    // },[uid])

    // React.useEffect(()=>{
    //     firestore()
    //     .collection("Users")
    //     .get()
    //     .then((querySnapshot)=>{console.log(querySnapshot)})
    //     .catch((error)=>{console.log(error);
    //     })
    // },[])

  return (
    <View>
      <Text>index</Text>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})