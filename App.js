import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

// npx expo install react-native-gesture-handler

export default function App() {
  const singleTap = Gesture.Tap().onEnd((_event, success) => {
    if (success) {
      console.log("Single tap");
    }
  });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd((_event, success) => {
      if (success) {
        console.log("Double tap");
      }
    });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={Gesture.Race(doubleTap, singleTap)}>
        <Text>Open up App.js to start working on your app!</Text>
      </GestureDetector>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
