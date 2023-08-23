import React, { Component }from 'react';
import{
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image } from 'react-native';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: 'Sonhos são caminhos construídos pelo coração.',
      img: require('./src/biscoito.png')
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases = [
      'Permita que o seu corpo descanse',
      'Dias nublados guardam o sol atrás deles',
      'Por trás de um dia difícil, há uma versão forte de você que sempre seguiu em frente',
      'Mudar pode dar medo, mas é uma aventura que pode te levar muito longe',
      'Tem uma força dentro de você que é capaz de sempre te surpreender!',
      'Tenha coragem para se tornar aquilo que sonha',
      'Minha missão na vida não é apenas sobreviver, mas prosperar',
      'Olhe para o céu e escute as mensagens de Deus para hoje!',
      'Jamais se esqueça: você é o motivo do sorriso de muitas pessoas',
      'Não acredite em tudo o que vê. Todo mundo está travando uma batalha interna. Não é fácil para ninguém',
      'Não tome decisões difíceis em dias complicados. Descanse e recupere suas energias!',
      'Quando tudo parecer impossível, reavalie seus planos, organize-se e veja de qual modo você pode contornar este desafio',
      'Não permita que suas metas tornem-se um peso nas suas costas. Você é quem as cria e quem tem o poder de mudá-las, não se esqueça',
      'A idade não limita sonha algum! Seu corpo mudou, sua mente amadureceu',
      'Aqueles que erraram foram aqueles que ao menos tentaram. Errar é um símbolo de coragem',
      'Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você',
      'Dê só um passo hoje. Amanhã você pode seguir com mais passos.',
      'Perdoe a si pelos seus erros. Não se torture por bobagem'
    ];
  };

  quebraBiscoito() {
    let numero = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: '"' + this.frases[numero] + '"',
      img : require('./src/biscoitoAberto.png')
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.txTitulo}>
              Biscoito da Sorte
        </Text>
        <Image 
        source = {this.state.img}
        style = {styles.img}
        />
        <Text style={styles.textoFrase}>{ this.state.textoFrase }</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}> 
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
container:{
  flex:1,
    alignItems: 'center',
  justifyContent:'center'
  },
  img:{
    width:250,
    height:250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign:'center'
  },
  txTitulo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color:'#dd7b22'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor:'#dd7b22',
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color:'#dd7b22'
  }
});

export default App;
