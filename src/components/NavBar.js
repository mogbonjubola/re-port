import React from 'react'

class NavBar extends React.Component{
    constructor(){
        super()
        this.state={paragraph:'i am'}
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({paragraph:'i am migbonjubla'})
    }
    render(){
        return(
            <div className='navbar'>
                <button>Home</button>
                <button onClick={this.handleClick}>About</button>
                <button>Contact Me</button>
                
            </div>
        )
    
    }
   
}
export default NavBar