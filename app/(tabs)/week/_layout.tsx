import { Stack } from "expo-router";

export default function WeekLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Week",
          headerTitleAlign: "center",
          headerShown: true,
          headerBackTitle: "Back",
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#1e293b" },
          headerTitleStyle: { fontWeight: 600 },
        }}
      />
    </Stack>
  );
}
