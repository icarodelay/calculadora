import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [operation, setOperation] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [hist, setHist] = useState([]);

  const resetViewer = () => {
    setOperation("");
    setNumber1("");
    setNumber2("");
  };

  const numberPress = (number) => {
    if (number1.length <= 10 && operation == "") {
      setNumber1(number1 + number);
    }
    else if (number2.length <= 10 && operation != "") {
      setNumber2(number2 + number);
    }
  };

  const operationPress = (op) => {
    setOperation(op);
  };

  const quickOperationPress = (op) => {
    switch (op) {
      case '%':
        if (operation == ""){
          setNumber1(+number1 / 100);
        }
        else {
          setNumber2(+number2 / 100);
        }
        break;
      case '+/-':
        if (operation == ""){
          setNumber1(-number1);
        }
        else {
          setNumber2(-number2);
        }
        break;
    }
  }

  const resultPress = () => {
    let result = 0;
    switch (operation) {
      case '+':
        result = +number1 + +number2;
        break;
      case '-':
        result = +number1 - +number2;
        break;
      case '✕':
        result = +number1 * +number2;
        break;
      case '÷':
        result = +number1 / +number2;
        break;
    }
    
    setHist([...hist, {  num1: number1, op: operation, num2: number2 }]);
    resetViewer();
    setNumber1(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewport}>
        <View style={styles.histList}>
          {
            hist.map((calc) => (
              <View style={styles.operationView}>
                <Text style={styles.numberText}>{calc.num1}</Text>
                <Text style={[styles.numberText, styles.operatorColor, {fontSize: 15}]}>{calc.op}</Text>
                <Text style={styles.numberText}>{calc.num2}</Text>
              </View>
            ))
          }
          {/* <Text style={styles.numberText}>308</Text>
          <Text style={[styles.numberText, styles.operatorColor, {fontSize: 15}]}>✕</Text>
          <Text style={styles.numberText}>42</Text> */}
        </View>
        <View style={styles.operationView}>
          <Text style={[styles.numberText, styles.resultText]}>{number1}</Text>
          <Text style={[styles.numberText, styles.operatorColor, {fontSize: 15}]}>{operation}</Text>
          <Text style={[styles.numberText, styles.resultText]}>{number2}</Text>
        </View>
      </View>
      <View style={styles.keyboard}>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.button} onPress={resetViewer}>
            <Text style={[styles.textButton, styles.textMainButton]}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => numberPress(7)}>
            <Text style={styles.textButton}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => numberPress(4)}>
            <Text style={styles.textButton}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => numberPress(1)}>
            <Text style={styles.textButton}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={[styles.textButton, {fontSize: 30, transform: [{scaleX: -1}]}]}>⟳</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.button} onPress={() => quickOperationPress("+/-")}>
            <Text style={[styles.textButton, styles.textMainButton]}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => numberPress(8)}>
            <Text style={styles.textButton}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => numberPress(5)}>
            <Text style={styles.textButton}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => numberPress(2)}>
            <Text style={styles.textButton}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => numberPress(0)}>
            <Text style={styles.textButton}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.button} onPress={() => quickOperationPress("%")}>
            <Text style={[styles.textButton, styles.textMainButton]}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => numberPress(9)}>
            <Text style={styles.textButton}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => numberPress(6)}>
            <Text style={styles.textButton}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => numberPress(3)}>
            <Text style={styles.textButton}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => numberPress(".")}>
            <Text style={styles.textButton}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonColumn}> 
          <TouchableOpacity style={styles.button} onPress={() => operationPress("÷")}>
            <Text style={[styles.textButton, styles.textOpButton]}>÷</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => operationPress("✕")}>
            <Text style={[styles.textButton, styles.textOpButton, {fontSize: 20}]}>✕</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => operationPress("-")}>
            <Text style={[styles.textButton, styles.textOpButton]}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => operationPress("+")}>
            <Text style={[styles.textButton, styles.textOpButton]}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={resultPress}>
            <Text style={[styles.textButton, styles.textOpButton]}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#22252e',
  },
  
  viewport: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 40,
    paddingBottom: 40,
    backgroundColor: '#22252e',
  },

  histList: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    gap: 4,
  },

  operationView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    gap: 4,
  },

  numberText: {
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: 600,
    textAlign: 'center',
    color: '#FFF'
  },

  operatorColor: {
    color: '#de6c7d',
    padding: 2,
  },

  resultText: {
    fontSize: 40,
    fontWeight: 900,
    letterSpacing: 2,
  },

  keyboard: {
    flex: 3,
    padding: 20,
    paddingTop: 40,
    flexDirection: 'row',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#292d36',
  },

  buttonColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  
  button: {
    flex: 1,
    padding: 5,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#252a30',
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
  },

  textButton: {
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: 700,
    textAlign: 'center',
    color: '#fff'
  },

  textMainButton: {
    fontFamily: 'sans-serif',
    fontSize: 20,
    fontWeight: 900,
    textAlign: 'center',
    color: '#42ecc7'
  },

  textOpButton: {
    fontFamily: 'sans-serif',
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
    color: '#de6c7d'
  },
});
