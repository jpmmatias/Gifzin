import React, { Component } from 'react';
import Header from './components/header'
import Pesquisa, { pesquisa } from './components/pesquisa'
import Hint from './components/userHint'




class App extends Component {
  //console.log(pesquisa.state.textoPesquisa)
  state={
    Pesquisa: "",
    Loading:null,
    ApreceuPGif:false,
    clear:false

    
  }
  pegarInput=(data_from_child,loading,apareceuPrimeiroGif,clear)=>{
    if (data_from_child==='') {
      this.setState((prev,props)=>(
        {
          ...prev,
          Pesquisa:' '
        }
      ))
    }
    else{
      this.setState((prev,props)=>(
        {
          ...prev,
          Pesquisa:`Clique enter pra pesquisar por `+data_from_child
        }
      ))
    if (loading==true) {
      this.setState((prev,props)=>(
        {
          ...prev,
          Loading:loading
        }
      ))
      
      
    }
    if (loading==false) {
      this.setState((prev,props)=>(
        {
          ...prev,
          Loading:loading
        }
      ))
      
    }
    }
    if(apareceuPrimeiroGif==true){
      this.setState((prev,props)=>(
        {
          ...prev,
          ApreceuPGif:apareceuPrimeiroGif
        }
      ))
    }
    
}
  clearSearch=(e)=>{
    this.setState({
      Pesquisa: "",
      Loading:null,
      ApreceuPGif:false,
      clear:true
    })
  }
  render(){
    return (
      <div className="page">
        <Header clear={this.clearSearch} title={this.state.ApreceuPGif ===false?'Gifzin':''}/>
        <Pesquisa clear={this.state.clear} functionCallFromParent={this.pegarInput.bind(this)}  placeholder='Digite algo..'/>
        <Hint loading={this.state.Loading} hintText={this.state.Pesquisa}/>
      </div>
    );  
  }
  
}

export default App;
