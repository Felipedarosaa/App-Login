import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable, Keyboard, Vibration } from 'react-native';
import styles from "./style";
// Bibliotecas de Icones
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Entypo'
// Biblioteca de navegação
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
// Biblioteca para Formulários
import { useForm, Controller } from "react-hook-form";
// Import do CheckBox
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Register = ({ navigation }) => {
  // Criando as váriaveis de validação

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);


  const handleLogin = () => {
    // Se não houver erros, navega para a tela de bem-vindo

    // Validando o Nome
    if (name === '') {
      setNameError('Por favor, insira seu nome');
    }
    else {
      setNameError(null);
    }

    // Validando o Email
    if (email === '') {
      setEmailError('Por favor, insira seu email');
    }
    else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(null);
    }
    else {
      setEmailError('Email inválido');
    }

    // Validando a Senha
    if (password.length < 6) {
      setPasswordError('Sua senha deve ter pelo menos 6 caracteres');
    }
    else {
      setPasswordError(null);
    }

    // Verifica se todos os campos foram preenchidos
    if (name && email && password) {
      navigation.navigate('ConfirmRegister', { name });
    }
  };

  return (
    // View Principal 
    <View style={styles.container}>

      {/* View secundária com animação */}
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Registre-se</Text>
      </Animatable.View>


      <Animatable.Image
        animation="fadeInLeft"
        delay={500}
        source={require('../../img/logo.png')}
        style={{ width: "30%", height: "15%", position: "absolute", left: "70%", top: "2%" }}
        resizeMode="contain"
      />


      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Pressable onPress={Keyboard.dismiss} style={styles.pressable}>

          <TextInput
            style={styles.inputName}
            onChangeText={text => setName(text)}
            value={name}
            maxLength={50}
            placeholder="Insira seu nome"
            placeholderTextColor="gray"
          />
          {/* Icone Nome */}
          <Icon style={styles.iconName} name="user" size={37} color="white" />
          {/* Retorna um aviso de erro quando é feita a validação do Senha */}
          {nameError && <Text style={styles.errorName}>{nameError}</Text>}


          <TextInput
            style={styles.inputEmail}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Insira seu email"
            placeholderTextColor="gray"
          />
          {/* Retorna um aviso de erro quando é feita a validação do Email */}
          {emailError && <Text style={styles.errorEmail}>{emailError}</Text>}
          {/* Icone Email */}
          <Icon style={styles.iconMail} name="mail" size={37} color="white" />


          <TextInput
            style={styles.inputPassword}
            onChangeText={text => setPassword(text)}
            value={password}
            maxLength={15}
            secureTextEntry={true}
            placeholder="Crie uma senha"
            placeholderTextColor="gray"
          />
          {/* Icone Senha */}
          <Icon3 style={styles.iconPassword} name="eye" size={37} color="white" />
          {/* Retorna um aviso de erro quando é feita a validação do Senha */}
          {passwordError && <Text style={styles.errorPassword}>{passwordError}</Text>}


          {/* Botão de login */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

        </Pressable>
      </Animatable.View>
    </View>
  );
};


export default Register;