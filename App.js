import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

/*
let nome = 'Matheus';

    return(
      <View>
        <Text>Olá, mundo!</Text>
        <Text>Meu primeiro App</Text>
        <Text style={{color: '#ff0000', fontSize: 25, margin: 15}}>
          Sujeito Programador
        </Text>

        <Image 
          source={{ uri: img}}
          style={{width: 300, height: 300}}
        />

        <Text style={{fontSize: 30}}> {nome} </Text>
        
        // Passando propriedades (propriedades são estáticas)
        <Jobs Largura={100} Altura={200} nome="Steve Jobs"/>

// Criando componentes
class Jobs extends Component{
  render(){

    let img = 'https://sujeitoprogramador.com/steve.png'

    return(
      <View>
        <Image 
          source={{ uri: img }}
          
          // Chamando as propriedades
          style={{ width: this.props.Largura, height: this.props.Altura }}
        />

        <Text> {this.props.nome} </Text>
      </View>
    );
  }
}
*/

class App extends Component{

  // Um construtor é uma espécie de "setup inicial": 
  // roda quando o componente é criado e prepara tudo para uso dentro do componente
  constructor(props){
    super(props);
    // Chama o construtor da classe pai (Component) e garante que this.props funcione dentro do construtor

    this.state = {
      nome: ''
    // Define o estado inicial com a propriedade "nome" vazia
    };

    this.entrar = this.entrar.bind(this);
    // Faz o método entrar() uasr o this do componente (conecta a função ao componente)
  }

  entrar(nome){
    this.setState({
      nome: nome
  // Atualiza o estado "nome" para o valor recebido
    })
  }

  render(){
    return(
      <View style={{ marginTop: 20 }}>

        {/* State é mutável, diferente das props */}
        <Button title="Entrar" onPress={ () =>  this.entrar('Algum texto')} />
          
        <Text style={{fontSize: 23, color: 'red', textAlign: 'center' }}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
}

export default App;