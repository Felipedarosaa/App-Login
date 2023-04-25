import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import styles from "./style";
// Biblioteca de Animação
import * as Animatable from 'react-native-animatable'
// Biblioteca de Navegação
import { useNavigation } from '@react-navigation/native'


export default function Welcome() {

  // Chamando a API de navegação
  const navigation = useNavigation();

  return (

    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require('../../img/logo.png')}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Monitore seus gastos de qualquer lugar</Text>
        <Text style={styles.text}>Faça Login para começar</Text>


        <TouchableOpacity
          style={styles.button}
          // Trocando para a tela de login após o clique
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>


    </View>
  );
}