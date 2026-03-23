import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  texto: string;
}

export const FraseCard: React.FC<Props> = ({ texto }) => (
  <View style={styles.card}>
    <Text style={styles.texto}>"{texto}"</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 25,
    backgroundColor: '#FFF8F0',
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E8DCCF',
  },
  texto: {
    fontSize: 24,
    textAlign: 'center',
    color: '#4A4A4A',
    fontStyle: 'italic',
    lineHeight: 34,
  },
});