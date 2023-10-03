import React, { useState } from "react"
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native"
import { styles } from "./styles"

interface RegisterProps {
  toggleRegister: () => void
}

export function Register({ toggleRegister }: RegisterProps) {
  const [email, setMail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleRegister() {
    if (email && username && password) {
      toggleRegister()
    } else {
      Alert.alert("Campos obrigatórios", "Por favor, preencha todos os campos")
    }
  }

  return (
    <View style={styles.container}>
      <View style = {styles.bbb}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor={"#6b6b6b"}
          onChangeText={setMail}
          value={email}
        />
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
      </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
    </View>
  )
}
