import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Boton from './components';

const App = () => {
  const [count, setCount] = useState<number | string>(0);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [isFinished, setIsFinished] = useState(false);

  const randomNumber = (min: number, max: number) => 
    Math.floor(Math.random() * (max - min + 1)) + min;

  const Iniciar = () => {
    setMin(1);
    setMax(100);
    setCount(randomNumber(min, max));
    setIsFinished(false); 
  };

  const Menor = () => {
    setMax(Number(count) - 1);
    setCount(randomNumber(min, Number(count) - 1));
  };

  const Mayor = () => {
    setMin(Number(count) + 1);
    setCount(randomNumber(Number(count) + 1, max));
  };

  const Igual = () => {
    setCount("Número encontrado!");
    setIsFinished(true); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Boton label="Iniciar" onPress={Iniciar} />
      {!isFinished && (
        <>
          <Boton label="Menor" onPress={Menor} />
          <Boton label="Igual" onPress={Igual} />
          <Boton label="Mayor" onPress={Mayor} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'olive',
  },
  count: {
    color: 'white',
    fontSize: 32,
    marginBottom: 20,
  },
});

export default App;
