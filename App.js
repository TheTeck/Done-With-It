import React from 'react';
import { 
  View, 
} from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        flex: -1,
        width: 400,
        height: 100,
      }} />
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,
        top: 20,
      }} />
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: "peru",
        width: 100,
        height: 100,
      }} />
    </View>
  );
}


