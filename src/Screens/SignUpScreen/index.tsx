import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {fullWidth, vh, vw} from '../../utils/dimension';
import InputField from '../../Components/InputField';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const SignUpScreen = (props: any) => {
  //refs
  const firstTextInput = React.useRef<any>(null);
  const secondTextInput = React.useRef<any>(null);
  const thirdTextInput = React.useRef<any>(null);
  const fourthTextInput = React.useRef<any>(null);
  //Checks
  const [CheckValidName, setCheckValidName] = React.useState(false);
  const [CheckValidEmail, setCheckValidEmail] = React.useState(false);
  const [CheckValidPass, setCheckValidpass] = React.useState(false);
  //inputs
  const [Name, setName] = React.useState('');
  const [Email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [ConfirmPassword, setConfirmPassword] = React.useState('');
  //Check Inputs
  
  const ValidName = (text: string) => {
    setName(text)
    if (text.length > 2) {
      setCheckValidName(true);
    }
  };

  //Valid Checks
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
//FireBase
    const SignUp = async () => {
      const result: any = await auth()
        .createUserWithEmailAndPassword(Email, Password)
        .then(() => {
          console.log('SignUp done');
        })
        .catch(error => {
          console.log(error.code);
        });
      firestore()
        .collection('Users')
        .doc(auth().currentUser?.uid)
        .collection('User Details')
        .doc('Info')
        .set({FullName: Name, Email: Email, Password: Password})
        .then(() => {
          console.log('user data added');
          props.navigation.replace("Login")
        })
        .catch(error => {
          console.log(error.code);
        });
    };
    
    return (
        <View style={styles.container}>
      <LinearGradient
        colors={['#ec008c', '#fc6767']}
        useAngle
        style={styles.topgrad}>
        <Pressable
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Image
            source={require('../../assests/angle-left.png')}
            style={styles.backButton}
          />
        </Pressable>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#FFFFFF',
          }}>
          {' '}
          ChatApp{' '}
        </Text>
      </LinearGradient>
      <Text
        style={{
          fontSize: 40,
          color: '#34414C',
          paddingLeft: vw(20),
          fontWeight: '700',
        }}>
        Hey..
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: '#a5a5a5',
          paddingLeft: vw(20),
          fontWeight: '500',
        }}>
        Enter Details to Create Account
      </Text>

      <InputField
        label={'Full Name'}
        LabelColor={'#a2a2a2'}
        ref={firstTextInput}
        marginTop={vh(6)}
        editable={true}
        TextColor={{color: '#000000'}}
        placeholderTextColor={'#a2a2a2'}
        borderRadius={vh(0)}
        InActivebackgroundColor={{backgroundColor: '#FFFFFF'}}
        ActivebackgroundColor={{backgroundColor: '#F2F2F2'}}
        fieldStyle={{
          height: vh(56),
          marginVertical: vh(20),
          elevation: 2,
          marginTop: vh(20),
        }}
        OutlineColor={
          !CheckValidName ? {shadowColor: 'blue'} : {shadowColor: 'red'}
        }
        onChangeText={(text: string) => ValidName(text)}
        submitediting={(value: string) => {
          secondTextInput.current.focus();
          setName(value);
        }}
      />
      <InputField
        label={'Email'}
        LabelColor={'#a2a2a2'}
        ref={secondTextInput}
        marginTop={vh(6)}
        editable={true}
        TextColor={{color: '#000000'}}
        placeholderTextColor={'#a2a2a2'}
        borderRadius={vh(0)}
        InActivebackgroundColor={{backgroundColor: '#FFFFFF'}}
        ActivebackgroundColor={{backgroundColor: '#F2F2F2'}}
        fieldStyle={{
          height: vh(56),
          marginVertical: vh(20),
          elevation: 2,
          marginTop: vh(20),
        }}
        OutlineColor={
          !CheckValidEmail ? {shadowColor: 'blue'} : {shadowColor: 'red'}
        }
        onChangeText={(text: string) => ValidEmail(text)}
        submitediting={(value: string) => {
          thirdTextInput.current.focus();
          setEmail(value);
        }}
      />

      <InputField
        label={'Password'}
        LabelColor={'#a2a2a2'}
        ref={thirdTextInput}
        marginTop={vh(6)}
        editable={true}
        TextColor={{color: '#000000'}}
        placeholderTextColor={'#a2a2a2'}
        borderRadius={vh(0)}
        InActivebackgroundColor={{backgroundColor: '#FFFFFF'}}
        ActivebackgroundColor={{backgroundColor: '#F2F2F2'}}
        fieldStyle={{
          height: vh(56),
          marginVertical: vh(20),
          elevation: 2,
          marginTop: vh(20),
        }}
        secureTextColor={'#a0a0a0'}
        secureTextEntry={true}
        OutlineColor={
          !CheckValidPass ? {shadowColor: 'blue'} : {shadowColor: 'red'}
        }
        onChangeText={(text: string) => ValidPassword(text)}
        submitediting={(value: string) => {
          setPassword(value);
        }}
      />

      <Pressable onPress={SignUp} disabled={Email == '' && Password == ''}>
        <LinearGradient
          colors={['#ec008c', '#Fc6767']}
          style={styles.button}
          useAngle
          angle={90}>
          <Text style={styles.buttonTitle}> SIGN UP </Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topgrad: {
    width: fullWidth,
    height: 120,
    borderBottomRightRadius: vh(50),
    borderBottomLeftRadius: vh(50),
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: vh(20),
  },
  button: {
    height: vh(65),
    width: vw(180),
    borderRadius: vh(50),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: vh(40),
  },
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  backButton: {
    width: vw(30),
    height: vw(30),
    marginRight: vw(45),
    marginLeft: vw(20),
  },
});
