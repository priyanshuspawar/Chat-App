import { StyleSheet, Text, View,Pressable } from 'react-native'
import React from 'react'
import InputField from "../../Components/InputField"
import { fullWidth, vh,vw } from '../../utils/dimension'
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = (props:any) => {
    const [mail, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [CheckValidEmail, setCheckValidEmail] = React.useState(false);
    const [CheckValidpass, setCheckValidpass] = React.useState(false);
    const firstTextInput = React.useRef<any>(null);
    const secondTextInput = React.useRef<any>(null);
    
    
    
    const Signin=()=>{
        auth()
        .signInWithEmailAndPassword(mail,password)
        .then(()=>{
          console.log("working");
        //   dispatch(EmailAction(mail));
        //   dispatch(PassAction(password));
          props.navigation.replace('chat');
        })
        .catch((error)=>{
          console.log(error.code);
        })
      }

    const ValidEmail = (text: string) => {
        const re = /\S+@\S+\.\S+/;
        const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    
        setEmail(text);
        if (re.test(text) || regex.test(text)) {
          setCheckValidEmail(false);
          // console.log('regex', text);
        } else {
          setCheckValidEmail(true);
          // console.log('withoutregex', text);
        }
      };
    
      const ValidPassword = (text: string) => {
        setPassword(text);
        if (text.length >= 8) {
          setCheckValidpass(false);
        } else {
          setCheckValidpass(true);
        }
      };

  return (
    <View style={styles.container}>
        <LinearGradient colors={["#ec008c","#fc6767"]} useAngle style={styles.topgrad}>
            <Text style={{fontSize:40,fontWeight:"bold",textAlign:"center",color:"#FFFFFF"}}> ChatApp </Text>
        </LinearGradient>

        <Text style={{fontSize:50,color:"#34414C",paddingLeft:vw(20),marginVertical:vh(15),fontWeight:"700"}}>Hello</Text>
        <Text style={{fontSize:20,color:"#a5a5a5",paddingLeft:vw(20),fontWeight:"500"}}>Sign in to your account</Text>

        <InputField
            label={"Email"}
            LabelColor={"#a2a2a2"}
            ref={firstTextInput}
            marginTop={vh(10)}
            editable={true}
            TextColor={{color:"#000000"}}
            placeholderTextColor={"#a2a2a2"}
            borderRadius={vh(100/2)}
            InActivebackgroundColor={{backgroundColor:"#FFFFFF"}}
            ActivebackgroundColor={{backgroundColor:"#F2F2F2"}}
            fieldStyle={{height:vh(70),marginVertical:vh(20),borderRadius:vh(100/2),elevation:5,marginTop:vh(20)}}
            OutlineColor={
              !CheckValidEmail
                ? {shadowColor:"blue"}
                : {shadowColor:"red"}
            }
            onChangeText={(text:string) => ValidEmail(text)}
            submitediting={(value:string) => {
              secondTextInput.current.focus();
              setEmail(value);
            }}
        />
        <InputField
            label={"Password"}
            LabelColor={"#a2a2a2"}
            ref={secondTextInput}
            marginTop={vh(10)}
            editable={true}
            TextColor={{color:"#000000"}}
            placeholderTextColor={"#a2a2a2"}
            borderRadius={vh(100/2)}
            InActivebackgroundColor={{backgroundColor:"#FFFFFF"}}
            ActivebackgroundColor={{backgroundColor:"#F2F2F2"}}
            fieldStyle={{height:vh(70),borderRadius:vh(100/2),elevation:5}}
            secureTextColor={"#a0a0a0"}
            secureTextEntry={true}
            OutlineColor={
              !CheckValidpass
                ? {shadowColor:"blue"}
                : {shadowColor:"red"}
            }
            onChangeText={(text:string) => ValidPassword(text)}
            submitediting={(value:string) => {
              setPassword(value);
            }}
            
        />
        
        <Pressable onPress={Signin} disabled={mail == '' && password == ''}>
        <LinearGradient colors={["#ec008c","#Fc6767"]} style={styles.button} useAngle angle={90}>
        <Text style={styles.buttonTitle}> SIGN IN </Text>
        </LinearGradient>
        </Pressable>
            
         <View style={{flexDirection:"row",justifyContent:"center",marginTop:vh(70)}}>   
        <Text style={{color:"#a0a0a0"}}>Don't have an account? </Text>
        <Text style={{fontWeight:"700",color:"#000000"}}>Create</Text>
        </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFFFFF",
        flex:1
    },
    button:{
        height:vh(65),
        width:vw(180),
        borderRadius:vh(50),
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        marginTop:vh(40)
    },
    buttonTitle:{
        color:"white",fontWeight:"bold"
    },
    topgrad:{
        width:fullWidth,
        height:150,borderBottomRightRadius:vh(50),borderBottomLeftRadius:vh(50),
        alignItems:"center",justifyContent:"center"
    }
})