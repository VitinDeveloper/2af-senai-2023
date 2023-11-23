import React, { useState } from "react";
import { StyleSheet, View, Button, Text, Modal, TouchableOpacity } from 'react-native';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={toggleModal}>
        <View style={{ width: 135, height: 40, backgroundColor: 'blue', borderRadius: 20, justifyContent: 'center', alignItems: 'center', }}>
          <Text style={{ fontSize: 22, color: 'white', marginBottom: 5, }}> Abrir Modal </Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Titulo do seu modal</Text>
          <Text style={styles.modalDescription}>Descrição do modal</Text>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <View style={{ width: 75, height: 40, backgroundColor: 'blue', borderRadius: 20, justifyContent: 'center', alignItems: 'center', }}>
              <Text style={{ fontSize: 22, color: 'white', marginBottom: 5, }}> OK </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  //estilização do Modal
  modalView: {
    marginTop: 75,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold"
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  modalButton: {
    width: 200, // Ajuste o tamanho horizontal do botão
    height: 50, // Ajuste o tamanho vertical do botão
    marginTop: 10 // Espaçamento superior do botão
    // Outros estilos desejados para o botão
  }
});
