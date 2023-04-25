import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, } from 'react-native';
import styles from "./style";
// Biblioteca de Animação
import * as Animatable from 'react-native-animatable'
// Biblioteca de Navegação
import { useNavigation } from '@react-navigation/native'


export default function ConfirmRegister() {
    // Chamando a API de navegação
    const navigation = useNavigation();

    return (

        // View Principal 
        <View style={styles.container}>

            {/* View com animação  */}
            <Animatable.View delay={100} animation="fadeInUp" style={styles.containerForm}>
                <Animatable.Text delay={100} animation="zoomIn" style={styles.title}>Cadastro realizado com sucesso!</Animatable.Text>
                <Animatable.Text delay={100} animation="zoomIn" style={styles.text}>Faça Login para começar</Animatable.Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}>
                    <Animatable.Text style={styles.buttonText}>Fazer Login</Animatable.Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}