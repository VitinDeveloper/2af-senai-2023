import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

// Vetor de imagens
let vetorImagens = [
  require('./icons8/anonymous-120.png'), require('./icons8/grito-120.png'),
  require('./icons8/homer-simpson-120.png'), require('./icons8/iron-man-120.png'),
  require('./icons8/múmia-120.png'), require('./icons8/stormtrooper-120.png'),
  require('./icons8/super-mario-120.png'), require('./icons8/the-jigsaw-killer-120.png'),
  require('./icons8/walter-white-120.png'),
]

export default function App() {
  return (
    // Componente principal da aplicação
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

// Componente de cabeçalho
function Header() {
  return (
    <View style={{ width: '100%', height: '15%', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40 }}>Story App</Text>
    </View>
  );
}

// Componente principal do corpo da aplicação
function Body() {
  const [imagensAleatorias, setImagensAleatorias] = useState(require('./icons8/start.png'));

  // Função para escolher imagens aleatórias
  function story() {
    setImagensAleatorias(vetorImagens[Math.floor(Math.random() * vetorImagens.length)]);
  }

  // Função para reiniciar a imagem
  function restart() {
    setImagensAleatorias(require('./icons8/start.png'));
  }

  return (
    // View principal do corpo
    <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        {imagensAleatorias && (
          <Image
            source={imagensAleatorias}
            style={{ width: '75%', height: '90%' }}
          />
        )}
      </View>
      <View style={{ height: '25%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={{ backgroundColor: 'white', height: '35%', width: '45%', justifyContent: 'center', alignItems: 'center', borderRadius: 30, margin: 2, borderColor: 'black', borderWidth: 2, elevation: 10 }} onPress={story}>
          <Text style={{ fontSize: 35 }}>Story</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: 'white', height: '35%', width: '45%', justifyContent: 'center', alignItems: 'center', borderRadius: 30, margin: 2, borderColor: 'black', borderWidth: 2, elevation: 10 }} onPress={restart}>
          <Text style={{ fontSize: 35 }}>Restart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Componente de rodapé
function Footer() {
  return (
    <View style={{ width: '100%', height: '10%', justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}