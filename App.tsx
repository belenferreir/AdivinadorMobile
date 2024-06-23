import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View
} from 'react-native';
import Boton from './components';

function App() {
  const [count, setCount] = useState<number | string>(0);
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(100);
  const [isFinished, setIsFinished] = useState(false);

  const randomNumber = (min:number, max:number) => {
    return Math.floor(Math.random() * (max-min+1)) + min;
  }

  const Iniciar = () => {
    setMin(1);
    setMax(100);
    setCount(randomNumber(min, max));
    setIsFinished(false); 
  }

  const Menor = () => {
    setMax((count as number)-1); 
    setCount(randomNumber(min, (count as number)-1))
  }

  const Mayor = () => {
    setMax((count as number)+1); 
    setCount(randomNumber((count as number)+1, max))
  }

  const Igual = () => {
    setCount("Número encontrado!");
    setIsFinished(true); 
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.count}> {count} </Text>
          <Boton label="Iniciar" onClick={Iniciar}/>
          {!isFinished && (
            <>
              <Boton label="Menor" onClick={Menor}/>
              <Boton label="Igual" onClick={Igual}/>
              <Boton label="Mayor" onClick={Mayor}/>
            </>
          )}
        </View>
      </ScrollView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 30,
  },
});

export default App;
