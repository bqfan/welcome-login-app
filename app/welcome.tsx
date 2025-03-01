"use client"
import { View, Text, Image, TouchableOpacity, SafeAreaView, Dimensions } from "react-native"
import { useRouter } from "expo-router"
import { useWelcomeScreen } from "../hooks/useWelcomeScreen"

const { width, height } = Dimensions.get("window")

export default function WelcomeScreen() {
  const router = useRouter()
  const { markWelcomeAsSeen } = useWelcomeScreen()

  const handleGetStarted = () => {
    markWelcomeAsSeen()
    router.replace("/(tabs)")
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6">
        <Image 
          source={require("@/assets/images/healthq-splash-icon.png")} 
          style={{ 
            width: width * 0.3,
            height: width * 0.3 
          }}
          className="mb-10"
          resizeMode="contain"
        />

        <Text className="text-2xl font-bold text-slate-900 text-center mb-3">
          Welcome to Your App
        </Text>

        <Text className="text-base text-slate-500 text-center max-w-[80%] mb-12">
          Your new favorite app for exploring amazing content
        </Text>

        <View className="w-full mb-12">
          {[
            { icon: "🚀", text: "Discover trending content" },
            { icon: "🔍", text: "Search for your interests" },
            { icon: "👤", text: "Personalized for you" }
          ].map((feature, index) => (
            <View key={index} className="flex-row items-center mb-6">
              <View className="w-12 h-12 rounded-full bg-sky-100 justify-center items-center mr-4">
                <Text className="text-xl">{feature.icon}</Text>
              </View>
              <Text className="text-base text-slate-700 flex-1">{feature.text}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity 
        className={`bg-cyan-600 py-4 rounded-xl mx-6 ${height > 700 ? 'mb-12' : 'mb-6'}`}
        onPress={handleGetStarted}
      >
        <Text className="text-white font-bold text-base text-center">Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
