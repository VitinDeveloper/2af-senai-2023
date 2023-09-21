import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text>Tela Abas</Text>
            <Text>Não foi eu que escolhi esse nome!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})