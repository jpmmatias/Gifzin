import React from 'react'

const header=(props)=> {
    return (
        <div className='header grid'>
            <h1 className='title'>
                {props.title}
            </h1>
            {props.title===''?(
                <a href='./'> <img onClick={props.clear} src={require('../images/close-icon.svg')}className='block mx-auto'/></a>
            ):('')}

        </div>
    )
}

export default header
