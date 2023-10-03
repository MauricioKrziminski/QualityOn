import React, { useState } from "react"
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  Image,
} from "react-native"
import { styles } from "./styles"

interface LoginProps {
  toggleLoggedIn: () => void
  toggleRegister: () => void
}

export function Login({ toggleLoggedIn, toggleRegister }: LoginProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin() {
    if (username && password) {
      if (username === "admin" && password === "senha123") {
        toggleLoggedIn()
      } else {
        Alert.alert("Erro de autenticação", "Usuário ou senha inválidos")
      }
    } else {
      Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos")
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
      <View style={styles.aaa}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor={"#6b6b6b"}
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={"#6b6b6b"}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleRegister}>
          <Text style={styles.registerText}>
            Não possui uma conta? Cadastra-se
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
