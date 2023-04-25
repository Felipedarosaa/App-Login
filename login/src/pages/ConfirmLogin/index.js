import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Pressable, } from 'react-native';
import styles from "./style";
// Biblioteca de Animação
import * as Animatable from 'react-native-animatable'
// Biblioteca de Navegação
import { useNavigation } from '@react-navigation/native'


export default function ConfirmLogin() {
    // Chamando a API de navegação
    const navigation = useNavigation();

    return (

        // View Principal 
        <View style={styles.container}>

            {/* View com animação  */}
            <Animatable.View delay={100} animation="fadeInUp" style={styles.containerForm}>
                <Animatable.Text delay={100} animation="zoomIn" style={styles.title}>Seja bem vindo!</Animatable.Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Welcome')}>
                    <Animatable.Text style={styles.buttonText}>Home</Animatable.Text>
                </TouchableOpacity>

            </Animatable.View>
        </View>
    );
}