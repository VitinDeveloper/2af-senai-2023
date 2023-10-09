import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { useState } from 'react';

export default function Home() {

    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [birth, setBirth] = useState('')

    function handleUserAdd(user) {
        console.log("Nome: " + name
            + "\nGênero: " + gender
            + "\nData de Nascimento: " + birth)

        alert.alert("Nome: " + name
            + "\nGênero: " + gender
            + "\nData de Nascimento: " + birth)
    }

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Preencha os Dados</Text>

            <TextInput
                style={styles.input}
                placeholder='Nome Completo'
                placeholderTextColor="black"
                value={name} //captura o valor
                onChangeText={setName} //altera o valor
            />

            <TextInput
                style={styles.input}
                placeholder='Gênero'
                placeholderTextColor="black"
                value={gender} //captura o valor
                onChangeText={setGender} //altera o valor
            />

            <TextInput
                style={styles.input}
                placeholder='Data e Nascimento'
                placeholderTextColor="black"
                value={birth} //captura o valor
                onChangeText={setBirth} //altera o valor
            />

            <TouchableOpacity style={styles.btn} onPress={handleUserAdd}>
                <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    )
}