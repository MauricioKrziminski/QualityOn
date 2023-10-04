// Register.tsx
import React, { useState } from "react"
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"

export function Register() {
  const navigation = useNavigation()
  const [email, setMail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function goBackLogin() {
    navigation.navigate("Login")
    Alert.alert("Cadastro realizado com sucesso!")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.bbb}>
        <TextInput
          accessibilityLabel="input-mail"
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor={"#6b6b6b"}
          onChangeText={setMail}
          value={email}
        />
        <TextInput
          accessibilityLabel="input-name"
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor={"#6b6b6b"}
          onChangeText={setUsername}
          value={username}
        />
        <TextInput
          accessibilityLabel="input-password"
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={"#6b6b6b"}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={goBackLogin} accessibilityLabel="btn-register">
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
}
