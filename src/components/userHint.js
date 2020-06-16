import React from 'react'

const userHint=({loading,hintText})=>(
    <div className='user-hint'>
        {loading?<img src={require('../images/loader.svg')}className='block mx-auto'/>:hintText}
    </div>
)

export default userHint