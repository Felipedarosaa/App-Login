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


// Função de validação dos campos, caso seja inválido, ou o campo esteja em branco, deve chamar essa função
const validationLogin = yup.object({
  email: yup.string().email("Email Inválio").required("*Informe seu Email*"),
  password: yup.string().min(6, "A senha deve ter pelo menos 6 dígitos").required("*Informe sua Senha*")
})


export default function Login() {

  // Chamando a API de navegação
  const navigation = useNavigation()
  // Chamando a API de formulários e validações
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationLogin)
  })

  // Console Log para mostrar se foi feito login corretamente
  function handleSignIn(data) {
    console.log(data);
  }


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
        source={require('../Welcome/logo.png')}
        style={{ width: "30%", height: "15%", position: "absolute", left: "70%", top: "2%" }}
        resizeMode="contain"
      />

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Pressable onPress={Keyboard.dismiss} style={styles.pressable}>

          {/* Input de Email */}
          <Text style={styles.title}>Email:</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, {
                  borderWidth: errors.email && 1,
                  borderColor: errors.email && "red",
                  borderRadius: errors.email && 10,
                  paddingLeft: errors.email && 5,
                  right: errors.email && 2,
                }]}
                onChangeText={onChange}
                value={value}
                onBlur={onBlur} // Chamado quando o TextInput é tocado
                placeholder={"Digite seu Email"}
              />
            )}
          />
          {/* Retorna um aviso de erro quando é feita a validação do Email */}
          {errors.email && <Text style={styles.messageErrorEmail}>{errors.email?.message}</Text>}
          {/* Icone Email */}
          <Icon style={styles.iconMail} name="mail" size={35} color="gray" />


          {/* Input de Senha */}
          <Text style={styles.title}>Senha:</Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[styles.input, {
                  borderWidth: errors.password && 1,
                  borderColor: errors.password && "red",
                  borderRadius: errors.password && 10,
                  paddingLeft: errors.password && 5,
                  right: errors.password && 2,
                }]}
                onChangeText={onChange}
                value={value}
                onBlur={onBlur} // Chamado quando o textinput é tocado
                maxLength={15}
                placeholder={"Digite sua Senha"}
                secureTextEntry={true}
              />
            )}
          />
          {/* Retorna um aviso de erro quando é feita a validação da Senha */}
          {errors.password && <Text style={styles.messageErrorPassword}>{errors.password?.message}</Text>}
          {/* Icone Senha */}
          <Icon3 style={styles.iconPassword} name="eye" size={35} color="gray" />


          {/* Botão de login */}
          <TouchableOpacity
            // Chamando a função de validação
            onPress={handleSubmit(handleSignIn)}
            style={styles.button} >
            <Text style={styles.buttonText}>Entrar</Text>
            <Icon3 style={styles.iconLogin} name="login" size={30} color="white" />
          </TouchableOpacity>

          {/* Botão de Registrar nova conta*/}
          <TouchableOpacity
            style={styles.buttonRegistro}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
          </TouchableOpacity>

          {/* CheckBox dos termos de aceitação */}
          <BouncyCheckbox style={styles.checkBox}
            size={25}
            fillColor="#38a69d"
            unfillColor="white"
            text="Aceito os Termos e Condições de Uso do App e a Política de Privacidade."
            innerIconStyle={{ borderWidth: 2 }}
            onPress={() => { }}
          />


        </Pressable>
      </Animatable.View>
    </View>
  );
}