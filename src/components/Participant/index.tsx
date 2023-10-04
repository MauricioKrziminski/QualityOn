import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import React from "react"

type Props = {
  name: string
  onRemove: () => void
}

export function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove} accessibilityLabel="btn-participant-dlt">
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
