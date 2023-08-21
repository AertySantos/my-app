import React, { Component }from 'react';
import{
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Image 
        source = {require('./src/biscoito.png')}
        style = {styles.img}
        />
        <Text style={styles.textoFrase}>" Alguma frase aqui "</Text>

        <TouchableOpacity style={styles.botao}> 
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>
              Quebrar Biscoito
              </Text>
            </View>
        </TouchableOpacity>
      </View>  
    )
  };
}

const styles = StyleSheet.create({
conteiner:{
  flex:1,
  
  },
  img:{
    width:250,
    height:250,
  },
  textoFrase: {
    
  },
  botao:{

  },
  btnArea:{
  
  },
  btnTexto:{

  },
});

export default App;
