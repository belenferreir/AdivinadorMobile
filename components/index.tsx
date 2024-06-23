import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  label: string;
  onPress: () => void;
}

const Boton: React.FC<Props> = ({ label, onPress }) => {
  const getButtonStyle = () => {
    switch (label.toLowerCase()) {
      case 'iniciar': return styles.iniciar;
      case 'menor': return styles.menor;
      case 'igual': return styles.igual;
      case 'mayor': return styles.mayor;
      default: return {};
    }
  };

  return (
    <TouchableOpacity style={[styles.button, getButtonStyle()]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
  iniciar: {
    backgroundColor: 'orange',
  },
  menor: {
    backgroundColor: 'violet',
  },
  igual: {
    backgroundColor: 'pink',
  },
  mayor: {
    backgroundColor: 'skyblue',
  },
});

export default Boton;