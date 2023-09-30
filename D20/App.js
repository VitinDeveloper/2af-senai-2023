import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from "react";

export default function App() {

  const [cont, setCont] = useState(0)

  function girar(){

    setCont(Math.ceil(Math.random()*20))

  }
  
  return (

    <View style={styles.container}>

      <Text style={styles.textoH1}>D20</Text>
      <Text style={styles.textoH2}>{cont}</Text>

      <TouchableOpacity style={styles.botao} onPress={ girar }> 
      <Text style={styles.textoBotao}>Girar</Text> 
      </TouchableOpacity>

      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B2223',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoH1: {
    color: '#F4FEFD',
    fontSize: 60
  },
  textoH2: {
    color: '#580EF6',
    fontSize: 30,
  },
  botao: {
    width: 150,
    height: 50,
    backgroundColor: '#3A4F50',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
  },
  textoBotao: {
    color: '#F4FEFD',
    fontSize: 20,
  }
});