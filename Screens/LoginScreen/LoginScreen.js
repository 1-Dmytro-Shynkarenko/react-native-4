import { StyleSheet, Text, ImageBackground,
    View, TouchableOpacity, TextInput, KeyboardAvoidingView, 
    Platform } from "react-native";
 import React, { useState } from "react";
 
 const LoginScreen = ({changeScrenn}) => {
 
    const [mail, setMail] =useState('');
    const [password, setPassword] =useState('');
 
    const handleMail =(text)=>{ setMail(text)};
    const handlePassword =(text)=>{ setPassword(text)};
 
    const register =()=> {
     if (!mail || !password) { alert("Enter all data pleace!!!"); return }
    //  console.log(`Email: ${ mail }, Password: ${password}`)
    }
 
    const passwShow =()=> alert(`Your password is: ${password}`);
 
    return (
     <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={ styles.containerKeyB } >
       <View style={ styles.container }>
 
         <Text style={ styles.title }>Login</Text>
   
         <TextInput style={ styles.inputMailPassw } placeholder="Email address" inputMode="email" value={ mail }  onChangeText={handleMail}/>
         <TextInput style={ styles.inputMailPassw } placeholder="Password" secureTextEntry={true} value={ password }  onChangeText={handlePassword}/>
         
         <TouchableOpacity style={ styles.passwShow } activeOpacity={0.5} onPress={passwShow}>
              <Text style={ styles.passwShowText }>Show</Text>
         </TouchableOpacity>  
 
         <TouchableOpacity style={ styles.registerButton } activeOpacity={0.5} onPress={register}>
           <Text style={ styles.registerButtonText }>Login</Text>
         </TouchableOpacity>
 
         <TouchableOpacity style={ styles.loginLink } activeOpacity={0.5}  onPress={()=>changeScrenn(1)} >
              <Text style={ styles.loginLinkText }>Don't have an account? Register</Text>
         </TouchableOpacity> 
 
       </View>
      </KeyboardAvoidingView> 
    )
 };
 
 const styles = StyleSheet.create({
     container: {
       backgroundColor: '#FFFFFF',
       alignItems: 'center',
       width: '100%',
       borderTopRightRadius: 25,
       borderTopLeftRadius:25,
     },
     containerKeyB: {
       justifyContent: "flex-end",
     },
     pfotoContainer: {
       marginTop: -60,
       height: 120,
       width: 120,
       backgroundColor: '#F6F6F6',
       borderRadius: 16,
     },
 
     addbutton: {
       marginTop: '65%',
       left: '90%',
       height: 25,
       width: 25,
       pointerEvents: "auto",
     },
     title: {
       fontWeight: '500',
       fontSize: 30,
       marginTop: 32,
       lineHeight: 35,
     },
     inputLogin: {
       backgroundColor: '#F6F6F6',
       width: 343,
       height: 50,
       borderRadius: 8,
       marginTop: 33,
       padding: 16,
       fontStyle: 'normal',
       fontWeight: '400',
       fontSize: 16,
       lineHeight: 19,
     },
     inputMailPassw: {
       backgroundColor: '#F6F6F6',
       width: 343,
       height: 50,
       borderRadius: 8,
       padding: 16,
       marginTop: 16,
       fontStyle: 'normal',
       fontWeight: '400',
       fontSize: 16,
       position: 'relative',
     },
     passwShowText: {
       fontStyle: 'normal',
       fontWeight: '400',
       fontSize: 16,
       lineHeight: 19,
     },
     passwShow: {
       top: -34,
       left: 130,
     },
     registerButton: {
       backgroundColor: '#FF6C00',
       height: 50,
       width: 343, 
       justifyContent: "center",
       alignItems: "center",
       borderRadius: 100,
       marginTop: 44,
     },
     registerButtonText:{
        color: '#fff',
        fontWeight: '400'
     },
     loginLink:{
       marginTop: 16,
       marginBottom: 66
     },
     loginLinkText:{
       fontStyle: 'normal',
       fontWeight: '400',
       fontSize: 16,
       lineHeight: 19,
     },
  });
 
 export default LoginScreen;