"use client"

import type React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { useWelcomeScreen } from "../hooks/useWelcomeScreen"
import { useRouter } from "expo-router"

interface ResetWelcomeButtonProps {
  style?: object
}

const ResetWelcomeButton: React.FC<ResetWelcomeButtonProps> = ({ style }) => {
  const { resetWelcomeScreen } = useWelcomeScreen()
  const router = useRouter()

  const handleReset = async () => {
    await resetWelcomeScreen()
    router.replace("/welcome")
  }

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={handleReset}>
      <Text style={styles.buttonText}>Reset Welcome Screen</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ef4444",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    justifyContent: "center",
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
  },
})

export default ResetWelcomeButton
