import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // 
    <Stack>
      {/* Hide header for tabs
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="modal" options={{ presentation: "modal" }} />
    </Stack>
    
  )
}
