import { useNavigation } from "@react-navigation/native"
import {ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, { useState } from "react"
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { styles } from "./styles"

export function Login() {
  // const navigation = useNavigation()
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin() {
    navigation.navigate("Home")
    Alert.alert("Login realizado com sucesso!")
  }

  function handleRegister() {
    navigation.navigate("Register")
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      <TextInput
        accessibilityLabel="input-login-name"
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor={"#6b6b6b"}
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        accessibilityLabel="input-login-password"
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={"#6b6b6b"}
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin} accessibilityLabel="btn-login">
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.registerText} onPress={handleRegister} accessibilityLabel="btn-register">
        Não possui uma conta? Cadastra-se
      </Text>
    </View>
  )
}
