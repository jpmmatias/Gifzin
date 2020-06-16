import React, { Component } from 'react'

export default class gif extends Component {
    render() {
        const gif = this.props.gif
        return (
            <video className='grid-item video' autoPlay loop src={gif}></video>
        )
    }
}
