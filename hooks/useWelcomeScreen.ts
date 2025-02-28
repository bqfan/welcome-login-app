"use client"

import { useState, useEffect } from "react"
import * as SecureStore from "expo-secure-store"

const WELCOME_SCREEN_KEY = "hasSeenWelcome"

export const useWelcomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasSeenWelcome, setHasSeenWelcome] = useState(false)

  useEffect(() => {
    checkWelcomeStatus()
  }, [])

  const checkWelcomeStatus = async () => {
    try {
      const value = await SecureStore.getItemAsync(WELCOME_SCREEN_KEY)
      setHasSeenWelcome(value === "true")
      setIsLoading(false)
    } catch (error) {
      console.error("Error checking welcome status:", error)
      setIsLoading(false)
    }
  }

  const markWelcomeAsSeen = async () => {
    try {
      await SecureStore.setItemAsync(WELCOME_SCREEN_KEY, "true")
      setHasSeenWelcome(true)
    } catch (error) {
      console.error("Error saving welcome status:", error)
    }
  }

  const resetWelcomeScreen = async () => {
    try {
      await SecureStore.deleteItemAsync(WELCOME_SCREEN_KEY)
      setHasSeenWelcome(false)
    } catch (error) {
      console.error("Error resetting welcome screen:", error)
    }
  }

  return {
    isLoading,
    hasSeenWelcome,
    markWelcomeAsSeen,
    resetWelcomeScreen,
  }
}
