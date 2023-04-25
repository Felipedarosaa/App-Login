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
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Login = ({ navigation }) => {
  // Criando as váriaveis de validação

  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);


  const handleLogin = () => {
    // Se não houver erros, navega para a tela de bem-vindo

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
    if (password === '') {
      setPasswordError('Por favor, insira sua senha');
    }
    else if (password.length < 6) {
      setPasswordError('Sua senha deve ter pelo menos 6 caracteres');
    }
    else {
      setPasswordError(null);
    }

    // Verifica se todos os campos foram preenchidos
    if (email && password) {
      navigation.navigate('ConfirmLogin', { email });
    }
  };

  
  return (
    // View Principal 
    <View style={styles.container}>

      {/* View secundária com animação */}
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem vindo (a)</Text>
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
            placeholder="Insira sua senha"
            placeholderTextColor="gray"
          />
          {/* Icone Senha */}
          <Icon3 style={styles.iconPassword} name="eye" size={37} color="white" />
          {/* Retorna um aviso de erro quando é feita a validação do Senha */}
          {passwordError && <Text style={styles.errorPassword}>{passwordError}</Text>}


          {/* Botão de login */}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>



          <View style={styles.containerSociais}>
            <TouchableOpacity style={styles.buttonRedes}>
              <Icon name="facebook-square" size={45} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRedes}>
              <Icon name="google" size={45} color="black" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonRedes}>
              <Icon name="twitter" size={45} color="black" />
            </TouchableOpacity>
          </View>


           {/* Botão de Registrar nova conta*/}
           <TouchableOpacity
            style={styles.buttonRegistro}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
          </TouchableOpacity>


        </Pressable>
      </Animatable.View>
    </View>
  );
};

export default Login;