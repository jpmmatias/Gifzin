import React, { Component } from 'react'



export class pesquisa extends Component {
    state={
        textoPesquisa:'',
        gifvideo:null,
        allgifs:[],
        loaded:false,
        clear:this.props.clear
    
    }
    change =(e)=>{
        const {value}=e.target
        this.setState((prevState,props)=>({
            ...prevState,
            textoPesquisa:value
        }))


        value.length>2 ?  this.props.functionCallFromParent(value,null): this.props.functionCallFromParent("",null);
       
    }
    coletarDados=async(pesquisadousuario)=>{
        this.props.functionCallFromParent('Clique enter para pesquisar outro gif!',true);
        if (this.state.clear===true) {
            this.setState({
                textoPesquisa:'',
                gifvideo:null,
                allgifs:[],
                loaded:false
            })
            alert("aaaa")
        }
        try{
            const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=bqfL5T0sxW6XulHgKFuBt8leCxRGfT1r&q=${pesquisadousuario}&limit=50&offset=0&rating=PG-13&lang=pt`)
            const data = await res.json()
            const gifs=data.data
            if (gifs.length==0||gifs.length===undefined){
                throw "Nenhum resultado para "+pesquisadousuario
            }
            const randomN=  Math.floor(Math.random()*gifs.length)
            const gifvideo = gifs[randomN].images.original.mp4
            this.setState((prev,props)=>({
                ...prev,
                gifvideo:gifvideo,
                allgifs:[...prev.allgifs,gifvideo]
            }))
        } catch(err){
            this.setState((prev,props)=>({
                ...prev,
                loaded:false,
                textoPesquisa:`Nenhum resultado para ${pesquisadousuario}`
            }))
            console.log(err)
        }
    }
    pesquisar=(e)=>{
        const {value}=e.target
        if (e.key==='Enter' && value.length>2 ) {
            this.coletarDados(value)
        }
     
    }
    videLoaded=(e)=>{
        this.setState({
            loaded: true
        })
        this.props.functionCallFromParent(`${this.state.textoPesquisa} denovo!`,false,true);

    }
    render() {
        const {textoPesquisa}=this.state
        return (
            <div className='search grid'>

            {this.state.allgifs.map(gif=>{
                return <video  onLoadedData={this.videLoaded} className={`grid-item video ${this.state.loaded ?'loaded':''}`} autoPlay loop src={gif}></video>
            })}
            <input onChange={this.change} onKeyPress={this.pesquisar} className='input grid-item' placeholder={this.props.placeholder} value={textoPesquisa}>
            </input>
          </div>
        )
    }
}

export default pesquisa

