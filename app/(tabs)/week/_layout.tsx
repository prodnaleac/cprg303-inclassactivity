import { Stack } from "expo-router";

export default function WeekLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerShown: true,
        headerBackTitle: "Back",
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: "#1e293b" },
        headerTitleStyle: { fontWeight: 600 },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Week",
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Day Details",
        }}
      />
    </Stack>
  );
}
