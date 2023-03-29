// import React, { useState, useRef } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   TouchableOpacity,
// } from "react-native";
// import WheelOfFortune from "react-native-wheel-of-fortune";
// import knobImage from "./assets/images/knob.png";

// const participants = [
//   "%10",
//   "%20",
//   "%30",
//   "%40",
//   "%50",
//   "%60",
//   "%70",
//   "%90",
//   "FREE",
// ];

// const WheelScreen = () => {
//   const [winnerValue, setWinnerValue] = useState(null);
//   const [winnerIndex, setWinnerIndex] = useState(null);
//   const [started, setStarted] = useState(false);
//   const wheelRef = useRef(null);

//   const handleButtonPress = () => {
//     setStarted(true);
//     wheelRef.current._onPress();
//   };

//   const handleWinner = (value, index) => {
//     setWinnerValue(value);
//     setWinnerIndex(index);
//   };

//   const handleTryAgain = () => {
//     setWinnerIndex(null);
//     wheelRef.current._tryAgain();
//   };

//   const wheelOptions = {
//     rewards: participants,
//     knobSize: 30,
//     borderWidth: 5,
//     borderColor: "#fff",
//     innerRadius: 30,
//     duration: 6000,
//     backgroundColor: "transparent",
//     knobSource: knobImage,
//     textAngle: "horizontal",
//     onRef: (ref) => (wheelRef.current = ref),
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar barStyle={"light-content"} />
//       <WheelOfFortune options={wheelOptions} getWinner={handleWinner} />
//       {!started && (
//         <View style={styles.startButtonView}>
//           <TouchableOpacity
//             onPress={handleButtonPress}
//             style={styles.startButton}
//           >
//             <Text style={styles.startButtonText}>Spin to win!</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//       {winnerIndex != null && (
//         <View style={styles.winnerView}>
//           <Text style={styles.winnerText}>
//             You win {participants[winnerIndex]}
//           </Text>
//           <TouchableOpacity
//             onPress={handleTryAgain}
//             style={styles.tryAgainButton}
//           >
//             <Text style={styles.tryAgainText}>TRY AGAIN</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// export default WheelScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#E74C3C",
//   },
//   startButtonView: {
//     position: "absolute",
//   },
//   startButton: {
//     backgroundColor: "rgba(0,0,0,.5)",
//     marginTop: 50,
//     padding: 5,
//   },
//   startButtonText: {
//     fontSize: 50,
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   winnerView: {
//     position: "absolute",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   tryAgainButton: {
//     padding: 10,
//   },
//   winnerText: {
//     fontSize: 30,
//   },
//   tryAgainButton: {
//     padding: 5,
//     backgroundColor: "rgba(0,0,0,0.5)",
//   },
//   tryAgainText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#fff",
//   },
// });
// ``;
