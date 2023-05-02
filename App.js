import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewport}>
        <View style={styles.operationView}>
          <Text style={styles.numberText}>308</Text>
          <Text style={[styles.numberText, styles.operatorColor]}>x</Text>
          <Text style={styles.numberText}>42</Text>
        </View>
        <View style={styles.resultView}>
          <Text style={[styles.numberText, styles.resultText]}>12936</Text>
        </View>
      </View>
      <View style={styles.keyboard}>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={[styles.textButton, styles.textMainButton]}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.textButton}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.textButton}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.textButton}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.textButton}>R</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={[styles.textButton, styles.textMainButton]}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.textButton}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.textButton}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.textButton}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.textButton}>0</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={[styles.textButton, styles.textMainButton]}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.textButton}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.textButton}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.textButton}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={styles.textButton}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonColumn}>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={[styles.textButton, styles.textOpButton]}>÷</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={[styles.textButton, styles.textOpButton]}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={[styles.textButton, styles.textOpButton]}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
            <Text style={[styles.textButton, styles.textOpButton]}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.onPress}>
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

  operationView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
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
    color: '#de6c7d'
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
