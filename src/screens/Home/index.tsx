// Home.tsx
import React, { useState } from "react"
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant"
import { useNavigation } from "@react-navigation/native"

export function Home() {
  const navigation = useNavigation()
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")

  function handleParticipantAdd() {
    if (participantName !== "") {
      if (participants.includes(participantName)) {
        return Alert.alert("Erro", "Participante já existe na lista")
      }

      setParticipants((prevState) => [...prevState, participantName])
      setParticipantName("")
    } else {
      Alert.alert("Erro", "Digite o nome do participante")
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover participante", `Deseja remover ${name} da lista?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((item) => item !== name)
          ),
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Evento QualityON</Text>
      <Text style={styles.eventDate}>7 de outubro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          accessibilityLabel="btn-participant"
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd} accessibilityLabel="btn-participant-add">
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate("Login")}
        accessibilityLabel="btn-back-login"
      >
        <Text style={styles.buttonText2}>Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  )
}
