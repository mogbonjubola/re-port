import React from 'react'

class Header extends React.Component{
    constructor(){
        super()
        this.state={firstname:'MOGBONJUBOLA',
        lastname:'AYORINDE'}
}
     render(){
        return ( 
            <div className='head'>
            <h1>{this.state.firstname}  {this.state.lastname}</h1>
            
            </div>)
     }
    
}
export default Header