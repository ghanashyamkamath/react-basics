import React, { Component } from 'react'

 class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
        // if(this.state.isLoggedIn){
        //     return (
        //     <div>Welcome Ghanashyam</div>
        //     )
        // }else {
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
        // or 
        // return(
        //     this.state.isLoggedIn?
        //     <div>Welcome Ghanashyam</div>  :
        //     <div>Welcome Guest</div>


        // );

        return this.state.isLoggedIn && <div>Welcome Ghanashyam</div>
        
    }
}

export default UserGreeting
